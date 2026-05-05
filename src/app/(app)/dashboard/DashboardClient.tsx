"use client";

import { useState, useTransition } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { useRouter } from "next/navigation";

import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import TrendingDownOutlinedIcon from "@mui/icons-material/TrendingDownOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";

import PageHeader from "@/components/PageHeader";
import TransactionTable from "@/components/TransactionTable";
import TransactionDetails from "@/components/TransactionDetails";
import Button from "@/components/Button";
import SummaryCard from "@/components/SummaryCard";
import LoadingOverlay from "@/components/LoadingOverlay";
import FeedbackSnackbar from "@/components/FeedbackSnackbar";
import { TransactionModal } from "@/components/TransactionModal";

import { Transaction } from "@/types/transaction";
import {
  DASHBOARD_BREADCRUMB,
  DASHBOARD_LATEST_LIMIT,
} from "@/constants/dashboard";

import { getDashboardSummary } from "@/utils/getDashboardSummary";
import { getLatestTransactions } from "@/utils/getLatestTransactions";
import {
  saveTransactionAction,
  deleteTransactionAction,
} from "@/actions/transactionActions";
import { dashboardClientStyles } from "@/styles/dashboardClientStyles";

type DashboardClientProps = {
  initialTransactions: Transaction[];
};

type Feedback = {
  open: boolean;
  message: string;
  type: "success" | "error";
};

const MIN_LOADING_TIME = 700;
const HIDDEN_VALUE = "R$ ••••••";
const HIDDEN_TOTAL = "••••";

function wait(milliseconds: number) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

function formatCurrency(value: number) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function getErrorMessage(error: unknown, fallbackMessage: string) {
  if (error instanceof Error && error.message) {
    return error.message;
  }

  return fallbackMessage;
}

export default function DashboardClient({
  initialTransactions,
}: DashboardClientProps) {
  const [transactions, setTransactions] =
    useState<Transaction[]>(initialTransactions);

  const [showValues, setShowValues] = useState(true);

  const [selectedTransaction, setSelectedTransaction] =
    useState<Transaction | null>(null);

  const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("");

  const [feedback, setFeedback] = useState<Feedback>({
    open: false,
    message: "",
    type: "success",
  });

  const [isPending, startTransition] = useTransition();

  const router = useRouter();

  const isLoading = Boolean(loadingMessage) || isPending;

  const summary = getDashboardSummary(transactions);

  const latestTransactions = getLatestTransactions(
    transactions,
    DASHBOARD_LATEST_LIMIT
  );

  const balanceValue = showValues
    ? formatCurrency(summary.balance)
    : HIDDEN_VALUE;

  const incomeValue = showValues
    ? formatCurrency(summary.income)
    : HIDDEN_VALUE;

  const expenseValue = showValues
    ? formatCurrency(summary.expense)
    : HIDDEN_VALUE;

  const totalTransactionsValue = showValues
    ? String(summary.totalTransactions)
    : HIDDEN_TOTAL;

  async function runWithLoading(message: string, action: () => Promise<void>) {
    if (loadingMessage) return;

    setLoadingMessage(message);

    const startTime = Date.now();

    try {
      await action();
    } finally {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(MIN_LOADING_TIME - elapsedTime, 0);

      if (remainingTime > 0) {
        await wait(remainingTime);
      }

      setLoadingMessage("");
    }
  }

  function showFeedback(message: string, type: Feedback["type"] = "success") {
    setFeedback({
      open: true,
      message,
      type,
    });
  }

  function handleCloseFeedback() {
    setFeedback((currentFeedback) => ({
      ...currentFeedback,
      open: false,
    }));
  }

  function handleToggleValues(event: React.MouseEvent<HTMLButtonElement>) {
    event.stopPropagation();
    setShowValues((currentValue) => !currentValue);
  }

  function handleOpenNewTransactionModal() {
    if (isLoading) return;

    setSelectedTransaction(null);
    setIsTransactionModalOpen(true);
  }

  function handleEditTransaction(transaction: Transaction) {
    if (isLoading) return;

    setSelectedTransaction(transaction);
    setIsTransactionModalOpen(true);
  }

  function handleCloseTransactionModal() {
    if (isLoading) return;

    setIsTransactionModalOpen(false);
  }

  function handleGoToTransactions() {
    if (isLoading) return;

    router.push("/transactions");
  }

  function handleSaveTransaction(savedTransaction: Transaction) {
    if (isLoading) return;

    const isEditing = Boolean(savedTransaction.id);

    const loadingText = isEditing
      ? "Atualizando transação..."
      : "Criando transação...";

    const errorText = isEditing
      ? "Não foi possível atualizar a transação. Tente novamente."
      : "Não foi possível criar a transação. Tente novamente.";

    startTransition(async () => {
      await runWithLoading(loadingText, async () => {
        try {
          const saved = await saveTransactionAction(savedTransaction);

          const transactionExists = transactions.some(
            (transaction) => transaction.id === saved.id
          );

          if (transactionExists) {
            setTransactions((currentTransactions) =>
              currentTransactions.map((transaction) =>
                transaction.id === saved.id ? saved : transaction
              )
            );

            showFeedback("Transação atualizada com sucesso.");
          } else {
            setTransactions((currentTransactions) => [
              saved,
              ...currentTransactions,
            ]);

            showFeedback("Transação criada com sucesso.");
          }

          setSelectedTransaction(saved);
          setIsTransactionModalOpen(false);

          router.refresh();
        } catch (error) {
          showFeedback(getErrorMessage(error, errorText), "error");
        }
      });
    });
  }

  function handleDeleteTransaction(transactionId: string) {
    if (isLoading) return;

    if (!transactionId) {
      showFeedback("Não foi possível identificar a transação.", "error");
      return;
    }

    startTransition(async () => {
      await runWithLoading("Excluindo transação...", async () => {
        try {
          await deleteTransactionAction(transactionId);

          setTransactions((currentTransactions) =>
            currentTransactions.filter(
              (transaction) => transaction.id !== transactionId
            )
          );

          setSelectedTransaction(null);
          setIsTransactionModalOpen(false);

          showFeedback("Transação excluída com sucesso.");
          router.refresh();
        } catch (error) {
          showFeedback(
            getErrorMessage(
              error,
              "Não foi possível excluir a transação. Tente novamente."
            ),
            "error"
          );
        }
      });
    });
  }

  return (
    <>
      <Box
        onClick={() => {
          if (!isLoading) {
            setSelectedTransaction(null);
          }
        }}
        sx={{
          ...dashboardClientStyles.layout,
          gridTemplateColumns: {
            xs: "1fr",
            lg: selectedTransaction ? "1fr 320px" : "1fr",
          },
        }}
      >
        <Box sx={dashboardClientStyles.content}>
          <PageHeader
            title="Dashboard"
            breadcrumb={DASHBOARD_BREADCRUMB}
          />

          <Box sx={dashboardClientStyles.cardsGrid}>
            <SummaryCard
              label="Saldo atual"
              value={balanceValue}
              icon={<AccountBalanceWalletOutlinedIcon />}
              iconVariant="neutral"
              trend="Visão geral da sua situação financeira"
              action={
                <IconButton
                  size="small"
                  onClick={handleToggleValues}
                  aria-label={
                    showValues
                      ? "Ocultar valores financeiros"
                      : "Mostrar valores financeiros"
                  }
                  sx={dashboardClientStyles.iconButton}
                >
                  {showValues ? (
                    <VisibilityOutlinedIcon fontSize="small" />
                  ) : (
                    <VisibilityOffOutlinedIcon fontSize="small" />
                  )}
                </IconButton>
              }
            />

            <SummaryCard
              label="Total de entradas"
              value={incomeValue}
              icon={<TrendingUpOutlinedIcon />}
              iconVariant="positive"
              trend="Dinheiro que entrou na sua conta"
            />

            <SummaryCard
              label="Total de saídas"
              value={expenseValue}
              icon={<TrendingDownOutlinedIcon />}
              iconVariant="negative"
              trend="Dinheiro que saiu da sua conta"
            />

            <SummaryCard
              label="Transações cadastradas"
              value={totalTransactionsValue}
              icon={<TuneOutlinedIcon />}
              iconVariant="neutral"
              trend="Histórico de movimentações realizadas"
            />
          </Box>

          <Box sx={dashboardClientStyles.sectionHeader}>
            <Typography sx={dashboardClientStyles.sectionTitle}>
              Últimas transações
            </Typography>

            <Box sx={dashboardClientStyles.actions}>
              <Button
                variantType="ghost"
                onClick={handleGoToTransactions}
                disabled={isLoading}
              >
                Ver todas
              </Button>

              <Button
                variantType="primary"
                onClick={handleOpenNewTransactionModal}
                disabled={isLoading}
              >
                Nova transação
              </Button>
            </Box>
          </Box>

          <Box sx={dashboardClientStyles.tableWrapper}>
            <TransactionTable
              transactions={latestTransactions}
              selectedTransactionId={selectedTransaction?.id}
              onSelectTransaction={
                isLoading ? undefined : setSelectedTransaction
              }
              emptyTitle="Nenhuma movimentação recente"
              emptyDescription="Cadastre sua primeira transação para começar."
              emptyActionLabel="Nova transação"
              onEmptyAction={
                isLoading ? undefined : handleOpenNewTransactionModal
              }
            />
          </Box>
        </Box>

        {selectedTransaction && (
          <TransactionDetails
            transaction={selectedTransaction}
            onEdit={handleEditTransaction}
            onDelete={handleDeleteTransaction}
          />
        )}
      </Box>

      <TransactionModal
        open={isTransactionModalOpen}
        onClose={handleCloseTransactionModal}
        transaction={selectedTransaction}
        onSave={handleSaveTransaction}
        onDelete={handleDeleteTransaction}
      />

      <LoadingOverlay open={Boolean(loadingMessage)} message={loadingMessage} />

      <FeedbackSnackbar
        open={feedback.open}
        message={feedback.message}
        type={feedback.type}
        onClose={handleCloseFeedback}
      />
    </>
  );
}
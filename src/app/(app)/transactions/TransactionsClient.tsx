"use client";

import { useState, useTransition } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { useRouter } from "next/navigation";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import PageHeader from "@/components/PageHeader";
import InputSearch from "@/components/InputSearch";
import Button from "@/components/Button";
import TransactionTable from "@/components/TransactionTable";
import TransactionDetails from "@/components/TransactionDetails";
import LoadingOverlay from "@/components/LoadingOverlay";
import FeedbackSnackbar from "@/components/FeedbackSnackbar";
import { TransactionModal } from "@/components/TransactionModal";

import { Transaction } from "@/types/transaction";
import {
  TRANSACTION_BREADCRUMB,
  TRANSACTION_ITEMS_PER_PAGE,
  TRANSACTION_OPERATION_LABEL,
  TRANSACTION_STATUS_LABEL,
  TRANSACTION_TYPE_LABEL,
} from "@/constants/transaction";
import { filterTransactions } from "@/utils/filterTransactions";
import { paginate } from "@/utils/paginate";
import {
  saveTransactionAction,
  deleteTransactionAction,
} from "@/actions/transactionActions";
import { transactionsClientStyles } from "@/styles/transactionsClientStyles";

type TransactionsClientProps = {
  initialTransactions: Transaction[];
};

type Feedback = {
  open: boolean;
  message: string;
  type: "success" | "error";
};

export type TransactionSortField =
  | "description"
  | "category"
  | "type"
  | "operation"
  | "account"
  | "amount"
  | "date"
  | "status";

export type SortDirection = "asc" | "desc" | null;

const MIN_LOADING_TIME = 700;

function wait(milliseconds: number) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

function getTransactionSortValue(
  transaction: Transaction,
  field: TransactionSortField
) {
  if (field === "type") {
    return TRANSACTION_TYPE_LABEL[transaction.type];
  }

  if (field === "operation") {
    return TRANSACTION_OPERATION_LABEL[transaction.operation];
  }

  if (field === "status") {
    return TRANSACTION_STATUS_LABEL[transaction.status || "pending"];
  }

  return transaction[field] || "";
}

function sortTransactions(
  transactions: Transaction[],
  sortField: TransactionSortField | null,
  sortDirection: SortDirection
) {
  if (!sortField || !sortDirection) {
    return transactions;
  }

  return [...transactions].sort((firstTransaction, secondTransaction) => {
    const firstValue = getTransactionSortValue(firstTransaction, sortField);
    const secondValue = getTransactionSortValue(secondTransaction, sortField);

    if (typeof firstValue === "number" && typeof secondValue === "number") {
      return sortDirection === "asc"
        ? firstValue - secondValue
        : secondValue - firstValue;
    }

    return sortDirection === "asc"
      ? String(firstValue).localeCompare(String(secondValue), "pt-BR", {
          numeric: true,
        })
      : String(secondValue).localeCompare(String(firstValue), "pt-BR", {
          numeric: true,
        });
  });
}

function getErrorMessage(error: unknown, fallbackMessage: string) {
  if (error instanceof Error && error.message) {
    return error.message;
  }

  return fallbackMessage;
}

export default function TransactionsClient({
  initialTransactions,
}: TransactionsClientProps) {
  const [transactions, setTransactions] =
    useState<Transaction[]>(initialTransactions);

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const [sortField, setSortField] =
    useState<TransactionSortField | null>(null);

  const [sortDirection, setSortDirection] =
    useState<SortDirection>(null);

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

  const filteredTransactions = filterTransactions(transactions, search);

  const sortedTransactions = sortTransactions(
    filteredTransactions,
    sortField,
    sortDirection
  );

  const totalPages = Math.ceil(
    sortedTransactions.length / TRANSACTION_ITEMS_PER_PAGE
  );

  const paginatedTransactions = paginate(
    sortedTransactions,
    currentPage,
    TRANSACTION_ITEMS_PER_PAGE
  );

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

  function handleSearchChange(value: string) {
    setSearch(value);
    setCurrentPage(1);
    setSelectedTransaction(null);
  }

  function handleSort(field: TransactionSortField) {
    if (isLoading) return;

    if (sortField !== field) {
      setSortField(field);
      setSortDirection("asc");
    } else if (sortDirection === "asc") {
      setSortDirection("desc");
    } else {
      setSortField(null);
      setSortDirection(null);
    }

    setCurrentPage(1);
    setSelectedTransaction(null);
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

            setCurrentPage(1);
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

          const remainingTransactions = filteredTransactions.length - 1;

          const newTotalPages = Math.ceil(
            remainingTransactions / TRANSACTION_ITEMS_PER_PAGE
          );

          if (currentPage > newTotalPages && currentPage > 1) {
            setCurrentPage(currentPage - 1);
          }

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

  function handlePreviousPage() {
    if (isLoading || currentPage <= 1) return;

    setCurrentPage(currentPage - 1);
    setSelectedTransaction(null);
  }

  function handleNextPage() {
    if (isLoading || currentPage >= totalPages) return;

    setCurrentPage(currentPage + 1);
    setSelectedTransaction(null);
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
          ...transactionsClientStyles.layout,
          gridTemplateColumns: {
            xs: "1fr",
            lg: selectedTransaction ? "1fr 320px" : "1fr",
          },
        }}
      >
        <Box sx={transactionsClientStyles.content}>
          <PageHeader title="Transações" breadcrumb={TRANSACTION_BREADCRUMB} />

          <Box sx={transactionsClientStyles.toolbar}>
            <Box sx={transactionsClientStyles.searchWrapper}>
              <InputSearch value={search} onChange={handleSearchChange} />
            </Box>

            <Button
              onClick={handleOpenNewTransactionModal}
              disabled={isLoading}
            >
              Nova transação
            </Button>
          </Box>

          <Box sx={transactionsClientStyles.tableWrapper}>
            <TransactionTable
              transactions={paginatedTransactions}
              selectedTransactionId={selectedTransaction?.id}
              onSelectTransaction={
                isLoading ? undefined : setSelectedTransaction
              }
              sortField={sortField}
              sortDirection={sortDirection}
              onSort={handleSort}
              emptyTitle={
                transactions.length === 0
                  ? "Cadastre sua primeira transação"
                  : "Nenhuma transação encontrada"
              }
              emptyDescription={
                transactions.length === 0
                  ? "Comece adicionando entradas e saídas para acompanhar seu saldo."
                  : "Tente buscar por outro termo."
              }
              emptyActionLabel={
                transactions.length === 0 ? "Nova transação" : undefined
              }
              onEmptyAction={
                transactions.length === 0
                  ? handleOpenNewTransactionModal
                  : undefined
              }
            />
          </Box>

          <Box sx={transactionsClientStyles.pagination}>
            <Typography sx={transactionsClientStyles.paginationText}>
              {sortedTransactions.length} registros encontrados
            </Typography>

            <Box sx={transactionsClientStyles.paginationActions}>
              <Typography sx={transactionsClientStyles.paginationText}>
                Página {currentPage} de {totalPages || 1}
              </Typography>

              <Box sx={transactionsClientStyles.paginationButtons}>
                <IconButton
                  size="small"
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1 || isLoading}
                  aria-label="Página anterior"
                  sx={transactionsClientStyles.paginationButton}
                >
                  <KeyboardArrowLeftIcon fontSize="small" />
                </IconButton>

                <IconButton
                  size="small"
                  onClick={handleNextPage}
                  disabled={
                    currentPage === totalPages ||
                    totalPages === 0 ||
                    isLoading
                  }
                  aria-label="Próxima página"
                  sx={transactionsClientStyles.paginationButton}
                >
                  <KeyboardArrowRightIcon fontSize="small" />
                </IconButton>
              </Box>
            </Box>
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
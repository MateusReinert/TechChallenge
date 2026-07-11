"use client";

import {
  useEffect,
  useMemo,
  useState,
  useTransition,
} from "react";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

import Button from "@/components/Button";
import DashboardCharts from "@/components/DashboardCharts";
import DashboardInsights from "@/components/DashboardInsights";
import DashboardSummaryCards from "@/components/DashboardSummaryCards";
import FeedbackSnackbar from "@/components/FeedbackSnackbar";
import FilterBar, {
  type FilterBarValue,
} from "@/components/FilterBar";
import LoadingOverlay from "@/components/LoadingOverlay";
import PageHeader from "@/components/PageHeader";
import TransactionDetails from "@/components/TransactionDetails";
import { TransactionModal } from "@/components/TransactionModal";
import TransactionTable from "@/components/TransactionTable";

import { useFeedback } from "@/hooks/useFeedback";
import { useLoadingAction } from "@/hooks/useLoadingAction";
import { useTransactionCrud } from "@/hooks/useTransactionCrud";
import { useTransactionFilterItems } from "@/hooks/useTransactionFilterItems";
import { useTransactionModal } from "@/hooks/useTransactionModal";

import {
  DASHBOARD_BREADCRUMB,
  DASHBOARD_LATEST_LIMIT,
} from "@/constants/dashboard";

import { dashboardClientStyles } from "@/styles/dashboardClientStyles";

import { initializeTransactions } from "@/store/features/transactions/transactionsSlice";
import {
  useAppDispatch,
  useAppSelector,
} from "@/store/hooks";

import type { Transaction } from "@/types/transaction";

import { filterDashboardTransactions } from "@/utils/dashboardFiltersUtils";
import { getDashboardChartsData } from "@/utils/getDashboardChartsData";
import { getDashboardSummary } from "@/utils/getDashboardSummary";
import { getLatestTransactions } from "@/utils/getLatestTransactions";

type DashboardClientProps = {
  initialTransactions: Transaction[];
};

const INITIAL_FILTERS: FilterBarValue = {
  search: "",
  category: "",
  type: "",
  account: "",
  status: "",
  dateRange: "",
  amountRange: "",
};

export default function DashboardClient({
  initialTransactions,
}: DashboardClientProps) {
  const [filters, setFilters] =
    useState<FilterBarValue>(INITIAL_FILTERS);

  const [showValues, setShowValues] = useState(true);
  const [isPending, startTransition] = useTransition();

  const router = useRouter();
  const dispatch = useAppDispatch();

  const storedTransactions = useAppSelector(
    (state) => state.transactions.items
  );

  const transactionsInitialized = useAppSelector(
    (state) => state.transactions.initialized
  );

  const transactions = transactionsInitialized
    ? storedTransactions
    : initialTransactions;

  useEffect(() => {
    dispatch(
      initializeTransactions(initialTransactions)
    );
  }, [dispatch, initialTransactions]);

  const {
    loadingMessage,
    isLoading: isLoadingAction,
    runWithLoading,
  } = useLoadingAction();

  const {
    feedback,
    showFeedback,
    closeFeedback,
  } = useFeedback();

  const isLoading = isLoadingAction || isPending;

  const {
    selectedTransaction,
    setSelectedTransaction,
    isTransactionModalOpen,
    selectTransaction,
    clearSelectedTransaction,
    openNewTransactionModal,
    openEditTransactionModal,
    closeTransactionModal,
    closeTransactionModalImmediately,
    clearSelectedTransactionImmediately,
  } = useTransactionModal(isLoading);

  const {
    handleSaveTransaction,
    handleDeleteTransaction,
  } = useTransactionCrud({
    transactions,
    isLoading,
    startTransition,
    runWithLoading,
    showFeedback,
    setSelectedTransaction,
    clearSelectedTransactionImmediately,
    closeTransactionModalImmediately,
    refresh: router.refresh,
  });

  const filteredTransactions = useMemo(
    () =>
      filterDashboardTransactions(
        transactions,
        filters
      ),
    [transactions, filters]
  );

  const filterItems =
    useTransactionFilterItems(transactions);

  const summary =
    getDashboardSummary(filteredTransactions);

  const { monthlyData, categoryData } =
    getDashboardChartsData(filteredTransactions);

  const latestTransactions =
    getLatestTransactions(
      filteredTransactions,
      DASHBOARD_LATEST_LIMIT
    );

  function handleToggleValues(
    event?: React.MouseEvent<HTMLElement>
  ) {
    event?.stopPropagation();

    setShowValues(
      (currentValue) => !currentValue
    );
  }

  function handleGoToTransactions() {
    if (isLoading) return;

    router.push("/transactions");
  }

  function handleClearFilters() {
    setFilters(INITIAL_FILTERS);
    clearSelectedTransaction();
  }

  return (
    <>
      <Box
        onClick={() => {
          if (!isLoading) {
            clearSelectedTransaction();
          }
        }}
        sx={{
          ...dashboardClientStyles.layout,
          gridTemplateColumns: {
            xs: "1fr",
            lg: selectedTransaction
              ? "1fr 320px"
              : "1fr",
          },
        }}
      >
        <Box sx={dashboardClientStyles.content}>
          <Box sx={dashboardClientStyles.pageTop}>
            <PageHeader
              title="Dashboard"
              breadcrumb={DASHBOARD_BREADCRUMB}
            />

            <Box
              sx={dashboardClientStyles.topControls}
            >
              <FilterBar
                value={filters}
                filters={filterItems}
                searchPlaceholder="Buscar transações..."
                onChange={setFilters}
                onClear={handleClearFilters}
              />

              <Box
                sx={
                  dashboardClientStyles.headerActions
                }
              >
                <Button
                  variantType="outlined"
                  onClick={handleToggleValues}
                  disabled={isLoading}
                >
                  <Box
                    sx={
                      dashboardClientStyles.buttonContent
                    }
                  >
                    {showValues ? (
                      <VisibilityOutlinedIcon fontSize="small" />
                    ) : (
                      <VisibilityOffOutlinedIcon fontSize="small" />
                    )}

                    {showValues
                      ? "Ocultar valores"
                      : "Mostrar valores"}
                  </Box>
                </Button>

                <Button
                  variantType="primary"
                  onClick={openNewTransactionModal}
                  disabled={isLoading}
                >
                  <Box
                    sx={
                      dashboardClientStyles.buttonContent
                    }
                  >
                    Nova transação
                    <AddRoundedIcon fontSize="small" />
                  </Box>
                </Button>
              </Box>
            </Box>
          </Box>

          <DashboardSummaryCards
            summary={summary}
            showValues={showValues}
          />

          <DashboardCharts
            monthlyData={monthlyData}
            categoryData={categoryData}
          />

          <Box
            sx={dashboardClientStyles.dashboardGrid}
          >
            <DashboardInsights
              transactions={filteredTransactions}
            />

            <Box
              sx={
                dashboardClientStyles.transactionsCard
              }
            >
              <Box
                sx={
                  dashboardClientStyles.sectionHeader
                }
              >
                <Typography
                  sx={
                    dashboardClientStyles.sectionTitle
                  }
                >
                  Últimas transações
                </Typography>

                <Box
                  sx={dashboardClientStyles.actions}
                >
                  <Button
                    variantType="ghost"
                    onClick={handleGoToTransactions}
                    disabled={isLoading}
                  >
                    Ver todas
                  </Button>
                </Box>
              </Box>

              <Box
                sx={
                  dashboardClientStyles.tableWrapper
                }
              >
                <TransactionTable
                  transactions={latestTransactions}
                  selectedTransactionId={
                    selectedTransaction?.id
                  }
                  onSelectTransaction={
                    isLoading
                      ? undefined
                      : selectTransaction
                  }
                  emptyTitle="Nenhuma movimentação encontrada"
                  emptyDescription="Ajuste os filtros ou cadastre uma nova transação."
                  emptyActionLabel="Nova transação"
                  onEmptyAction={
                    isLoading
                      ? undefined
                      : openNewTransactionModal
                  }
                />
              </Box>
            </Box>
          </Box>
        </Box>

        {selectedTransaction && (
          <TransactionDetails
            transaction={selectedTransaction}
            onEdit={openEditTransactionModal}
            onDelete={handleDeleteTransaction}
          />
        )}
      </Box>

      <TransactionModal
        open={isTransactionModalOpen}
        onClose={closeTransactionModal}
        transaction={selectedTransaction}
        onSave={handleSaveTransaction}
        onDelete={handleDeleteTransaction}
      />

      <LoadingOverlay
        open={Boolean(loadingMessage)}
        message={loadingMessage}
      />

      <FeedbackSnackbar
        open={feedback.open}
        message={feedback.message}
        type={feedback.type}
        onClose={closeFeedback}
      />
    </>
  );
}
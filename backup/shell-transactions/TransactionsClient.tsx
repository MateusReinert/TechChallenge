"use client";

import {
  useEffect,
  useMemo,
  useState,
  useTransition,
} from "react";

import {
  Box,
  IconButton,
  Typography,
} from "@mui/material";

import { useRouter } from "next/navigation";

import AddRoundedIcon from "@mui/icons-material/AddRounded";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import {
  Button,
  FeedbackSnackbar,
  FilterBar,
  LoadingOverlay,
  PageHeader,
  type FilterBarValue,
} from "@finance/ui";

import TransactionDetails from "@/components/TransactionDetails";
import { TransactionModal } from "@/components/TransactionModal";
import TransactionTable from "@/components/TransactionTable";

import { useFeedback } from "@/hooks/useFeedback";
import { useLoadingAction } from "@/hooks/useLoadingAction";
import { useTransactionCrud } from "@/hooks/useTransactionCrud";
import { useTransactionFilterItems } from "@/hooks/useTransactionFilterItems";
import { useTransactionModal } from "@/hooks/useTransactionModal";

import { useAppDispatch, useAppSelector } from "@/store/hooks";

import {
  initializeTransactions,
  selectTransactions,
  selectTransactionsInitialized,
} from "@/store/features/transactions/transactionsSlice";

import {
  TRANSACTION_BREADCRUMB,
  TRANSACTION_ITEMS_PER_PAGE,
} from "@/constants/transaction";

import { transactionsClientStyles } from "@/styles/transactionsClientStyles";

import type { Transaction } from "@/types/transaction";

import { filterDashboardTransactions } from "@/utils/dashboardFiltersUtils";
import { getPaginatedTransactions } from "@/utils/getPaginatedTransactions";

import {
  sortTransactions,
  type SortDirection,
  type TransactionSortField,
} from "@/utils/transactionSort";

type TransactionsClientProps = {
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

export default function TransactionsClient({
  initialTransactions,
}: TransactionsClientProps) {
  const [filters, setFilters] =
    useState<FilterBarValue>(INITIAL_FILTERS);

  const [currentPage, setCurrentPage] = useState(1);

  const [sortField, setSortField] =
    useState<TransactionSortField | null>(null);

  const [sortDirection, setSortDirection] =
    useState<SortDirection>(null);

  const [isPending, startTransition] =
    useTransition();

  const router = useRouter();
  const dispatch = useAppDispatch();

  const storedTransactions = useAppSelector(
    selectTransactions
  );

  const transactionsInitialized = useAppSelector(
    selectTransactionsInitialized
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

  const isLoading =
    isLoadingAction || isPending;

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

  const sortedTransactions = sortTransactions(
    filteredTransactions,
    sortField,
    sortDirection
  );

  const {
    totalPages,
    paginatedTransactions,
  } = getPaginatedTransactions({
    transactions: sortedTransactions,
    currentPage,
    itemsPerPage: TRANSACTION_ITEMS_PER_PAGE,
  });

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
    onTransactionCreated: () => {
      setCurrentPage(1);
    },
    onTransactionDeleted: () => {
      const remainingTransactions =
        filteredTransactions.length - 1;

      const newTotalPages = Math.ceil(
        remainingTransactions /
          TRANSACTION_ITEMS_PER_PAGE
      );

      if (
        currentPage > newTotalPages &&
        currentPage > 1
      ) {
        setCurrentPage(
          (currentValue) => currentValue - 1
        );
      }
    },
  });

  function handleFiltersChange(
    nextFilters: FilterBarValue
  ) {
    setFilters(nextFilters);
    setCurrentPage(1);
    clearSelectedTransaction();
  }

  function handleClearFilters() {
    setFilters(INITIAL_FILTERS);
    setCurrentPage(1);
    clearSelectedTransaction();
  }

  function handleSort(
    field: TransactionSortField
  ) {
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
    clearSelectedTransaction();
  }

  function handlePreviousPage() {
    if (isLoading || currentPage <= 1) return;

    setCurrentPage(
      (currentValue) => currentValue - 1
    );

    clearSelectedTransaction();
  }

  function handleNextPage() {
    if (
      isLoading ||
      currentPage >= totalPages
    ) {
      return;
    }

    setCurrentPage(
      (currentValue) => currentValue + 1
    );

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
          ...transactionsClientStyles.layout,
          gridTemplateColumns: {
            xs: "1fr",
            lg: selectedTransaction
              ? "1fr 320px"
              : "1fr",
          },
        }}
      >
        <Box sx={transactionsClientStyles.content}>
          <PageHeader
            title="Transações"
            breadcrumb={TRANSACTION_BREADCRUMB}
          />

          <Box sx={transactionsClientStyles.toolbar}>
            <FilterBar
              value={filters}
              filters={filterItems}
              searchPlaceholder="Buscar transações..."
              onChange={handleFiltersChange}
              onClear={handleClearFilters}
            />

            <Button
              variantType="primary"
              onClick={openNewTransactionModal}
              disabled={isLoading}
              sx={
                transactionsClientStyles.newTransactionButton
              }
            >
              <Box
                sx={
                  transactionsClientStyles.buttonContent
                }
              >
                Nova transação
                <AddRoundedIcon fontSize="small" />
              </Box>
            </Button>
          </Box>

          <Box
            sx={
              transactionsClientStyles.tableWrapper
            }
          >
            <TransactionTable
              transactions={paginatedTransactions}
              selectedTransactionId={
                selectedTransaction?.id
              }
              onSelectTransaction={
                isLoading
                  ? undefined
                  : selectTransaction
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
                  : "Ajuste os filtros para encontrar outras movimentações."
              }
              emptyActionLabel={
                transactions.length === 0
                  ? "Nova transação"
                  : undefined
              }
              onEmptyAction={
                transactions.length === 0
                  ? openNewTransactionModal
                  : undefined
              }
            />
          </Box>

          <Box
            sx={transactionsClientStyles.pagination}
          >
            <Typography
              sx={
                transactionsClientStyles.paginationText
              }
            >
              {sortedTransactions.length} registros
              encontrados
            </Typography>

            <Box
              sx={
                transactionsClientStyles.paginationActions
              }
            >
              <Typography
                sx={
                  transactionsClientStyles.paginationText
                }
              >
                Página {currentPage} de{" "}
                {totalPages || 1}
              </Typography>

              <Box
                sx={
                  transactionsClientStyles.paginationButtons
                }
              >
                <IconButton
                  size="small"
                  onClick={handlePreviousPage}
                  disabled={
                    currentPage === 1 || isLoading
                  }
                  aria-label="Página anterior"
                  sx={
                    transactionsClientStyles.paginationButton
                  }
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
                  sx={
                    transactionsClientStyles.paginationButton
                  }
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
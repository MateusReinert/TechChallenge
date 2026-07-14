"use client";

import {
  useCallback,
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

import {
  useRouter,
  useSearchParams,
} from "next/navigation";

import {
  createTransactionSearchParams,
  getTransactionUrlState,
  INITIAL_TRANSACTION_FILTERS,
} from "@finance/shared";

import AddRoundedIcon from "@mui/icons-material/AddRounded";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  FilterBar,
  type FilterBarValue,
} from "@finance/ui";
import { LoadingOverlay } from "@finance/ui";
import {
  Button,
  FeedbackSnackbar,
  PageHeader,
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

export default function TransactionsClient({
  initialTransactions,
}: TransactionsClientProps) {
  const searchParams = useSearchParams();

  const {
    filters,
    page: currentPage,
  } = useMemo(
    () => getTransactionUrlState(searchParams),
    [searchParams]
  );

  const [sortField, setSortField] =
    useState<TransactionSortField | null>(null);

  const [sortDirection, setSortDirection] =
    useState<SortDirection>(null);

  const [isPending, startTransition] =
    useTransition();

  const router = useRouter();
  const dispatch = useAppDispatch();

  const updateTransactionUrl = useCallback(
    (
      nextFilters: FilterBarValue,
      nextPage: number
    ) => {
      const nextSearchParams =
        createTransactionSearchParams(
          nextFilters,
          nextPage
        );
      
      const queryString =
        nextSearchParams.toString();
      
      const nextUrl = queryString
        ? `${window.location.pathname}?${queryString}`
        : window.location.pathname;
      
      window.history.replaceState(
        null,
        "",
        nextUrl
      );
    },
    []
  );

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

 const sortedTransactions = useMemo(
  () =>
    sortTransactions(
      filteredTransactions,
      sortField,
      sortDirection
    ),
  [
    filteredTransactions,
    sortField,
    sortDirection,
  ]
);

const {
  totalPages,
  paginatedTransactions,
} = useMemo(
  () =>
    getPaginatedTransactions({
      transactions: sortedTransactions,
      currentPage,
      itemsPerPage: TRANSACTION_ITEMS_PER_PAGE,
    }),
  [sortedTransactions, currentPage]
);

  useEffect(() => {
    if (
      totalPages > 0 &&
      currentPage > totalPages
    ) {
      updateTransactionUrl(
        filters,
        totalPages
      );
    }
  }, [
    currentPage,
    filters,
    totalPages,
    updateTransactionUrl,
  ]);
  
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
      updateTransactionUrl(filters, 1);
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
        updateTransactionUrl(
          filters,
          currentPage - 1
        );
      }
    },
  });

  function handleFiltersChange(
    nextFilters: FilterBarValue
  ) {
    updateTransactionUrl(nextFilters, 1);
    clearSelectedTransaction();
  }

  function handleClearFilters() {
    updateTransactionUrl(
      INITIAL_TRANSACTION_FILTERS,
      1
    );

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

    updateTransactionUrl(filters, 1);
    clearSelectedTransaction();
  }

  function handlePreviousPage() {
    if (isLoading || currentPage <= 1) return;

    updateTransactionUrl(
      filters,
      currentPage - 1
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
  
    updateTransactionUrl(
      filters,
      currentPage + 1
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
"use client";

import type { KeyboardEvent, MouseEvent } from "react";
import { Box, Typography } from "@mui/material";

import NorthEastRoundedIcon from "@mui/icons-material/NorthEastRounded";
import SouthEastRoundedIcon from "@mui/icons-material/SouthEastRounded";

import StatusTag from "@/components/StatusTag";
import EmptyState from "@/components/EmptyState";

import { transactionTableStyles } from "@/styles/transactionTableStyles";
import { Transaction } from "@/types/transaction";
import {
  TRANSACTION_OPERATION_LABEL,
  TRANSACTION_STATUS_LABEL,
  TRANSACTION_TYPE_LABEL,
} from "@/constants/transaction";

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

type TransactionTableProps = {
  transactions?: Transaction[];
  selectedTransactionId?: string;
  onSelectTransaction?: (transaction: Transaction) => void;
  sortField?: TransactionSortField | null;
  sortDirection?: SortDirection;
  onSort?: (field: TransactionSortField) => void;
  emptyTitle?: string;
  emptyDescription?: string;
  emptyActionLabel?: string;
  onEmptyAction?: () => void;
};

export default function TransactionTable({
  transactions = [],
  selectedTransactionId,
  onSelectTransaction,
  sortField = null,
  sortDirection = null,
  onSort,
  emptyTitle = "Nenhuma transação encontrada",
  emptyDescription = "Quando houver movimentações, elas aparecerão aqui.",
  emptyActionLabel,
  onEmptyAction,
}: TransactionTableProps) {
  function getAriaSort(field: TransactionSortField) {
    if (sortField !== field || !sortDirection) return "none";
    return sortDirection === "asc" ? "ascending" : "descending";
  }

  function renderHeader(label: string, field: TransactionSortField) {
    const isActive = sortField === field;

    return (
      <Box role="columnheader" aria-sort={getAriaSort(field)}>
        <Typography
          component="button"
          type="button"
          onClick={() => onSort?.(field)}
          aria-label={`Ordenar por ${label}`}
          sx={{
            ...transactionTableStyles.sortableHeader,
            ...(isActive ? transactionTableStyles.sortableHeaderActive : {}),
          }}
        >
          {label} {isActive ? (sortDirection === "asc" ? "↑" : "↓") : ""}
        </Typography>
      </Box>
    );
  }

  function handleSelectTransaction(
    transaction: Transaction,
    event?: MouseEvent<HTMLDivElement>
  ) {
    event?.stopPropagation();
    onSelectTransaction?.(transaction);
  }

  function handleRowKeyDown(
    event: KeyboardEvent<HTMLDivElement>,
    transaction: Transaction
  ) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onSelectTransaction?.(transaction);
    }
  }

  if (transactions.length === 0) {
    return (
      <Box sx={transactionTableStyles.root}>
        <EmptyState
          title={emptyTitle}
          description={emptyDescription}
          actionLabel={emptyActionLabel}
          onAction={onEmptyAction}
        />
      </Box>
    );
  }

  return (
    <Box
      sx={transactionTableStyles.root}
      role="table"
      aria-label="Tabela de transações"
    >
      <Box sx={transactionTableStyles.header} role="row">
        {renderHeader("Descrição", "description")}
        {renderHeader("Categoria", "category")}
        {renderHeader("Natureza", "type")}
        {renderHeader("Tipo", "operation")}
        {renderHeader("Conta", "account")}
        {renderHeader("Data", "date")}
        {renderHeader("Valor", "amount")}
        {renderHeader("Status", "status")}
      </Box>

      {transactions.map((transaction) => {
        const isSelected = selectedTransactionId === transaction.id;
        const isPositive = transaction.type === "income";
        const transactionStatus = transaction.status || "pending";

        const formattedAmount = transaction.amount.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });

        const transactionTypeLabel = TRANSACTION_TYPE_LABEL[transaction.type];
        const transactionOperationLabel =
          TRANSACTION_OPERATION_LABEL[transaction.operation];

        const transactionLabel = `${transaction.description}, ${transactionTypeLabel}, ${transactionOperationLabel}, valor ${formattedAmount}, data ${transaction.date}, status ${TRANSACTION_STATUS_LABEL[transactionStatus]}`;

        return (
          <Box
            key={transaction.id}
            role="button"
            tabIndex={0}
            aria-label={`Selecionar transação: ${transactionLabel}${
              isSelected ? ". Transação selecionada" : ""
            }`}
            aria-pressed={isSelected}
            onClick={(event) => handleSelectTransaction(transaction, event)}
            onKeyDown={(event) => handleRowKeyDown(event, transaction)}
            sx={{
              ...transactionTableStyles.row,
              ...(isSelected ? transactionTableStyles.rowSelected : {}),
            }}
          >
            <Box sx={transactionTableStyles.descriptionCell}>
              <Box
                aria-hidden="true"
                sx={{
                  ...transactionTableStyles.iconWrapper,
                  ...(isPositive
                    ? transactionTableStyles.incomeIcon
                    : transactionTableStyles.expenseIcon),
                }}
              >
                {isPositive ? (
                  <NorthEastRoundedIcon sx={transactionTableStyles.icon} />
                ) : (
                  <SouthEastRoundedIcon sx={transactionTableStyles.icon} />
                )}
              </Box>

              <Box sx={transactionTableStyles.descriptionContent}>
                <Typography sx={transactionTableStyles.description}>
                  {transaction.description}
                </Typography>
              </Box>
            </Box>

            <Typography sx={transactionTableStyles.cellText}>
              {transaction.category}
            </Typography>

            <Typography sx={transactionTableStyles.cellText}>
              {transactionTypeLabel}
            </Typography>

            <Typography sx={transactionTableStyles.cellText}>
              {transactionOperationLabel}
            </Typography>

            <Typography sx={transactionTableStyles.cellText}>
              {transaction.account}
            </Typography>

            <Typography sx={transactionTableStyles.cellText}>
              {transaction.date}
            </Typography>

            <Typography sx={transactionTableStyles.amount}>
              {isPositive ? "+ " : "- "}
              {formattedAmount}
            </Typography>

            <StatusTag
              status={transactionStatus}
              label={TRANSACTION_STATUS_LABEL[transactionStatus]}
            />
          </Box>
        );
      })}
    </Box>
  );
}
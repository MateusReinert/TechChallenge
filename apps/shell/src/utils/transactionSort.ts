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

export function sortTransactions(
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

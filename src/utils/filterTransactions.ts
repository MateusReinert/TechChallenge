import { Transaction } from "@/types/transaction";
import {
  TRANSACTION_OPERATION_LABEL,
  TRANSACTION_STATUS_LABEL,
  TRANSACTION_TYPE_LABEL,
} from "@/constants/transaction";

export function filterTransactions(
  transactions: Transaction[],
  search: string
) {
  const searchValue = search.toLowerCase().trim();

  if (!searchValue) {
    return transactions;
  }

  return transactions.filter((transaction) => {
    const searchableText = [
      transaction.description,
      transaction.amount,
      transaction.date,
      TRANSACTION_TYPE_LABEL[transaction.type],
      TRANSACTION_OPERATION_LABEL[transaction.operation],
      transaction.category,
      transaction.account,
      TRANSACTION_STATUS_LABEL[transaction.status || "pending"],
      transaction.note,
    ]
      .join(" ")
      .toLowerCase();

    return searchableText.includes(searchValue);
  });
}
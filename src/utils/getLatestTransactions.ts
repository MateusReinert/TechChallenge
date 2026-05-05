import { Transaction } from "@/types/transaction";

export function getLatestTransactions(
  transactions: Transaction[],
  limit: number
) {
  return transactions.slice(0, limit);
}
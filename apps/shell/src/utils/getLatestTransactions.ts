import { Transaction } from "@/types/transaction";

function parseTransactionDate(date: string) {
  const [day, month, year] = date.split("/").map(Number);

  if (!day || !month || !year) {
    return new Date(0);
  }

  return new Date(year, month - 1, day);
}

export function getLatestTransactions(
  transactions: Transaction[],
  limit: number
) {
  return [...transactions]
    .sort(
      (firstTransaction, secondTransaction) =>
        parseTransactionDate(secondTransaction.date).getTime() -
        parseTransactionDate(firstTransaction.date).getTime()
    )
    .slice(0, limit);
}
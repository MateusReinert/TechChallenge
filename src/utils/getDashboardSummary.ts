import { Transaction } from "@/types/transaction";

export function getDashboardSummary(
  transactions: Transaction[]
) {
  const income = transactions
    .filter((item) => item.type === "income")
    .reduce((acc, item) => acc + item.amount, 0);

  const expense = transactions
    .filter((item) => item.type === "expense")
    .reduce((acc, item) => acc + item.amount, 0);

  const balance = income - expense;

  return {
    income,
    expense,
    balance,
    totalTransactions: transactions.length,
  };
}
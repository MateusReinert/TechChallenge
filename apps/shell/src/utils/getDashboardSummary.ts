import { Transaction } from "@/types/transaction";

export type SummaryHistoryItem = {
  label: string;
  value: number;
};

function parseTransactionDate(date: string) {
  const [day, month, year] = date.split("/").map(Number);

  if (!day || !month || !year) {
    return null;
  }

  return new Date(year, month - 1, day);
}

function getMonthKey(date: Date) {
  return `${date.getFullYear()}-${date.getMonth()}`;
}

function getMonthLabel(date: Date) {
  return date.toLocaleDateString("pt-BR", {
    month: "short",
  });
}

function getLastSixMonths() {
  const currentDate = new Date();

  return Array.from({ length: 6 }, (_, index) => {
    const date = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - (5 - index),
      1
    );

    return {
      key: getMonthKey(date),
      label: getMonthLabel(date),
    };
  });
}

export function getDashboardSummary(transactions: Transaction[]) {
  const income = transactions
    .filter((item) => item.type === "income")
    .reduce((acc, item) => acc + item.amount, 0);

  const expense = transactions
    .filter((item) => item.type === "expense")
    .reduce((acc, item) => acc + item.amount, 0);

  const balance = income - expense;

  const months = getLastSixMonths();

  const incomeHistory = months.map((month) => ({
    label: month.label,
    value: transactions
      .filter((transaction) => {
        const transactionDate = parseTransactionDate(transaction.date);

        return (
          transactionDate &&
          getMonthKey(transactionDate) === month.key &&
          transaction.type === "income"
        );
      })
      .reduce((acc, transaction) => acc + transaction.amount, 0),
  }));

  const expenseHistory = months.map((month) => ({
    label: month.label,
    value: transactions
      .filter((transaction) => {
        const transactionDate = parseTransactionDate(transaction.date);

        return (
          transactionDate &&
          getMonthKey(transactionDate) === month.key &&
          transaction.type === "expense"
        );
      })
      .reduce((acc, transaction) => acc + transaction.amount, 0),
  }));

  const transactionHistory = months.map((month) => ({
    label: month.label,
    value: transactions.filter((transaction) => {
      const transactionDate = parseTransactionDate(transaction.date);

      return transactionDate && getMonthKey(transactionDate) === month.key;
    }).length,
  }));

  const balanceHistory = months.map((month, index) => ({
    label: month.label,
    value:
      incomeHistory
        .slice(0, index + 1)
        .reduce((acc, item) => acc + item.value, 0) -
      expenseHistory
        .slice(0, index + 1)
        .reduce((acc, item) => acc + item.value, 0),
  }));

  return {
    income,
    expense,
    balance,
    totalTransactions: transactions.length,
    balanceHistory,
    incomeHistory,
    expenseHistory,
    transactionHistory,
  };
}

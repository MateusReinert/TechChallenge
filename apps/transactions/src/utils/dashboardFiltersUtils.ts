import { FilterBarValue, FilterBarOption } from "@/components/FilterBar";
import { Transaction } from "@/types/transaction";

export function getUniqueOptions(values: string[]): FilterBarOption[] {
  return Array.from(new Set(values.filter(Boolean)))
    .sort((firstValue, secondValue) => firstValue.localeCompare(secondValue))
    .map((value) => ({
      label: value,
      value,
    }));
}

function normalizeText(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function isSameDay(firstDate: Date, secondDate: Date) {
  return (
    firstDate.getDate() === secondDate.getDate() &&
    firstDate.getMonth() === secondDate.getMonth() &&
    firstDate.getFullYear() === secondDate.getFullYear()
  );
}

function parseTransactionDate(date: string) {
  const [day, month, year] = date.split("/").map(Number);

  return new Date(year, month - 1, day);
}

export function filterDashboardTransactions(
  transactions: Transaction[],
  filters: FilterBarValue
) {
  const search = normalizeText(filters.search.trim());

  return transactions.filter((transaction) => {
    const transactionStatus = transaction.status || "pending";
    const transactionDate = parseTransactionDate(transaction.date);
    const today = new Date();

    const matchesSearch =
      !search ||
      normalizeText(
        [
          transaction.description,
          transaction.category,
          transaction.account,
          transaction.date,
        ].join(" ")
      ).includes(search);

    const matchesCategory =
      !filters.category || transaction.category === filters.category;

    const matchesType = !filters.type || transaction.type === filters.type;

    const matchesAccount =
      !filters.account || transaction.account === filters.account;

    const matchesStatus =
      !filters.status || transactionStatus === filters.status;

    const matchesDateRange =
      !filters.dateRange ||
      (filters.dateRange === "today" && isSameDay(transactionDate, today)) ||
      (filters.dateRange === "currentMonth" &&
        transactionDate.getMonth() === today.getMonth() &&
        transactionDate.getFullYear() === today.getFullYear()) ||
      (filters.dateRange === "last30Days" &&
        transactionDate >=
          new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000));

    const matchesAmountRange =
      !filters.amountRange ||
      (filters.amountRange === "upTo100" && transaction.amount <= 100) ||
      (filters.amountRange === "between100And500" &&
        transaction.amount >= 100 &&
        transaction.amount <= 500) ||
      (filters.amountRange === "above500" && transaction.amount > 500);

    return (
      matchesSearch &&
      matchesCategory &&
      matchesType &&
      matchesAccount &&
      matchesStatus &&
      matchesDateRange &&
      matchesAmountRange
    );
  });
}
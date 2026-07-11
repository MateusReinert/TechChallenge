import { Transaction } from "@/types/transaction";

type MonthlyChartItem = {
  month: string;
  income: number;
  expense: number;
  balance: number;
};

type CategoryChartItem = {
  name: string;
  value: number;
};

function parseTransactionDate(date: string) {
  const [day, month, year] = date.split("/").map(Number);

  if (!day || !month || !year) {
    return null;
  }

  return new Date(year, month - 1, day);
}

function getMonthLabel(date: Date) {
  return date.toLocaleDateString("pt-BR", {
    month: "short",
    year: "2-digit",
  });
}

export function getDashboardChartsData(transactions: Transaction[]) {
  const monthlyMap = new Map<string, MonthlyChartItem>();
  const categoryMap = new Map<string, number>();

  transactions.forEach((transaction) => {
    const transactionDate = parseTransactionDate(transaction.date);

    if (transactionDate) {
      const monthKey = `${transactionDate.getFullYear()}-${String(
        transactionDate.getMonth() + 1
      ).padStart(2, "0")}`;

      const currentMonth = monthlyMap.get(monthKey) || {
        month: getMonthLabel(transactionDate),
        income: 0,
        expense: 0,
        balance: 0,
      };

      if (transaction.type === "income") {
        currentMonth.income += transaction.amount;
      }

      if (transaction.type === "expense") {
        currentMonth.expense += transaction.amount;
      }

      currentMonth.balance = currentMonth.income - currentMonth.expense;

      monthlyMap.set(monthKey, currentMonth);
    }

    if (transaction.type === "expense") {
      const currentCategoryValue = categoryMap.get(transaction.category) || 0;

      categoryMap.set(
        transaction.category,
        currentCategoryValue + transaction.amount
      );
    }
  });

  const monthlyData = Array.from(monthlyMap.entries())
    .sort(([firstKey], [secondKey]) => firstKey.localeCompare(secondKey))
    .map(([, value]) => value);

  const categoryData: CategoryChartItem[] = Array.from(categoryMap.entries())
    .map(([name, value]) => ({
      name,
      value,
    }))
    .sort((firstItem, secondItem) => secondItem.value - firstItem.value);

  return {
    monthlyData,
    categoryData,
  };
}
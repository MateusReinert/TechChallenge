"use client";

import { Box, Typography } from "@mui/material";

import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";

import { Transaction } from "@/types/transaction";
import { dashboardInsightsStyles } from "@/styles/dashboardInsightsStyles";

type DashboardInsightsProps = {
  transactions: Transaction[];
};

function formatCurrency(value: number) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function getBalance(transactions: Transaction[]) {
  return transactions.reduce((acc, transaction) => {
    if (transaction.type === "income") {
      return acc + transaction.amount;
    }

    return acc - transaction.amount;
  }, 0);
}

function getTopExpenseCategory(transactions: Transaction[]) {
  const categoryMap = new Map<string, number>();

  transactions
    .filter((transaction) => transaction.type === "expense")
    .forEach((transaction) => {
      const currentValue = categoryMap.get(transaction.category) || 0;

      categoryMap.set(transaction.category, currentValue + transaction.amount);
    });

  const [category] = Array.from(categoryMap.entries()).sort(
    (firstItem, secondItem) => secondItem[1] - firstItem[1]
  )[0] || ["Sem gastos", 0];

  return category;
}

function getAverageTransactionValue(transactions: Transaction[]) {
  if (!transactions.length) {
    return 0;
  }

  const total = transactions.reduce(
    (acc, transaction) => acc + transaction.amount,
    0
  );

  return total / transactions.length;
}

function getTopIncome(transactions: Transaction[]) {
  const topIncome = transactions
    .filter((transaction) => transaction.type === "income")
    .sort((firstItem, secondItem) => secondItem.amount - firstItem.amount)[0];

  return topIncome?.description || "Sem entradas";
}

export default function DashboardInsights({
  transactions,
}: DashboardInsightsProps) {
  const balance = getBalance(transactions);
  const topExpenseCategory = getTopExpenseCategory(transactions);
  const averageTransactionValue = getAverageTransactionValue(transactions);
  const topIncome = getTopIncome(transactions);

  const insights = [
    {
      label: "Situação atual",
      value: balance >= 0 ? "Saldo positivo" : "Saldo negativo",
      description: formatCurrency(balance),
      icon: <AccountBalanceWalletOutlinedIcon />,
      variant: balance >= 0 ? "positive" : "negative",
    },
    {
      label: "Maior categoria",
      value: topExpenseCategory,
      description: "Categoria com mais gastos",
      icon: <CategoryOutlinedIcon />,
      variant: "neutral",
    },
    {
      label: "Ticket médio",
      value: formatCurrency(averageTransactionValue),
      description: "Média por transação",
      icon: <ReceiptLongOutlinedIcon />,
      variant: "neutral",
    },
    {
      label: "Maior entrada",
      value: topIncome,
      description: "Principal receita cadastrada",
      icon: <TrendingUpOutlinedIcon />,
      variant: "positive",
    },
  ] as const;

  return (
    <Box sx={dashboardInsightsStyles.root}>
      <Box sx={dashboardInsightsStyles.header}>
        <Typography sx={dashboardInsightsStyles.eyebrow}>
          Inteligência financeira
        </Typography>

        <Typography sx={dashboardInsightsStyles.title}>
          Insights rápidos
        </Typography>
      </Box>

      <Box sx={dashboardInsightsStyles.list}>
        {insights.map((insight) => (
          <Box key={insight.label} sx={dashboardInsightsStyles.item}>
            <Box
              sx={[
                dashboardInsightsStyles.icon,
                dashboardInsightsStyles.iconVariants[insight.variant],
              ]}
            >
              {insight.icon}
            </Box>

            <Box sx={dashboardInsightsStyles.content}>
              <Typography sx={dashboardInsightsStyles.label}>
                {insight.label}
              </Typography>

              <Typography sx={dashboardInsightsStyles.value}>
                {insight.value}
              </Typography>

              <Typography sx={dashboardInsightsStyles.description}>
                {insight.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

"use client";

import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import TrendingDownOutlinedIcon from "@mui/icons-material/TrendingDownOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import NorthEastRoundedIcon from "@mui/icons-material/NorthEastRounded";
import SouthEastRoundedIcon from "@mui/icons-material/SouthEastRounded";

import { SummaryCard } from "@finance/ui";
import SummarySparkline from "@/components/SummarySparkline";
import { dashboardClientStyles } from "@/styles/dashboardClientStyles";
import { SummaryHistoryItem } from "@/utils/getDashboardSummary";
import { Box } from "@mui/material";

type DashboardSummary = {
  income: number;
  expense: number;
  balance: number;
  totalTransactions: number;
  balanceHistory: SummaryHistoryItem[];
  incomeHistory: SummaryHistoryItem[];
  expenseHistory: SummaryHistoryItem[];
  transactionHistory: SummaryHistoryItem[];
};

type DashboardSummaryCardsProps = {
  summary: DashboardSummary;
  showValues: boolean;
};

const HIDDEN_VALUE = "R$ ••••••";
const HIDDEN_TOTAL = "••••";

function formatCurrency(value: number) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function getPercentageTrend(data: SummaryHistoryItem[]) {
  const currentValue = data.at(-1)?.value ?? 0;
  const previousValue = data.at(-2)?.value ?? 0;

  if (!previousValue && currentValue > 0) {
    return "+100% este mês";
  }

  if (!previousValue) {
    return "Sem variação este mês";
  }

  const percentage = ((currentValue - previousValue) / previousValue) * 100;

  if (percentage === 0) {
    return "Sem variação este mês";
  }
  const sign = percentage >= 0 ? "+" : "";

  return `${sign}${percentage.toFixed(0)}% este mês`;
}

export default function DashboardSummaryCards({
  summary,
  showValues,
}: DashboardSummaryCardsProps) {
  const balanceValue = showValues
    ? formatCurrency(summary.balance)
    : HIDDEN_VALUE;

  const incomeValue = showValues
    ? formatCurrency(summary.income)
    : HIDDEN_VALUE;

  const expenseValue = showValues
    ? formatCurrency(summary.expense)
    : HIDDEN_VALUE;

  const totalTransactionsValue = showValues
    ? String(summary.totalTransactions)
    : HIDDEN_TOTAL;

  return (
    <Box sx={dashboardClientStyles.cardsGrid}>
      <SummaryCard
        label="Saldo atual"
        value={balanceValue}
        icon={<AccountBalanceWalletOutlinedIcon />}
        iconVariant="neutral"
        trend={getPercentageTrend(summary.balanceHistory)}
        trendIcon={<NorthEastRoundedIcon />}
        sparkline={
          <SummarySparkline data={summary.balanceHistory} variant="neutral" />
        }
      />

      <SummaryCard
        label="Total de entradas"
        value={incomeValue}
        icon={<TrendingUpOutlinedIcon />}
        iconVariant="positive"
        trend={getPercentageTrend(summary.incomeHistory)}
        trendIcon={<NorthEastRoundedIcon />}
        sparkline={
          <SummarySparkline data={summary.incomeHistory} variant="positive" />
        }
      />

      <SummaryCard
        label="Total de saídas"
        value={expenseValue}
        icon={<TrendingDownOutlinedIcon />}
        iconVariant="negative"
        trend={getPercentageTrend(summary.expenseHistory)}
        trendIcon={<SouthEastRoundedIcon />}
        sparkline={
          <SummarySparkline data={summary.expenseHistory} variant="negative" />
        }
      />

      <SummaryCard
        label="Transações cadastradas"
        value={totalTransactionsValue}
        icon={<TuneOutlinedIcon />}
        iconVariant="neutral"
        trend={getPercentageTrend(summary.transactionHistory)}
        trendIcon={<NorthEastRoundedIcon />}
        sparkline={
          <SummarySparkline
            data={summary.transactionHistory}
            variant="neutral"
          />
        }
      />
    </Box>
  );
}

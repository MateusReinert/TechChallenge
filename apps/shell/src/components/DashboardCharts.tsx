"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import { Box, Typography } from "@mui/material";

import { colors } from "@finance/ui";
import { dashboardChartsStyles } from "@/styles/dashboardChartsStyles";

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

type DashboardChartsProps = {
  monthlyData: MonthlyChartItem[];
  categoryData: CategoryChartItem[];
};

const PIE_COLORS = [
  colors.primary[500],
  colors.success[500],
  colors.error[500],
  colors.neutral[500],
  colors.gray[500],
  colors.primary[600],
];

function formatCurrency(value: number) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  });
}

function formatTooltipValue(value: unknown) {
  if (typeof value === "number") {
    return formatCurrency(value);
  }

  return String(value);
}

function getTotalCategoryValue(categoryData: CategoryChartItem[]) {
  return categoryData.reduce((acc, item) => acc + item.value, 0);
}

export default function DashboardCharts({
  monthlyData,
  categoryData,
}: DashboardChartsProps) {
  const totalCategoryValue = getTotalCategoryValue(categoryData);

  return (
    <Box sx={dashboardChartsStyles.root}>
      <Box sx={dashboardChartsStyles.balanceCard}>
        <Box sx={dashboardChartsStyles.cardHeader}>
          <Box>
            <Typography sx={dashboardChartsStyles.eyebrow}>
              Últimos meses
            </Typography>

            <Typography sx={dashboardChartsStyles.title}>
              Evolução do saldo
            </Typography>
          </Box>

          <Box sx={dashboardChartsStyles.periodGroup}>
            <Box sx={dashboardChartsStyles.periodActive}>Mensal</Box>
          </Box>
        </Box>

        <Box sx={dashboardChartsStyles.chartWrapper}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={monthlyData}
              margin={{
                top: 16,
                right: 12,
                left: 0,
                bottom: 0,
              }}
            >
              <defs>
                <linearGradient id="balance" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor={colors.primary[500]}
                    stopOpacity={0.32}
                  />
                  <stop
                    offset="95%"
                    stopColor={colors.primary[500]}
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>

              <CartesianGrid
                stroke={colors.gray[200]}
                strokeDasharray="4 8"
                vertical={false}
              />

              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={dashboardChartsStyles.axisTick}
              />

              <YAxis
                axisLine={false}
                tickLine={false}
                tick={dashboardChartsStyles.axisTick}
                tickFormatter={(value) => `R$ ${value}`}
                width={72}
              />

              <Tooltip
                formatter={formatTooltipValue}
                contentStyle={dashboardChartsStyles.tooltip}
                labelStyle={dashboardChartsStyles.tooltipLabel}
                cursor={{
                  stroke: colors.primary[500],
                  strokeDasharray: "4 4",
                }}
              />

              <Area
                type="monotone"
                dataKey="balance"
                name="Saldo"
                stroke={colors.primary[500]}
                strokeWidth={3}
                fill="url(#balance)"
                dot={{
                  r: 4,
                  strokeWidth: 2,
                  stroke: colors.background.default,
                  fill: colors.primary[500],
                }}
                activeDot={{
                  r: 6,
                  strokeWidth: 3,
                  stroke: colors.background.default,
                  fill: colors.primary[500],
                }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </Box>
      </Box>

      <Box sx={dashboardChartsStyles.categoryCard}>
        <Box sx={dashboardChartsStyles.cardHeader}>
          <Box>
            <Typography sx={dashboardChartsStyles.eyebrow}>
              Distribuição
            </Typography>

            <Typography sx={dashboardChartsStyles.title}>
              Gastos por categoria
            </Typography>
          </Box>

          <Box sx={dashboardChartsStyles.selectBadge}>Este mês</Box>
        </Box>

        <Box sx={dashboardChartsStyles.pieContent}>
          <Box sx={dashboardChartsStyles.pieWrapper}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  dataKey="value"
                  nameKey="name"
                  innerRadius="54%"
                  outerRadius="82%"
                  paddingAngle={4}
                  cornerRadius={8}
                >
                  {categoryData.map((_, index) => (
                    <Cell
                      key={index}
                      fill={PIE_COLORS[index % PIE_COLORS.length]}
                    />
                  ))}
                </Pie>

                <Tooltip
                  formatter={formatTooltipValue}
                  contentStyle={dashboardChartsStyles.tooltip}
                  labelStyle={dashboardChartsStyles.tooltipLabel}
                />
              </PieChart>
            </ResponsiveContainer>

            <Box sx={dashboardChartsStyles.pieCenter}>
              <Typography sx={dashboardChartsStyles.pieCenterLabel}>
                Total
              </Typography>

              <Typography sx={dashboardChartsStyles.pieCenterValue}>
                {formatCurrency(totalCategoryValue)}
              </Typography>
            </Box>
          </Box>

          <Box sx={dashboardChartsStyles.legend}>
            {categoryData.map((item, index) => {
              const percentage = totalCategoryValue
                ? Math.round((item.value / totalCategoryValue) * 100)
                : 0;

              return (
                <Box key={item.name} sx={dashboardChartsStyles.legendItem}>
                  <Box sx={dashboardChartsStyles.legendInfo}>
                    <Box
                      sx={{
                        ...dashboardChartsStyles.legendDot,
                        bgcolor: PIE_COLORS[index % PIE_COLORS.length],
                      }}
                    />

                    <Typography sx={dashboardChartsStyles.legendName}>
                      {item.name}
                    </Typography>
                  </Box>

                  <Typography sx={dashboardChartsStyles.legendAmount}>
                    {formatCurrency(item.value)}
                  </Typography>

                  <Box sx={dashboardChartsStyles.legendValue}>
                    {percentage}%
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

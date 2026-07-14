"use client";

import { ResponsiveContainer, AreaChart, Area } from "recharts";

import { colors } from "@finance/ui";
import { SummaryHistoryItem } from "@/utils/getDashboardSummary";

type SummarySparklineProps = {
  data: SummaryHistoryItem[];
  variant: "positive" | "negative" | "neutral";
};

export default function SummarySparkline({
  data,
  variant,
}: SummarySparklineProps) {
  const strokeColor = {
    positive: colors.success[500],
    negative: colors.error[500],
    neutral: colors.primary[500],
  }[variant];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={data}
        margin={{
          top: 6,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient
            id={`sparkline-${variant}`}
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop offset="0%" stopColor={strokeColor} stopOpacity={0.28} />

            <stop offset="100%" stopColor={strokeColor} stopOpacity={0} />
          </linearGradient>
        </defs>

        <Area
          type="monotone"
          dataKey="value"
          stroke={strokeColor}
          strokeWidth={2.5}
          fill={`url(#sparkline-${variant})`}
          dot={false}
          activeDot={{
            r: 4,
            fill: strokeColor,
            stroke: "#FFF",
            strokeWidth: 2,
          }}
          isAnimationActive
          animationDuration={900}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

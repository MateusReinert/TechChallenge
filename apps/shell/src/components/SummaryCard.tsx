"use client";

import type { ReactNode } from "react";
import { Box, Typography } from "@mui/material";
import { summaryCardStyles } from "@/styles/summaryCardStyles";

interface SummaryCardProps {
  label: string;
  value: string;
  icon: ReactNode;
  trend?: string;
  trendIcon?: ReactNode;
  action?: ReactNode;
  iconVariant?: "positive" | "negative" | "neutral";
  sparkline?: ReactNode;
}

export default function SummaryCard({
  label,
  value,
  icon,
  trend,
  trendIcon,
  action,
  iconVariant = "neutral",
  sparkline,
}: SummaryCardProps) {
  return (
    <Box sx={summaryCardStyles.root}>
      <Box sx={summaryCardStyles.header}>
        <Box
          sx={[
            summaryCardStyles.icon,
            summaryCardStyles.iconVariants[iconVariant],
          ]}
        >
          {icon}
        </Box>

        {action && <Box sx={summaryCardStyles.action}>{action}</Box>}
      </Box>

      <Box sx={summaryCardStyles.content}>
        <Typography sx={summaryCardStyles.label}>{label}</Typography>

        <Typography sx={summaryCardStyles.value}>{value}</Typography>

        {trend && (
          <Box
            sx={[
              summaryCardStyles.trend,
              summaryCardStyles.trendVariants[iconVariant],
            ]}
          >
            {trendIcon}
            <span>{trend}</span>
          </Box>
        )}
      </Box>

      {sparkline && <Box sx={summaryCardStyles.sparkline}>{sparkline}</Box>}
    </Box>
  );
}
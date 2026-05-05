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
}

export default function SummaryCard({
  label,
  value,
  icon,
  trend,
  trendIcon,
  action,
  iconVariant = "neutral",
}: SummaryCardProps) {
  return (
    <Box sx={summaryCardStyles.root}>
      <Box sx={summaryCardStyles.header}>
        <Box sx={summaryCardStyles.headerContent}>
          <Box
            sx={{
              ...summaryCardStyles.icon,
              ...summaryCardStyles.iconVariants[iconVariant],
            }}
          >
            {icon}
          </Box>

          <Box sx={summaryCardStyles.labelWrapper}>
            <Typography sx={summaryCardStyles.label}>
              {label}
            </Typography>

            {action && (
              <Box sx={summaryCardStyles.action}>
                {action}
              </Box>
            )}
          </Box>
        </Box>
      </Box>

      <Typography sx={summaryCardStyles.value}>
        {value}
      </Typography>

      {trend && (
        <Box sx={summaryCardStyles.trend}>
          {trendIcon}
          <span>{trend}</span>
        </Box>
      )}
    </Box>
  );
}
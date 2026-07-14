"use client";

import type { ReactNode } from "react";
import { Box, Typography } from "@mui/material";
import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined";

import { Button } from "@finance/ui";

import {
  emptyStateRootStyle,
  emptyStateContainerStyle,
  emptyStateIconWrapperStyle,
  emptyStateIconStyle,
  emptyStateTitleStyle,
  emptyStateDescriptionStyle,
  emptyStateActionStyle,
} from "../styles/emptyStateStyles";

type EmptyStateProps = {
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
  icon?: ReactNode;
};

export default function EmptyState({
  title,
  description,
  actionLabel,
  onAction,
  icon,
}: EmptyStateProps) {
  return (
    <Box sx={emptyStateRootStyle}>
      <Box sx={emptyStateContainerStyle}>
        <Box sx={emptyStateIconWrapperStyle}>
          {icon || <InsertChartOutlinedIcon sx={emptyStateIconStyle} />}
        </Box>

        <Typography sx={emptyStateTitleStyle}>{title}</Typography>

        <Typography sx={emptyStateDescriptionStyle}>{description}</Typography>

        {actionLabel && onAction && (
          <Box sx={emptyStateActionStyle}>
            <Button variantType="primary" onClick={onAction}>
              {actionLabel}
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
}

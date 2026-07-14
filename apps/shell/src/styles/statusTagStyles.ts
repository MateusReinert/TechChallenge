import { SxProps, Theme } from "@mui/material";
import { colors, radius, typography, spacing } from "@/styles/tokens";

export const statusTagStyles = {
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    px: spacing.sm,
    py: "2px",
    borderRadius: radius.full,
    ...typography.label,
    fontSize: "12px",
    fontWeight: 500,
    whiteSpace: "nowrap",
  },

  success: {
    bgcolor: colors.success[100],
    color: colors.success[700],
  },

  error: {
    bgcolor: colors.error[100],
    color: colors.error[700],
  },

  pending: {
    bgcolor: colors.primary[100],
    color: colors.primary[600],
  },
} satisfies Record<string, SxProps<Theme>>;

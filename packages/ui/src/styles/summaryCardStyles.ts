import type { SxProps, Theme } from "@mui/material";

import { colors, radius, shadow, sizes, spacing, typography } from "./tokens";

export type SummaryCardVariant = "positive" | "negative" | "neutral";

type SummaryCardStyles = Record<string, SxProps<Theme>> & {
  iconVariants: Record<SummaryCardVariant, SxProps<Theme>>;
  trendVariants: Record<SummaryCardVariant, SxProps<Theme>>;
};

export const summaryCardStyles = {
  root: {
    width: "100%",
    minHeight: {
      xs: 150,
      xl: 170,
    },
    bgcolor: colors.background.default,
    border: `1px solid ${colors.gray[200]}`,
    borderRadius: radius.lg,
    p: {
      xs: spacing.lg,
      xl: spacing.xl,
    },
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: spacing.md,
    boxShadow: shadow.sm,
    overflow: "hidden",
  },

  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: spacing.md,
  },

  icon: {
    width: {
      xs: 38,
      xl: sizes.summaryIcon,
    },
    height: {
      xs: 38,
      xl: sizes.summaryIcon,
    },
    borderRadius: radius.md,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,

    "& svg": {
      fontSize: {
        xs: 18,
        xl: sizes.icon,
      },
    },
  },

  iconVariants: {
    positive: {
      bgcolor: colors.success[100],
      color: colors.success[500],
    },

    negative: {
      bgcolor: colors.error[100],
      color: colors.error[500],
    },

    neutral: {
      bgcolor: colors.neutral[100],
      color: colors.neutral[500],
    },
  },

  action: {
    display: "flex",
    alignItems: "center",
    ml: "auto",
  },

  content: {
    display: "flex",
    flexDirection: "column",
    gap: spacing.xs,
  },

  label: {
    ...typography.body,
    fontWeight: 700,
    color: colors.gray[600],
  },

  value: {
    ...typography.title,
    fontSize: {
      xs: "1.5rem",
      xl: typography.title.fontSize,
    },
    lineHeight: 1.1,
    color: colors.gray[900],
  },

  trend: {
    width: "fit-content",
    display: "flex",
    alignItems: "center",
    gap: spacing.xs,
    px: spacing.sm,
    py: spacing.xs,
    borderRadius: radius.full,
    ...typography.label,
    fontWeight: 700,

    "& svg": {
      fontSize: 16,
    },

    "& span": {
      fontWeight: 700,
    },
  },

  trendVariants: {
    positive: {
      bgcolor: colors.success[100],
      color: colors.success[500],
    },

    negative: {
      bgcolor: colors.error[100],
      color: colors.error[500],
    },

    neutral: {
      bgcolor: colors.neutral[100],
      color: colors.neutral[500],
    },
  },

  sparkline: {
    height: 34,
    mx: {
      xs: `-${spacing.lg}`,
      xl: `-${spacing.xl}`,
    },
    mb: {
      xs: `-${spacing.lg}`,
      xl: `-${spacing.xl}`,
    },
    overflow: "hidden",
  },
} satisfies SummaryCardStyles;

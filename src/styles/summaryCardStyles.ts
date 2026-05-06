import { SxProps, Theme } from "@mui/material";
import { colors, radius, shadow, spacing, typography, sizes } from "@/styles/tokens";

type SummaryCardVariant = "positive" | "negative" | "neutral";

type SummaryCardStyles = Record<string, SxProps<Theme>> & {
  iconVariants: Record<SummaryCardVariant, SxProps<Theme>>;
  trendVariants: Record<SummaryCardVariant, SxProps<Theme>>;
};

export const summaryCardStyles = {
  root: {
    width: "100%",
    minHeight: "152px",
    bgcolor: colors.background.default,
    border: `1px solid ${colors.gray[200]}`,
    borderRadius: radius.lg,
    p: spacing.xl,
    display: "flex",
    flexDirection: "column",
    gap: spacing.lg,
    boxShadow: shadow.sm,
  },

  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  headerContent: {
    display: "flex",
    alignItems: "center",
    gap: spacing.md,
    width: "100%",
  },

  icon: {
    width: sizes.summaryIcon,
    height: sizes.summaryIcon,
    borderRadius: radius.sm,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,

    "& svg": {
      fontSize: sizes.icon,
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

  labelWrapper: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: spacing.sm,
  },

  label: {
    ...typography.body,
    fontWeight: 700,
    color: colors.gray[600],
  },

  action: {
    display: "flex",
    alignItems: "center",
  },

  value: {
    ...typography.title,
    lineHeight: 1.1,
    color: colors.gray[900],
  },

  trend: {
    display: "flex",
    alignItems: "center",
    gap: spacing.xs,
    ...typography.label,
    fontWeight: 600,

    "& svg": {
      fontSize: 18,
    },

    "& span": {
      fontWeight: 500,
    },
  },

  trendVariants: {
    positive: {
      color: colors.success[500],
    },

    negative: {
      color: colors.error[500],
    },

    neutral: {
      color: colors.gray[500],
    },
  },
} satisfies SummaryCardStyles;
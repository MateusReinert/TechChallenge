import { SxProps, Theme } from "@mui/material";

import { colors, radius, shadow, spacing, typography } from "@/styles/tokens";

type InsightVariant = "positive" | "negative" | "neutral";

type DashboardInsightsStyles = Record<string, SxProps<Theme>> & {
  iconVariants: Record<InsightVariant, SxProps<Theme>>;
};

export const dashboardInsightsStyles = {
  root: {
    display: "flex",
    flexDirection: "column",
    gap: spacing.lg,
    p: spacing.xl,
    bgcolor: colors.background.default,
    border: `1px solid ${colors.gray[200]}`,
    borderRadius: radius.lg,
    boxShadow: shadow.sm,
    height: "100%",
    minWidth: 0,
  },

  header: {
    display: "flex",
    flexDirection: "column",
    gap: spacing.xs,
  },

  eyebrow: {
    ...typography.label,
    color: colors.gray[500],
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.06em",
  },

  title: {
    ...typography.subtitle,
    color: colors.gray[900],
    fontWeight: 700,
  },

  list: {
    display: "flex",
    flexDirection: "column",
    gap: spacing.sm,
    flex: 1,
  },

  item: {
    display: "flex",
    alignItems: "center",
    gap: spacing.md,
    py: spacing.md,
    px: 0,
    borderBottom: `1px solid ${colors.gray[100]}`,
    minWidth: 0,

    "&:last-child": {
      borderBottom: "none",
      pb: 0,
    },
  },

  icon: {
    width: 34,
    height: 34,
    borderRadius: radius.md,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,

    "& svg": {
      fontSize: 18,
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

  content: {
    minWidth: 0,
    display: "flex",
    flexDirection: "column",
    gap: spacing.xs,
  },

  label: {
    ...typography.label,
    color: colors.gray[500],
    fontWeight: 700,
  },

  value: {
    ...typography.body,
    color: colors.gray[900],
    fontWeight: 700,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },

  description: {
    ...typography.label,
    color: colors.gray[400],
  },
} satisfies DashboardInsightsStyles;

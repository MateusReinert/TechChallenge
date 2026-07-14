import { SxProps, Theme } from "@mui/material";

import { colors, spacing, radius, shadow, typography } from "@/styles/tokens";

export const dashboardChartsStyles = {
  root: {
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      lg: "minmax(0, 2fr) minmax(300px, 1fr)",
    },
    gap: spacing.xl,
    alignItems: "stretch",
  } as SxProps<Theme>,

  balanceCard: {
    display: "flex",
    flexDirection: "column",
    gap: spacing.xl,
    p: spacing.xl,
    bgcolor: colors.background.default,
    border: `1px solid ${colors.gray[200]}`,
    borderRadius: radius.lg,
    boxShadow: shadow.sm,
    minHeight: {
      xs: 320,
      xl: 380,
    },
    overflow: "hidden",
  } as SxProps<Theme>,

  categoryCard: {
    display: "flex",
    flexDirection: "column",
    gap: spacing.xl,
    p: spacing.xl,
    bgcolor: colors.background.default,
    border: `1px solid ${colors.gray[200]}`,
    borderRadius: radius.lg,
    boxShadow: shadow.sm,
    minHeight: {
      xs: 320,
      xl: 380,
    },
    overflow: "hidden",
  } as SxProps<Theme>,

  cardHeader: {
    display: "flex",
    alignItems: {
      xs: "flex-start",
      sm: "center",
    },
    justifyContent: "space-between",
    gap: spacing.md,
    flexDirection: {
      xs: "column",
      sm: "row",
    },
  } as SxProps<Theme>,

  eyebrow: {
    ...typography.label,
    color: colors.gray[500],
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.06em",
    mb: spacing.xs,
  } as SxProps<Theme>,

  title: {
    ...typography.subtitle,
    color: colors.gray[900],
  } as SxProps<Theme>,

  periodGroup: {
    display: "flex",
    alignItems: "center",
    gap: spacing.xs,
    p: spacing.xs,
    borderRadius: radius.full,
    bgcolor: colors.gray[100],
    flexShrink: 0,
  } as SxProps<Theme>,

  period: {
    ...typography.label,
    px: spacing.md,
    py: spacing.xs,
    borderRadius: radius.full,
    color: colors.gray[500],
    fontWeight: 700,
    whiteSpace: "nowrap",
  } as SxProps<Theme>,

  periodActive: {
    ...typography.label,
    px: spacing.md,
    py: spacing.xs,
    borderRadius: radius.full,
    bgcolor: colors.background.default,
    color: colors.primary[600],
    fontWeight: 800,
    whiteSpace: "nowrap",
    boxShadow: shadow.sm,
  } as SxProps<Theme>,

  selectBadge: {
    ...typography.label,
    px: spacing.md,
    py: spacing.xs,
    borderRadius: radius.full,
    bgcolor: colors.primary[100],
    color: colors.primary[600],
    fontWeight: 800,
    whiteSpace: "nowrap",
  } as SxProps<Theme>,

  chartWrapper: {
    width: "100%",
    height: {
      xs: 230,
      md: 250,
      xl: 292,
    },
  } as SxProps<Theme>,

  pieContent: {
    display: "flex",
    flexDirection: "column",
    gap: spacing.lg,
    flex: 1,
  } as SxProps<Theme>,

  pieWrapper: {
    width: "100%",
    height: {
      xs: 190,
      xl: 224,
    },
    position: "relative",
  } as SxProps<Theme>,

  pieCenter: {
    position: "absolute",
    inset: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    pointerEvents: "none",
  } as SxProps<Theme>,

  pieCenterLabel: {
    ...typography.label,
    color: colors.gray[500],
    fontWeight: 700,
  } as SxProps<Theme>,

  pieCenterValue: {
    ...typography.body,
    color: colors.gray[900],
    fontWeight: 800,
  } as SxProps<Theme>,

  legend: {
    display: "flex",
    flexDirection: "column",
    gap: spacing.sm,
  } as SxProps<Theme>,

  legendItem: {
    display: "grid",
    gridTemplateColumns: "minmax(0, 1fr) auto auto",
    alignItems: "center",
    gap: spacing.sm,
  } as SxProps<Theme>,

  legendInfo: {
    display: "flex",
    alignItems: "center",
    gap: spacing.sm,
    minWidth: 0,
  } as SxProps<Theme>,

  legendDot: {
    width: 10,
    height: 10,
    borderRadius: radius.full,
    flexShrink: 0,
  } as SxProps<Theme>,

  legendName: {
    ...typography.body,
    color: colors.gray[600],
    fontWeight: 600,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  } as SxProps<Theme>,

  legendAmount: {
    ...typography.label,
    color: colors.gray[500],
    fontWeight: 700,
    whiteSpace: "nowrap",
  } as SxProps<Theme>,

  legendValue: {
    ...typography.label,
    px: spacing.sm,
    py: spacing.xs,
    borderRadius: radius.full,
    bgcolor: colors.gray[100],
    color: colors.gray[600],
    fontWeight: 800,
    flexShrink: 0,
  } as SxProps<Theme>,

  axisTick: {
    fill: colors.gray[500],
    fontSize: 12,
    fontWeight: 600,
  },

  tooltip: {
    border: `1px solid ${colors.gray[200]}`,
    borderRadius: radius.md,
    boxShadow: shadow.md,
    backgroundColor: colors.background.default,
    color: colors.gray[900],
  },

  tooltipLabel: {
    color: colors.gray[500],
    fontWeight: 700,
  },
};

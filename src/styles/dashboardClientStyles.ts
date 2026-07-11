import { SxProps, Theme } from "@mui/material";

import {
  colors,
  spacing,
  typography,
  sizes,
  radius,
  shadow,
} from "@/styles/tokens";

export const dashboardClientStyles = {
  layout: {
    minHeight: "100vh",
    display: "grid",
    overflow: "hidden",
  } as SxProps<Theme>,

  content: {
    p: {
      xs: spacing.lg,
      md: spacing.xl,
      lg: spacing.xxl,
    },
    display: "flex",
    flexDirection: "column",
    gap: spacing.xl,
    overflow: "auto",
  } as SxProps<Theme>,

  pageTop: {
    display: "flex",
    flexDirection: "column",
    gap: spacing.lg,
  } as SxProps<Theme>,

  topControls: {
    display: "flex",
    alignItems: {
      xs: "stretch",
      xl: "center",
    },
    justifyContent: "space-between",
    flexDirection: {
      xs: "column",
      xl: "row",
    },
    gap: spacing.lg,
    width: "100%",
  } as SxProps<Theme>,

  headerActions: {
    display: "flex",
    alignItems: "center",
    justifyContent: {
      xs: "stretch",
      sm: "flex-end",
    },
    flexWrap: "wrap",
    gap: spacing.md,
    flexShrink: 0,

    "& > *": {
      flex: {
        xs: 1,
        sm: "unset",
      },
    },
  } as SxProps<Theme>,

  buttonContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.sm,

    "& svg": {
      fontSize: 18,
    },
  } as SxProps<Theme>,

  cardsGrid: {
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      sm: "1fr 1fr",
      xl: "repeat(4, 1fr)",
    },
    gap: spacing.lg,
  } as SxProps<Theme>,

  dashboardGrid: {
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      xl: "1fr 2fr",
    },
    gap: spacing.xl,
    alignItems: "stretch",
  } as SxProps<Theme>,

  transactionsCard: {
    display: "flex",
    flexDirection: "column",
    gap: spacing.lg,
    p: spacing.xl,
    bgcolor: colors.background.default,
    border: `1px solid ${colors.gray[200]}`,
    borderRadius: radius.lg,
    boxShadow: shadow.sm,
    minWidth: 0,
    height: "100%",
  } as SxProps<Theme>,

  sectionHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: {
      xs: "flex-start",
      md: "center",
    },
    flexDirection: {
      xs: "column",
      md: "row",
    },
    gap: spacing.lg,
  } as SxProps<Theme>,

  sectionTitle: {
    ...typography.subtitle,
    color: colors.gray[900],
  } as SxProps<Theme>,

  actions: {
    display: "flex",
    alignItems: "center",
    gap: spacing.md,
  } as SxProps<Theme>,

  tableWrapper: {
    overflowX: "auto",
    minWidth: 0,
    flex: 1,
  } as SxProps<Theme>,

  iconButton: {
    width: sizes.icon,
    height: sizes.icon,
    p: 0,
    color: "inherit",
  } as SxProps<Theme>,
};
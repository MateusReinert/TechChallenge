import { SxProps, Theme } from "@mui/material";
import { colors, spacing, typography, sizes } from "@/styles/tokens";

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

  cardsGrid: {
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      sm: "1fr 1fr",
      xl: "repeat(4, 1fr)",
    },
    gap: spacing.lg,
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
    gap: spacing.md,
    width: {
      xs: "100%",
      md: "auto",
    },
    flexDirection: {
      xs: "column",
      sm: "row",
    },
  } as SxProps<Theme>,

  tableWrapper: {
    overflowX: "auto",
  } as SxProps<Theme>,

  iconButton: {
    width: sizes.icon,
    height: sizes.icon,
    p: 0,
    color: "inherit",
  } as SxProps<Theme>,
};
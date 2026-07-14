import { SxProps, Theme } from "@mui/material";
import { colors, spacing, radius, typography, sizes } from "@/styles/tokens";

export const transactionsClientStyles = {
  layout: {
    height: "100%",
    minHeight: 0,
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
    minHeight: 0,
    overflow: "auto",
  } as SxProps<Theme>,

  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: {
      xs: "stretch",
      md: "center",
    },
    flexDirection: {
      xs: "column",
      md: "row",
    },
    gap: spacing.lg,
  } as SxProps<Theme>,

  searchWrapper: {
    width: {
      xs: "100%",
      md: "320px",
    },
  } as SxProps<Theme>,

  tableWrapper: {
    minHeight: 0,
    overflowX: "auto",
  } as SxProps<Theme>,

  pagination: {
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
    gap: spacing.md,
    mt: "-8px",
  } as SxProps<Theme>,

  paginationText: {
    ...typography.label,
    color: colors.gray[500],
  } as SxProps<Theme>,

  paginationActions: {
    display: "flex",
    alignItems: "center",
    gap: spacing.md,
    flexWrap: "wrap",
  } as SxProps<Theme>,

  paginationButtons: {
    display: "flex",
    gap: spacing.sm,
  } as SxProps<Theme>,

  paginationButton: {
    width: sizes.icon,
    height: sizes.icon,
    border: `1px solid ${colors.gray[300]}`,
    borderRadius: radius.sm,
  } as SxProps<Theme>,
  buttonContent: {
    display: "flex",
    alignItems: "center",
    gap: spacing.sm,
    whiteSpace: "nowrap",
  } as SxProps<Theme>,
  newTransactionButton: {
    flexShrink: 0,
    whiteSpace: "nowrap",
  } as SxProps<Theme>,
};

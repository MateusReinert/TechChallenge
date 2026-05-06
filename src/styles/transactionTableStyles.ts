import { SxProps, Theme } from "@mui/material";
import { colors, spacing, radius, typography, sizes } from "@/styles/tokens";

export const transactionTableStyles = {
  root: {
    width: "100%",
    minWidth: {
      xs: "1120px",
      lg: "100%",
    },
    bgcolor: colors.background.default,
    border: `1px solid ${colors.gray[200]}`,
    borderRadius: radius.sm,
    overflow: "hidden",
  },

  header: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr 1fr 1fr 120px",
    px: {
      xs: spacing.sm,
      md: spacing.md,
    },
    py: spacing.sm,
    borderBottom: `1px solid ${colors.gray[200]}`,
  },

  sortableHeader: {
    ...typography.label,
    color: colors.gray[600],
    whiteSpace: "nowrap",
    cursor: "pointer",
    userSelect: "none",
    border: 0,
    p: 0,
    background: "transparent",
    textAlign: "left",
    fontFamily: "inherit",
    "&:focus-visible": {
      outline: `2px solid ${colors.primary[500]}`,
      outlineOffset: "2px",
      borderRadius: radius.sm,
    },
  },

  sortableHeaderActive: {
    fontWeight: 700,
    color: colors.gray[900],
  },

  row: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr 1fr 1fr 120px",
    alignItems: "center",
    px: {
      xs: spacing.sm,
      md: spacing.md,
    },
    py: spacing.sm,
    borderBottom: `1px solid ${colors.gray[200]}`,
    cursor: "pointer",
    bgcolor: "transparent",
    transition: "background-color 0.2s ease",
    "&:last-child": {
      borderBottom: "none",
    },
    "&:hover": {
      bgcolor: colors.gray[50],
    },
    "&:focus-visible": {
      outline: `2px solid ${colors.primary[500]}`,
      outlineOffset: "-2px",
      bgcolor: colors.gray[50],
    },
  },

  rowSelected: {
    bgcolor: colors.gray[50],
  },

  descriptionCell: {
    display: "flex",
    alignItems: "center",
    gap: spacing.md,
    minWidth: 0,
  },

  iconWrapper: {
    width: sizes.summaryIcon,
    height: sizes.summaryIcon,
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },

  icon: {
    fontSize: 18,
  },

  incomeIcon: {
    bgcolor: colors.success[100],
    color: colors.success[500],
  },

  expenseIcon: {
    bgcolor: colors.error[100],
    color: colors.error[500],
  },

  descriptionContent: {
    display: "flex",
    flexDirection: "column",
    gap: spacing.xs,
    minWidth: 0,
  },

  description: {
    ...typography.body,
    fontWeight: 500,
    color: colors.gray[900],
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },

  cellText: {
    ...typography.body,
    color: colors.gray[600],
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    pr: spacing.sm,
  },

  amount: {
    ...typography.body,
    fontWeight: 500,
    color: colors.gray[900],
    whiteSpace: "nowrap",
  },
} satisfies Record<string, SxProps<Theme>>;
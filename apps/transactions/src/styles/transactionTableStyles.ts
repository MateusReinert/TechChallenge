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
    overflow: "hidden",
  },

  header: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr 1fr 1fr 120px",
    px: spacing.md,
    py: spacing.sm,
    bgcolor: colors.gray[50],
    border: `1px solid ${colors.gray[100]}`,
    borderRadius: radius.md,
    mb: spacing.sm,
  },

  sortableHeader: {
    ...typography.label,
    color: colors.gray[500],
    whiteSpace: "nowrap",
    cursor: "pointer",
    userSelect: "none",
    border: 0,
    p: 0,
    background: "transparent",
    textAlign: "left",
    fontFamily: "inherit",
    fontWeight: 800,
    "&:focus-visible": {
      outline: `2px solid ${colors.primary[500]}`,
      outlineOffset: "2px",
      borderRadius: radius.sm,
    },
  },

  sortableHeaderActive: {
    fontWeight: 900,
    color: colors.primary[600],
  },

  row: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr 1fr 1fr 120px",
    alignItems: "center",
    px: spacing.md,
    py: spacing.md,
    border: `1px solid ${colors.gray[100]}`,
    borderRadius: radius.md,
    cursor: "pointer",
    bgcolor: colors.background.default,
    transition:
      "background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease",
    mb: spacing.sm,
    "&:last-child": {
      mb: 0,
    },
    "&:hover": {
      bgcolor: colors.gray[50],
      borderColor: colors.gray[200],
      boxShadow: "0 8px 24px rgba(17, 24, 39, 0.06)",
      transform: "translateY(-1px)",
    },
    "&:focus-visible": {
      outline: `2px solid ${colors.primary[500]}`,
      outlineOffset: "2px",
      bgcolor: colors.gray[50],
    },
  },

  rowSelected: {
    bgcolor: colors.primary[100],
    borderColor: colors.primary[500],
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
    borderRadius: radius.md,
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
    fontWeight: 800,
    color: colors.gray[900],
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },

  attachmentIndicator: {
    display: "inline-flex",
    alignItems: "center",
    gap: spacing.xs,
    width: "fit-content",
    ...typography.label,
    color: colors.primary[600],
    px: spacing.sm,
    py: spacing.xs,
    borderRadius: radius.full,
    bgcolor: colors.primary[100],
  },

  attachmentIndicatorIcon: {
    fontSize: 14,
    color: colors.primary[500],
  },

  attachmentIndicatorText: {
    ...typography.label,
    color: colors.primary[600],
    fontWeight: 700,
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
    fontWeight: 800,
    color: colors.gray[900],
    whiteSpace: "nowrap",
  },
} satisfies Record<string, SxProps<Theme>>;

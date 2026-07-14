import { SxProps, Theme } from "@mui/material";
import { colors, spacing, typography, sizes, radius } from "@/styles/tokens";

export const transactionDetailsStyles = {
  root: {
    width: {
      xs: "100%",
      lg: 320,
    },
    minWidth: {
      xs: "100%",
      lg: 320,
    },
    minHeight: {
      xs: "auto",
      lg: "100vh",
    },
    p: {
      xs: spacing.lg,
      md: spacing.xl,
    },
    bgcolor: colors.background.default,
    borderLeft: {
      xs: "none",
      lg: `1px solid ${colors.gray[200]}`,
    },
    borderTop: {
      xs: `1px solid ${colors.gray[200]}`,
      lg: "none",
    },
    display: "flex",
    flexDirection: "column",
    gap: spacing.xl,
  } as SxProps<Theme>,

  summary: {
    display: "flex",
    flexDirection: "column",
    gap: spacing.lg,
  } as SxProps<Theme>,

  title: {
    ...typography.subtitle,
    color: colors.gray[600],
  } as SxProps<Theme>,

  content: {
    display: "flex",
    flexDirection: "column",
    gap: spacing.md,
  } as SxProps<Theme>,

  meta: {
    display: "flex",
    alignItems: "center",
    gap: spacing.sm,
    ...typography.body,
    color: colors.gray[400],
    flexWrap: "wrap",
  } as SxProps<Theme>,

  amount: {
    ...typography.title,
    fontWeight: 600,
    color: colors.gray[900],
    wordBreak: "break-word",
  } as SxProps<Theme>,

  detailsList: {
    display: "flex",
    flexDirection: "column",
    gap: spacing.xl,
  } as SxProps<Theme>,

  detailsItem: {
    display: "flex",
    flexDirection: "column",
    gap: spacing.xs,
    minWidth: 0,
  } as SxProps<Theme>,

  label: {
    ...typography.label,
    color: colors.gray[400],
  } as SxProps<Theme>,

  value: {
    ...typography.body,
    fontWeight: 500,
    color: colors.gray[900],
    wordBreak: "break-word",
  } as SxProps<Theme>,

  valueRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: spacing.sm,
    minWidth: 0,
  } as SxProps<Theme>,

  copyButton: {
    width: sizes.icon,
    height: sizes.icon,
    color: colors.gray[500],
    flexShrink: 0,
    "&:hover": {
      bgcolor: colors.gray[100],
      color: colors.primary[500],
    },
    "&:focus-visible": {
      outline: `2px solid ${colors.primary[500]}`,
      outlineOffset: "2px",
    },
  } as SxProps<Theme>,

  copyIcon: {
    fontSize: 16,
  } as SxProps<Theme>,

  copyFeedback: {
    ...typography.label,
    color: colors.success[700],
    ml: spacing.xs,
  } as SxProps<Theme>,

  attachmentCard: {
    display: "flex",
    flexDirection: "column",
    gap: spacing.md,
    p: spacing.md,
    border: `1px solid ${colors.gray[200]}`,
    borderRadius: radius.md,
    bgcolor: colors.gray[50],
  } as SxProps<Theme>,

  attachmentHeader: {
    display: "flex",
    alignItems: "flex-start",
    gap: spacing.md,
    minWidth: 0,
  } as SxProps<Theme>,

  attachmentIconWrapper: {
    width: sizes.icon,
    height: sizes.icon,
    borderRadius: radius.md,
    bgcolor: colors.primary[100],
    color: colors.primary[500],
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  } as SxProps<Theme>,

  attachmentIcon: {
    fontSize: 18,
  } as SxProps<Theme>,

  attachmentInfo: {
    display: "flex",
    flexDirection: "column",
    gap: spacing.xs,
    minWidth: 0,
  } as SxProps<Theme>,

  attachmentTitle: {
    ...typography.label,
    color: colors.gray[500],
  } as SxProps<Theme>,

  attachmentName: {
    ...typography.body,
    fontWeight: 600,
    color: colors.gray[900],
    wordBreak: "break-word",
  } as SxProps<Theme>,

  attachmentMeta: {
    ...typography.label,
    color: colors.gray[400],
  } as SxProps<Theme>,

  attachmentActions: {
    display: "flex",
    gap: spacing.sm,
    flexDirection: {
      xs: "column",
      sm: "row",
      lg: "column",
    },
  } as SxProps<Theme>,

  actions: {
    display: "flex",
    gap: spacing.sm,
    mt: "auto",
    flexDirection: {
      xs: "column",
      sm: "row",
      lg: "row",
    },
  } as SxProps<Theme>,

  emptyText: {
    mt: spacing.lg,
    ...typography.body,
    color: colors.gray[600],
    lineHeight: 1.5,
  } as SxProps<Theme>,

  attachmentsSection: {
    display: "flex",
    flexDirection: "column",
    gap: spacing.md,
  } as SxProps<Theme>,
};

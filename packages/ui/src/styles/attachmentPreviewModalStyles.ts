import type { SxProps, Theme } from "@mui/material";

import { colors, radius, shadow, spacing, typography } from "./tokens";

export const attachmentPreviewModalStyles = {
  overlay: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    p: spacing.xl,
  } as SxProps<Theme>,

  container: {
    width: {
      xs: "100%",
      md: "90%",
      lg: "80%",
    },
    maxWidth: 1100,
    height: {
      xs: "90%",
      md: "85%",
    },
    bgcolor: colors.background.default,
    borderRadius: radius.lg,
    boxShadow: shadow.lg,
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  } as SxProps<Theme>,

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    px: spacing.xl,
    py: spacing.lg,
    borderBottom: `1px solid ${colors.gray[200]}`,
  } as SxProps<Theme>,

  titleWrapper: {
    display: "flex",
    alignItems: "center",
    gap: spacing.sm,
    color: colors.gray[900],
    minWidth: 0,
  } as SxProps<Theme>,

  title: {
    ...typography.subtitle,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  } as SxProps<Theme>,

  content: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    bgcolor: colors.gray[100],
    overflow: "hidden",
    p: spacing.lg,
  } as SxProps<Theme>,

  footer: {
    display: "flex",
    justifyContent: "flex-end",
    gap: spacing.md,
    px: spacing.xl,
    py: spacing.lg,
    borderTop: `1px solid ${colors.gray[200]}`,
  } as SxProps<Theme>,
};

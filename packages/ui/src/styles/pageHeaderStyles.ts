import type { SxProps, Theme } from "@mui/material";

import {
  colors,
  spacing,
  typography,
} from "./tokens";

export const pageHeaderStyles = {
  root: {
    mb: spacing.lg,
  } as SxProps<Theme>,

  title: {
    ...typography.title,
    color: colors.gray[900],
    lineHeight: 1.2,
  } as SxProps<Theme>,

  breadcrumb: {
    ...typography.body,
    color: colors.gray[500],
    mt: spacing.xs,
    display: "flex",
    alignItems: "center",
    gap: spacing.xs,
  } as SxProps<Theme>,

  breadcrumbGroup: {
    display: "flex",
    alignItems: "center",
  } as SxProps<Theme>,

  breadcrumbItem: {
    cursor: "default",
  } as SxProps<Theme>,

  breadcrumbSeparator: {
    color: colors.gray[400],
  } as SxProps<Theme>,

  breadcrumbLast: {
    color: colors.gray[900],
    fontWeight: 500,
  } as SxProps<Theme>,
};
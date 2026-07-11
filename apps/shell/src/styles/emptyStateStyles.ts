import { SxProps, Theme } from "@mui/material";
import { colors, spacing, radius, typography, sizes } from "@/styles/tokens";

export const emptyStateRootStyle = {
  width: "100%",
  minHeight: "320px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  p: spacing.xxl,
} as SxProps<Theme>;

export const emptyStateContainerStyle = {
  width: "100%",
  maxWidth: "420px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
} as SxProps<Theme>;

export const emptyStateIconWrapperStyle = {
  width: sizes.emptyStateIcon,
  height: sizes.emptyStateIcon,
  borderRadius: radius.full,
  bgcolor: colors.primary[100],
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  mb: spacing.lg,
} as SxProps<Theme>;

export const emptyStateIconStyle = {
  fontSize: 28,
  color: colors.primary[500],
} as SxProps<Theme>;

export const emptyStateTitleStyle = {
  ...typography.title,
  lineHeight: 1.3,
  color: colors.gray[900],
  mb: spacing.sm,
} as SxProps<Theme>;

export const emptyStateDescriptionStyle = {
  ...typography.body,
  lineHeight: 1.5,
  color: colors.gray[500],
  mb: spacing.xl,
} as SxProps<Theme>;

export const emptyStateActionStyle = {
  display: "flex",
  justifyContent: "center",
} as SxProps<Theme>;
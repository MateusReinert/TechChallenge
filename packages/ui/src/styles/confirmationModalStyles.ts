import type { SxProps, Theme } from "@mui/material";

import {
  colors,
  radius,
  shadow,
  spacing,
  typography,
} from "./tokens";

export const confirmationModalOverlayStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: spacing.xl,
} as SxProps<Theme>;

export const confirmationModalContainerStyle = {
  width: "100%",
  maxWidth: "440px",
  backgroundColor: colors.background.default,
  borderRadius: radius.lg,
  border: `1px solid ${colors.gray[200]}`,
  boxShadow: shadow.md,
  padding: spacing.xl,
} as SxProps<Theme>;

export const confirmationModalHeaderStyle = {
  display: "flex",
  flexDirection: "column",
  gap: spacing.sm,
  marginBottom: spacing.xl,
} as SxProps<Theme>;

export const confirmationModalTitleStyle = {
  ...typography.title,
  lineHeight: 1.3,
  color: colors.gray[900],
} as SxProps<Theme>;

export const confirmationModalDescriptionStyle = {
  ...typography.body,
  lineHeight: 1.5,
  color: colors.gray[500],
} as SxProps<Theme>;

export const confirmationModalFooterStyle = {
  display: "flex",
  justifyContent: "flex-end",
  gap: spacing.md,
  flexWrap: "wrap",
} as SxProps<Theme>;
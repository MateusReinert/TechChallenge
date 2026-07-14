import { SxProps, Theme } from "@mui/material";
import { colors, spacing, radius, shadow, typography } from "@/styles/tokens";

export const modalOverlayStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  p: spacing.xl,
} as SxProps<Theme>;

export const modalContainerStyle = {
  width: "100%",
  maxWidth: "560px",
  bgcolor: colors.background.default,
  borderRadius: radius.lg,
  boxShadow: shadow.lg,
  p: spacing.xl,
  outline: "none",
} as SxProps<Theme>;

export const modalHeaderStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: spacing.lg,
  mb: spacing.xl,
} as SxProps<Theme>;

export const modalTitleStyle = {
  ...typography.title,
  color: colors.gray[900],
} as SxProps<Theme>;

export const modalDescriptionStyle = {
  mt: spacing.xs,
  ...typography.body,
  color: colors.gray[500],
} as SxProps<Theme>;

export const modalCloseButtonStyle = {
  color: colors.gray[500],

  "&:hover": {
    bgcolor: colors.gray[100],
  },

  "&:focus-visible": {
    outline: `2px solid ${colors.primary[500]}`,
    outlineOffset: "2px",
    borderRadius: radius.sm,
  },
} as SxProps<Theme>;

export const modalContentStyle = {
  display: "flex",
  flexDirection: "column",
  gap: spacing.lg,
} as SxProps<Theme>;

export const modalFormGridStyle = {
  display: "grid",
  gridTemplateColumns: {
    xs: "1fr",
    md: "1fr 1fr",
  },
  gap: spacing.lg,
} as SxProps<Theme>;

export const modalFooterStyle = {
  mt: spacing.xl,
  display: "flex",
  justifyContent: "flex-end",
  gap: spacing.md,
} as SxProps<Theme>;

export const modalFooterEditingStyle = {
  mt: spacing.xl,
  display: "flex",
  justifyContent: "space-between",
  gap: spacing.md,
} as SxProps<Theme>;

export const modalActionsGroupStyle = {
  display: "flex",
  gap: spacing.md,
} as SxProps<Theme>;

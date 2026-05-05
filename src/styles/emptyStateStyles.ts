import { SxProps, Theme } from "@mui/material";

export const emptyStateRootStyle = {
  width: "100%",
  minHeight: "320px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  p: "32px",
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
  width: "64px",
  height: "64px",
  borderRadius: "999px",
  bgcolor: "#EEF2FF",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  mb: "20px",
} as SxProps<Theme>;

export const emptyStateIconStyle = {
  fontSize: 28,
  color: "#315CC3",
} as SxProps<Theme>;

export const emptyStateTitleStyle = {
  fontSize: "20px",
  fontWeight: 700,
  lineHeight: 1.3,
  color: "#111827",
  mb: "8px",
} as SxProps<Theme>;

export const emptyStateDescriptionStyle = {
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: 1.5,
  color: "#6B7280",
  mb: "24px",
} as SxProps<Theme>;

export const emptyStateActionStyle = {
  display: "flex",
  justifyContent: "center",
} as SxProps<Theme>;
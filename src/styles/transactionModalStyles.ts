import { SxProps, Theme } from "@mui/material";

export const modalOverlayStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  p: "24px",
} as SxProps<Theme>;

export const modalContainerStyle = {
  width: "100%",
  maxWidth: "560px",
  bgcolor: "#FFFFFF",
  borderRadius: "24px",
  boxShadow: "0px 24px 64px rgba(15, 23, 42, 0.18)",
  p: "24px",
  outline: "none",
} as SxProps<Theme>;

export const modalHeaderStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: "16px",
  mb: "24px",
} as SxProps<Theme>;

export const modalTitleStyle = {
  fontSize: "20px",
  fontWeight: 700,
  color: "#111827",
} as SxProps<Theme>;

export const modalDescriptionStyle = {
  mt: "6px",
  fontSize: "14px",
  color: "#6B7280",
} as SxProps<Theme>;

export const modalCloseButtonStyle = {
  color: "#6B7280",

  "&:hover": {
    bgcolor: "#F3F4F6",
  },

  // 🔥 ACESSIBILIDADE (FOCO VISÍVEL)
  "&:focus-visible": {
    outline: "2px solid #315CC3",
    outlineOffset: "2px",
    borderRadius: "8px",
  },
} as SxProps<Theme>;

export const modalContentStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "16px",
} as SxProps<Theme>;

export const modalFormGridStyle = {
  display: "grid",
  gridTemplateColumns: {
    xs: "1fr",
    md: "1fr 1fr",
  },
  gap: "16px",
} as SxProps<Theme>;

export const modalFooterStyle = {
  mt: "28px",
  display: "flex",
  justifyContent: "flex-end",
  gap: "12px",
} as SxProps<Theme>;

export const modalFooterEditingStyle = {
  mt: "28px",
  display: "flex",
  justifyContent: "space-between",
  gap: "12px",
} as SxProps<Theme>;

export const modalActionsGroupStyle = {
  display: "flex",
  gap: "12px",
} as SxProps<Theme>;
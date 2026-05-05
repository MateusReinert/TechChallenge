import { SxProps, Theme } from "@mui/material";

export const confirmationModalOverlayStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "24px",
} as SxProps<Theme>;

export const confirmationModalContainerStyle = {
  width: "100%",
  maxWidth: "440px",
  backgroundColor: "#FFFFFF",
  borderRadius: "16px",
  border: "1px solid #E5E7EB",
  boxShadow: "0px 20px 40px rgba(15, 23, 42, 0.12)",
  padding: "24px",
} as SxProps<Theme>;

export const confirmationModalHeaderStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  marginBottom: "24px",
} as SxProps<Theme>;

export const confirmationModalTitleStyle = {
  fontSize: "20px",
  fontWeight: 700,
  lineHeight: 1.3,
  color: "#111827",
} as SxProps<Theme>;

export const confirmationModalDescriptionStyle = {
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: 1.5,
  color: "#6B7280",
} as SxProps<Theme>;

export const confirmationModalFooterStyle = {
  display: "flex",
  justifyContent: "flex-end",
  gap: "12px",
  flexWrap: "wrap",
} as SxProps<Theme>;

export const confirmationModalDangerButtonStyle = {
  backgroundColor: "#DC2626",
  borderColor: "#DC2626",
  color: "#FFFFFF",

  "&:hover": {
    backgroundColor: "#B91C1C",
    borderColor: "#B91C1C",
  },
} as SxProps<Theme>;
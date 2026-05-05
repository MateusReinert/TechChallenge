import { SxProps, Theme } from "@mui/material";

export const loadingOverlayStyles = {
  backdrop: {
    zIndex: 9999,
    backgroundColor: "rgba(17, 24, 39, 0.35)",
    backdropFilter: "blur(2px)",
  } as SxProps<Theme>,

  container: {
    width: "320px",
    maxWidth: "90vw",
    backgroundColor: "#FFFFFF",
    borderRadius: "16px",
    padding: "32px 24px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "18px",
    boxShadow:
      "0 20px 25px -5px rgba(0,0,0,0.08), 0 10px 10px -5px rgba(0,0,0,0.04)",
  } as SxProps<Theme>,

  spinner: {
    color: "#315CC3",
  } as SxProps<Theme>,

  title: {
    fontSize: "15px",
    fontWeight: 600,
    color: "#111827",
    textAlign: "center",
  } as SxProps<Theme>,

  subtitle: {
    fontSize: "13px",
    color: "#6B7280",
    textAlign: "center",
  } as SxProps<Theme>,
};
import { SxProps, Theme } from "@mui/material";

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
      xs: "16px",
      md: "24px",
    },
    bgcolor: "#FFFFFF",
    borderLeft: {
      xs: "none",
      lg: "1px solid #E5E7EB",
    },
    borderTop: {
      xs: "1px solid #E5E7EB",
      lg: "none",
    },
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  } as SxProps<Theme>,

  summary: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  } as SxProps<Theme>,

  title: {
    fontSize: 18,
    fontWeight: 500,
    color: "#4B5563",
  } as SxProps<Theme>,

  content: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  } as SxProps<Theme>,

  meta: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: 14,
    color: "#9CA3AF",
    flexWrap: "wrap",
  } as SxProps<Theme>,

  amount: {
    fontSize: {
      xs: 22,
      md: 24,
    },
    fontWeight: 600,
    color: "#111827",
    wordBreak: "break-word",
  } as SxProps<Theme>,

  detailsList: {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  } as SxProps<Theme>,

  detailsItem: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    minWidth: 0,
  } as SxProps<Theme>,

  label: {
    fontSize: 12,
    fontWeight: 400,
    color: "#9CA3AF",
  } as SxProps<Theme>,

  value: {
    fontSize: 14,
    fontWeight: 500,
    color: "#111827",
    wordBreak: "break-word",
  } as SxProps<Theme>,

  valueRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "8px",
    minWidth: 0,
  } as SxProps<Theme>,

  // 🔥 NOVO: botão acessível de copiar
  copyButton: {
    width: 32,
    height: 32,
    color: "#6B7280",
    flexShrink: 0,
    "&:hover": {
      bgcolor: "#F3F4F6",
      color: "#315CC3",
    },
    "&:focus-visible": {
      outline: "2px solid #315CC3",
      outlineOffset: "2px",
    },
  } as SxProps<Theme>,

  copyIcon: {
    fontSize: 16,
  } as SxProps<Theme>,

  // 🔥 NOVO: feedback de "copiado"
  copyFeedback: {
    fontSize: 12,
    fontWeight: 500,
    color: "#285A3F",
    ml: "4px",
  } as SxProps<Theme>,

  actions: {
    display: "flex",
    gap: "8px",
    mt: "auto",
    flexDirection: {
      xs: "column",
      sm: "row",
      lg: "row",
    },
  } as SxProps<Theme>,

  emptyText: {
    mt: "16px",
    fontSize: 14,
    fontWeight: 400,
    color: "#4B5563",
    lineHeight: 1.5,
  } as SxProps<Theme>,
};
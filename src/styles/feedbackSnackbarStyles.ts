import { SxProps, Theme } from "@mui/material";

export const feedbackSnackbarStyles = {
  success: {
    backgroundColor: "#ECFDF3",
    color: "#027A48",
    border: "1px solid #ABEFC6",
  },

  error: {
    backgroundColor: "#FEF3F2",
    color: "#B42318",
    border: "1px solid #FECDCA",
  },

  content: {
    width: "100%",
    borderRadius: "12px",
    padding: "14px 16px",
    fontSize: "14px",
    fontWeight: 600,
    boxShadow:
      "0 10px 15px -3px rgba(0,0,0,0.08), 0 4px 6px -4px rgba(0,0,0,0.04)",
  },

  alertParts: {
    "& .MuiAlert-icon": {
      color: "inherit",
    },

    "& .MuiAlert-action": {
      color: "inherit",
    },
  },
} satisfies Record<string, SxProps<Theme>>;
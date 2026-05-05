import { SxProps, Theme } from "@mui/material";

export const statusTagStyles = {
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    px: "8px",
    py: "2px",
    borderRadius: "999px",
    fontSize: "12px",
    fontWeight: 500,
    whiteSpace: "nowrap",
  },

  success: {
    bgcolor: "#E9F4EE",
    color: "#285A3F",
  },

  error: {
    bgcolor: "#F4EAEA",
    color: "#8F2F2F",
  },

  pending: {
    bgcolor: "#FFF4E5",
    color: "#7A4E0B",
  },
} satisfies Record<string, SxProps<Theme>>;
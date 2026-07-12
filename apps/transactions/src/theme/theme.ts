import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      light: "#E6EDFB",
      main: "#315CC3",
      dark: "#2A4DA8",
      contrastText: "#FFFFFF",
    },
    success: {
      light: "#E9F4EE",
      main: "#2F6F4E",
      dark: "#285A3F",
    },
    error: {
      light: "#F4EAEA",
      main: "#B23B3B",
      dark: "#8F2F2F",
    },
    warning: {
      light: "#FDF6E9",
      main: "#C49A3A",
      dark: "#A07A2E",
    },
    grey: {
      50: "#F9FAFB",
      100: "#F3F4F6",
      200: "#E5E7EB",
      300: "#D1D5DB",
      400: "#9CA3AF",
      500: "#6B7280",
      600: "#4B5563",
      700: "#374151",
      800: "#1F2937",
      900: "#111827",
    },
    background: {
      default: "#F9FAFB",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#111827",
      secondary: "#4B5563",
      disabled: "#9CA3AF",
    },
    divider: "#D1D5DB",
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    button: {
      fontSize: 14,
      fontWeight: 500,
      textTransform: "none",
    },
  },
  shape: {
    borderRadius: 8,
  },
  spacing: 8,
});
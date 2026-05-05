import { SxProps, Theme } from "@mui/material";

export const sidebarStyles = {
  root: {
    width: {
      xs: "100%",
      md: 280,
    },
    minWidth: {
      xs: "100%",
      md: 280,
    },
    height: {
      xs: "auto",
      md: "100vh",
    },
    p: {
      xs: "16px",
      md: "24px",
    },
    bgcolor: "#FFFFFF",
    borderRight: {
      xs: "none",
      md: "1px solid #E5E7EB",
    },
    borderBottom: {
      xs: "1px solid #E5E7EB",
      md: "none",
    },
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    position: {
      xs: "sticky",
      md: "relative",
    },
    top: 0,
    zIndex: 20,
  },

  topContent: {
    display: "flex",
    flexDirection: "column",
    gap: {
      xs: "16px",
      md: "24px",
    },
  },

  logo: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },

  logoText: {
    fontSize: 20,
    fontWeight: 500,
    color: "#315CC3",
  },

  greeting: {
    display: {
      xs: "none",
      md: "flex",
    },
    flexDirection: "column",
    gap: "4px",
  },

  greetingTitle: {
    fontSize: 18,
    fontWeight: 500,
    color: "#111827",
  },

  greetingDate: {
    fontSize: 14,
    fontWeight: 400,
    color: "#4B5563",
  },

  nav: {
    display: "flex",
    flexDirection: {
      xs: "row",
      md: "column",
    },
    gap: {
      xs: "12px",
      md: "24px",
    },
    overflowX: {
      xs: "auto",
      md: "visible",
    },
    pb: {
      xs: "4px",
      md: 0,
    },
  },

  navGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    minWidth: {
      xs: "fit-content",
      md: "auto",
    },
  },

  groupTitle: {
    display: {
      xs: "none",
      md: "block",
    },
    fontSize: 12,
    fontWeight: 500,
    color: "#9CA3AF",
  },

  item: {
    height: 44,
    px: "12px",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: 14,
    fontWeight: 500,
    color: "#4B5563",
    textDecoration: "none",
    whiteSpace: "nowrap",
    "&:hover": {
      bgcolor: "#E6EDFB",
      color: "#315CC3",
    },
    "&:focus-visible": {
      outline: "2px solid #315CC3",
      outlineOffset: "2px",
    },
  },

  itemActive: {
    bgcolor: "#315CC3",
    color: "#FFFFFF",
    "&:hover": {
      bgcolor: "#2A4DA8",
      color: "#FFFFFF",
    },
    "&:focus-visible": {
      outline: "2px solid #111827",
      outlineOffset: "2px",
    },
  },

  profile: {
    display: {
      xs: "none",
      md: "flex",
    },
    flexDirection: "column",
    gap: "2px",
  },

  profileName: {
    fontSize: 14,
    fontWeight: 500,
    color: "#111827",
  },

  profileEmail: {
    fontSize: 12,
    fontWeight: 400,
    color: "#9CA3AF",
  },

  logoIcon: {
    fontSize: 24,
    color: "#315CC3",
  },

  itemIcon: {
    fontSize: 20,
  },
} satisfies Record<string, SxProps<Theme>>;
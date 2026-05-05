import { SxProps, Theme } from "@mui/material";

export const dashboardClientStyles = {
  layout: {
    minHeight: "100vh",
    display: "grid",
    overflow: "hidden",
  } as SxProps<Theme>,

  content: {
    p: {
      xs: "16px",
      md: "24px",
      lg: "32px",
    },
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    overflow: "auto",
  } as SxProps<Theme>,

  cardsGrid: {
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      sm: "1fr 1fr",
      xl: "repeat(4, 1fr)",
    },
    gap: "16px",
  } as SxProps<Theme>,

  sectionHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: {
      xs: "flex-start",
      md: "center",
    },
    flexDirection: {
      xs: "column",
      md: "row",
    },
    gap: "16px",
  } as SxProps<Theme>,

  sectionTitle: {
    fontSize: "18px",
    fontWeight: 600,
    color: "#111827",
  } as SxProps<Theme>,

  actions: {
    display: "flex",
    gap: "12px",
    width: {
      xs: "100%",
      md: "auto",
    },
    flexDirection: {
      xs: "column",
      sm: "row",
    },
  } as SxProps<Theme>,

  tableWrapper: {
    overflowX: "auto",
  } as SxProps<Theme>,

  iconButton: {
    width: 24,
    height: 24,
    p: 0,
    color: "inherit",
  } as SxProps<Theme>,
};
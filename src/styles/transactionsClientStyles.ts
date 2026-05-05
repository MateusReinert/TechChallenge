import { SxProps, Theme } from "@mui/material";

export const transactionsClientStyles = {
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

  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: {
      xs: "stretch",
      md: "center",
    },
    flexDirection: {
      xs: "column",
      md: "row",
    },
    gap: "16px",
  } as SxProps<Theme>,

  searchWrapper: {
    width: {
      xs: "100%",
      md: "320px",
    },
  } as SxProps<Theme>,

  tableWrapper: {
    overflowX: "auto",
  } as SxProps<Theme>,

  pagination: {
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
    gap: "12px",
    mt: "-8px",
  } as SxProps<Theme>,

  paginationText: {
    fontSize: "13px",
    color: "#6B7280",
  } as SxProps<Theme>,

  paginationActions: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    flexWrap: "wrap",
  } as SxProps<Theme>,

  paginationButtons: {
    display: "flex",
    gap: "8px",
  } as SxProps<Theme>,

  paginationButton: {
    width: "32px",
    height: "32px",
    border: "1px solid #D1D5DB",
    borderRadius: "8px",
  } as SxProps<Theme>,
};
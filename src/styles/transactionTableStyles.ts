import { SxProps, Theme } from "@mui/material";

export const transactionTableStyles = {
  root: {
    width: "100%",
    minWidth: {
      xs: "1120px",
      lg: "100%",
    },
    bgcolor: "#FFFFFF",
    border: "1px solid #E5E7EB",
    borderRadius: "8px",
    overflow: "hidden",
  },

  header: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr 1fr 1fr 120px",
    px: {
      xs: "12px",
      md: "16px",
    },
    py: "12px",
    borderBottom: "1px solid #E5E7EB",
  },

  sortableHeader: {
    fontSize: 12,
    fontWeight: 500,
    color: "#4B5563",
    whiteSpace: "nowrap",
    cursor: "pointer",
    userSelect: "none",
    border: 0,
    p: 0,
    background: "transparent",
    textAlign: "left",
    fontFamily: "inherit",
    "&:focus-visible": {
      outline: "2px solid #315CC3",
      outlineOffset: "2px",
      borderRadius: "4px",
    },
  },

  sortableHeaderActive: {
    fontWeight: 700,
    color: "#111827",
  },

  row: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr 1fr 1fr 120px",
    alignItems: "center",
    px: {
      xs: "12px",
      md: "16px",
    },
    py: "12px",
    borderBottom: "1px solid #E5E7EB",
    cursor: "pointer",
    bgcolor: "transparent",
    transition: "background-color 0.2s ease",
    "&:last-child": {
      borderBottom: "none",
    },
    "&:hover": {
      bgcolor: "#F9FAFB",
    },
    "&:focus-visible": {
      outline: "2px solid #315CC3",
      outlineOffset: "-2px",
      bgcolor: "#F9FAFB",
    },
  },

  rowSelected: {
    bgcolor: "#F9FAFB",
  },

  descriptionCell: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    minWidth: 0,
  },

  iconWrapper: {
    width: 36,
    height: 36,
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },

  icon: {
    fontSize: 18,
  },

  incomeIcon: {
    bgcolor: "#E9F4EE",
    color: "#16A34A",
  },

  expenseIcon: {
    bgcolor: "#FEECEC",
    color: "#EF4444",
  },

  descriptionContent: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    minWidth: 0,
  },

  description: {
    fontSize: 14,
    fontWeight: 500,
    color: "#111827",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },

  cellText: {
    fontSize: 14,
    fontWeight: 400,
    color: "#4B5563",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    pr: "8px",
  },

  amount: {
    fontSize: 14,
    fontWeight: 500,
    color: "#111827",
    whiteSpace: "nowrap",
  },
} satisfies Record<string, SxProps<Theme>>;
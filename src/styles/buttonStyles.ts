import { SxProps, Theme } from "@mui/material";

export const buttonStyles = {
  base: {
    height: 40,
    px: "16px",
    py: "8px",
    borderRadius: "8px",
    fontSize: 14,
    fontWeight: 500,
    textTransform: "none",
  } as SxProps<Theme>,

  primary: {
    bgcolor: "#315CC3", // primary/500
    color: "#FFFFFF",
    "&:hover": {
      bgcolor: "#2A4DA8", // primary/600
    },
  } as SxProps<Theme>,

  outlined: {
    bgcolor: "transparent",
    color: "#315CC3",
    border: "1px solid #315CC3",
    "&:hover": {
      bgcolor: "#E6EDFB", // primary/100
      border: "1px solid #315CC3",
    },
  } as SxProps<Theme>,

  ghost: {
    bgcolor: "transparent",
    color: "#315CC3",
    "&:hover": {
      bgcolor: "#E6EDFB",
    },
  } as SxProps<Theme>,

  disabled: {
    "&.Mui-disabled": {
      bgcolor: "#D1D5DB", // gray/300
      color: "#9CA3AF",   // gray/400
      border: "1px solid #D1D5DB",
    },
  } as SxProps<Theme>,
};
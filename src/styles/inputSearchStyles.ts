import { SxProps, Theme } from "@mui/material";

export const inputSearchStyles = {
  root: {
    width: "100%",
    maxWidth: 320,
  } as SxProps<Theme>,

  input: {
    height: 40,
    borderRadius: "8px",
    backgroundColor: "#FFFFFF",

    "& fieldset": {
      borderColor: "#D1D5DB",
    },

    "&:hover fieldset": {
      borderColor: "#315CC3",
    },

    "&.Mui-focused fieldset": {
      borderColor: "#315CC3",
      borderWidth: "1px",
    },
  } as SxProps<Theme>,

  icon: {
    fontSize: 18,
    color: "#9CA3AF",
  } as SxProps<Theme>,
};
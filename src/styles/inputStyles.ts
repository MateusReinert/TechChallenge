import { SxProps, Theme } from "@mui/material";

export const inputStyles = {
  root: {
    width: "100%",
  } as SxProps<Theme>,

  field: {
    "& .MuiOutlinedInput-root": {
      borderRadius: "8px",
      height: 48,
      backgroundColor: "#FFFFFF",
    },

    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#D1D5DB",
    },

    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#315CC3",
    },

    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#315CC3",
      borderWidth: "1px",
    },

    "& .MuiInputLabel-root": {
      color: "#9CA3AF",
    },

    "& .MuiInputLabel-root.Mui-focused": {
      color: "#315CC3",
    },

    "& .MuiInputBase-input": {
      fontSize: "14px",
      color: "#111827",
    },
  } as SxProps<Theme>,

  helperText: {
    "& .MuiFormHelperText-root": {
      marginLeft: 0,
      marginTop: "6px",
      fontSize: "12px",
      fontWeight: 500,
    },
  } as SxProps<Theme>,
};
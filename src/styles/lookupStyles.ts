import { SxProps, Theme } from "@mui/material";

export const lookupStyles = {
  root: {
    width: "100%",
  },

  label: {
    mb: "6px",
    fontSize: "13px",
    fontWeight: 500,
    color: "#374151",
  },

  labelError: {
    color: "#D32F2F",
  },

  textField: {
    "& .MuiOutlinedInput-root": {
      height: "48px",
      borderRadius: "8px",
      bgcolor: "#FFFFFF",

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
    },

    "& .MuiSelect-select": {
      display: "flex",
      alignItems: "center",
      fontSize: "14px",
      color: "#111827",
    },

    "& .MuiSvgIcon-root": {
      color: "#6B7280",
    },
  },

  helperText: {
    "& .MuiFormHelperText-root": {
      marginLeft: 0,
      marginTop: "6px",
      fontSize: "12px",
      fontWeight: 500,
    },
  },

  placeholderText: {
    color: "#9CA3AF",
  },
} satisfies Record<string, SxProps<Theme> | React.CSSProperties>;
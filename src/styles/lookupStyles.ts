import { SxProps, Theme } from "@mui/material";
import { colors, radius, typography, sizes } from "@/styles/tokens";

export const lookupStyles = {
  root: {
    width: "100%",
  },

  label: {
    mb: "6px",
    ...typography.label,
    color: colors.gray[600],
  },

  labelError: {
    color: colors.error[500],
  },

  textField: {
    "& .MuiOutlinedInput-root": {
      height: sizes.inputHeight,
      borderRadius: radius.sm,
      bgcolor: colors.background.default,

      "& fieldset": {
        borderColor: colors.gray[300],
      },

      "&:hover fieldset": {
        borderColor: colors.primary[500],
      },

      "&.Mui-focused fieldset": {
        borderColor: colors.primary[500],
        borderWidth: "1px",
      },
    },

    "& .MuiSelect-select": {
      display: "flex",
      alignItems: "center",
      ...typography.body,
      color: colors.gray[900],
    },

    "& .MuiSvgIcon-root": {
      color: colors.gray[500],
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
    color: colors.gray[400],
  },
} satisfies Record<string, SxProps<Theme> | React.CSSProperties>;
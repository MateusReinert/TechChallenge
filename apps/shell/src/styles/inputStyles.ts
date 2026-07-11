import { SxProps, Theme } from "@mui/material";
import { colors, radius, typography, sizes } from "@/styles/tokens";

export const inputStyles = {
  root: {
    width: "100%",
  } as SxProps<Theme>,

  field: {
    "& .MuiOutlinedInput-root": {
      borderRadius: radius.sm,
      height: sizes.inputHeight,
      backgroundColor: colors.background.default,
    },

    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: colors.gray[300],
    },

    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: colors.primary[500],
    },

    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: colors.primary[500],
      borderWidth: "1px",
    },

    "& .MuiInputLabel-root": {
      color: colors.gray[400],
    },

    "& .MuiInputLabel-root.Mui-focused": {
      color: colors.primary[500],
    },

    "& .MuiInputBase-input": {
      ...typography.body,
      color: colors.gray[900],
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
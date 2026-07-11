import { SxProps, Theme } from "@mui/material";
import { colors, radius, sizes } from "@/styles/tokens";

export const inputSearchStyles = {
  root: {
    width: "100%",
    maxWidth: 320,
  } as SxProps<Theme>,

  input: {
    height: sizes.buttonHeight,
    borderRadius: radius.sm,
    backgroundColor: colors.background.default,

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
  } as SxProps<Theme>,

  icon: {
    fontSize: 18,
    color: colors.gray[400],
  } as SxProps<Theme>,
};
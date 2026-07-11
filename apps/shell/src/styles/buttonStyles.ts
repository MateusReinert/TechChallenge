import { SxProps, Theme } from "@mui/material";
import { colors, sizes } from "@/styles/tokens";

export const buttonStyles = {
  base: {
    height: sizes.buttonHeight,
    px: "16px",
    py: "8px",
    borderRadius: "8px",
    fontSize: 14,
    fontWeight: 500,
    textTransform: "none",
  } as SxProps<Theme>,

  primary: {
    bgcolor: colors.primary[500],
    color: colors.background.default,
    "&:hover": {
      bgcolor: colors.primary[600],
    },
  } as SxProps<Theme>,

  outlined: {
    bgcolor: "transparent",
    color: colors.primary[500],
    border: `1px solid ${colors.primary[500]}`,
    "&:hover": {
      bgcolor: colors.primary[100],
      border: `1px solid ${colors.primary[500]}`,
    },
  } as SxProps<Theme>,

  ghost: {
    bgcolor: "transparent",
    color: colors.primary[500],
    "&:hover": {
      bgcolor: colors.primary[100],
    },
  } as SxProps<Theme>,

  danger: {
    bgcolor: colors.danger[500],
    color: colors.background.default,
    "&:hover": {
      bgcolor: colors.danger[700],
    },
  } as SxProps<Theme>,

  dangerOutlined: {
    bgcolor: "transparent",
    color: colors.danger[500],
    border: `1px solid ${colors.danger[500]}`,
    "&:hover": {
      bgcolor: colors.error[100],
      border: `1px solid ${colors.danger[700]}`,
      color: colors.danger[700],
    },
  } as SxProps<Theme>,

  disabled: {
    "&.Mui-disabled": {
      bgcolor: colors.gray[300],
      color: colors.gray[400],
      border: `1px solid ${colors.gray[300]}`,
    },
  } as SxProps<Theme>,
};
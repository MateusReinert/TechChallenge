import type { SystemStyleObject, Theme } from "@mui/system";

import {
  colors,
  radius,
  shadow,
  sizes,
  spacing,
  typography,
} from "./tokens";

export const filterBarStyles = {
  root: {
    display: "flex",
    alignItems: "center",
    gap: spacing.sm,
    flexWrap: "wrap",
    width: "100%",
  } satisfies SystemStyleObject<Theme>,

  search: {
    width: {
      xs: "100%",
      lg: 280,
    },
  } satisfies SystemStyleObject<Theme>,

  input: {
    "& .MuiOutlinedInput-root": {
      height: sizes.buttonHeight,
      borderRadius: radius.full,
      bgcolor: colors.background.default,
    },

    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: colors.gray[200],
    },

    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: colors.primary[500],
    },

    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: colors.primary[500],
      borderWidth: "1px",
    },

    "& .MuiInputBase-input": {
      ...typography.body,
      fontWeight: 500,
      py: 0,
    },

    "& .MuiInputAdornment-root .MuiSvgIcon-root": {
      color: colors.gray[500],
    },
  } satisfies SystemStyleObject<Theme>,

  filterButton: {
    height: sizes.buttonHeight,
    px: spacing.lg,
    borderRadius: radius.full,
    border: `1px solid ${colors.gray[200]}`,
    bgcolor: colors.background.default,
    display: "inline-flex",
    alignItems: "center",
    gap: spacing.sm,
    transition:
      "border-color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease",
    whiteSpace: "nowrap",

    "&:hover": {
      borderColor: colors.primary[500],
      bgcolor: colors.gray[50],
    },

    "&:focus-visible": {
      outline: `2px solid ${colors.primary[500]}`,
      outlineOffset: "2px",
    },
  } satisfies SystemStyleObject<Theme>,

  filterButtonActive: {
    borderColor: colors.primary[500],
    bgcolor: colors.primary[100],
  } satisfies SystemStyleObject<Theme>,

  filterButtonText: {
    ...typography.body,
    color: colors.gray[900],
    fontWeight: 600,
  } satisfies SystemStyleObject<Theme>,

  filterIcon: {
    fontSize: 18,
    color: colors.gray[500],
  } satisfies SystemStyleObject<Theme>,

  clearButton: {
    height: sizes.buttonHeight,
    px: spacing.lg,
    borderRadius: radius.full,
    border: `1px solid ${colors.primary[500]}`,
    bgcolor: colors.background.default,
    color: colors.primary[600],
    display: "inline-flex",
    alignItems: "center",
    gap: spacing.sm,
    ...typography.body,
    fontWeight: 700,
    transition:
      "border-color 0.2s ease, background-color 0.2s ease, color 0.2s ease",

    "&:hover": {
      bgcolor: colors.primary[100],
    },

    "&:focus-visible": {
      outline: `2px solid ${colors.primary[500]}`,
      outlineOffset: "2px",
    },
  } satisfies SystemStyleObject<Theme>,

  clearButtonDisabled: {
    borderColor: colors.gray[200],
    color: colors.gray[400],
    bgcolor: colors.gray[50],
    cursor: "not-allowed",

    "&:hover": {
      bgcolor: colors.gray[50],
    },
  } satisfies SystemStyleObject<Theme>,

  clearIcon: {
    fontSize: 18,
  } satisfies SystemStyleObject<Theme>,

  clearSearchButton: {
    width: sizes.icon,
    height: sizes.icon,
    color: colors.gray[500],
  } satisfies SystemStyleObject<Theme>,

  menuPaper: {
    mt: spacing.sm,
    borderRadius: radius.md,
    border: `1px solid ${colors.gray[200]}`,
    boxShadow: shadow.md,
    minWidth: 180,
  } satisfies SystemStyleObject<Theme>,

  menuItem: {
    ...typography.body,
    fontWeight: 600,
    color: colors.gray[600],

    "&.Mui-selected": {
      bgcolor: colors.primary[100],
      color: colors.primary[600],
    },

    "&.Mui-selected:hover": {
      bgcolor: colors.primary[100],
    },
  } satisfies SystemStyleObject<Theme>,
};
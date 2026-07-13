import type { SxProps, Theme } from "@mui/material";

import {
  colors,
  radius,
  shadow,
  spacing,
  typography,
} from "./tokens";

export const feedbackSnackbarStyles = {
  success: {
    backgroundColor: colors.success[100],
    color: colors.success[700],
    border: `1px solid ${colors.success[300]}`,
  },

  error: {
    backgroundColor: colors.error[100],
    color: colors.error[700],
    border: `1px solid ${colors.error[300]}`,
  },

  content: {
    width: "100%",
    borderRadius: radius.md,
    padding: `${spacing.md} ${spacing.lg}`,
    ...typography.body,
    fontWeight: 600,
    boxShadow: shadow.lg,
  },

  alertParts: {
    "& .MuiAlert-icon": {
      color: "inherit",
    },

    "& .MuiAlert-action": {
      color: "inherit",
    },
  },
} satisfies Record<string, SxProps<Theme>>;
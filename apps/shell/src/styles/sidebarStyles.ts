import { SxProps, Theme } from "@mui/material";

import {
  colors,
  spacing,
  radius,
  typography,
  sizes,
  zIndex,
} from "@/styles/tokens";

export const sidebarStyles = {
  root: {
    width: {
      xs: "100%",
      md: 280,
    },
    minWidth: {
      xs: "100%",
      md: 280,
    },
    height: {
      xs: "auto",
      md: "100dvh",
    },
    maxHeight: {
      xs: "none",
      md: "100dvh",
    },
    flexShrink: 0,
    p: {
      xs: spacing.lg,
      md: spacing.xl,
    },
    bgcolor: colors.background.default,
    borderRight: {
      xs: "none",
      md: `1px solid ${colors.gray[200]}`,
    },
    borderBottom: {
      xs: `1px solid ${colors.gray[200]}`,
      md: "none",
    },
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    position: {
      xs: "sticky",
      md: "relative",
    },
    top: 0,
    overflow: {
      xs: "visible",
      md: "hidden",
    },
    zIndex: zIndex.sidebar,
  },

  topContent: {
    display: "flex",
    flexDirection: "column",
    gap: {
      xs: spacing.lg,
      md: spacing.xl,
    },
    minHeight: 0,
  },

  logo: {
    display: "flex",
    alignItems: "center",
    gap: spacing.md,
  },

  logoText: {
    ...typography.subtitle,
    color: colors.primary[500],
  },

  greeting: {
    display: {
      xs: "none",
      md: "flex",
    },
    flexDirection: "column",
    gap: spacing.xs,
  },

  greetingTitle: {
    ...typography.subtitle,
    color: colors.gray[900],
  },

  greetingDate: {
    ...typography.body,
    color: colors.gray[600],
  },

  nav: {
    display: "flex",
    flexDirection: {
      xs: "row",
      md: "column",
    },
    gap: {
      xs: spacing.md,
      md: spacing.xl,
    },
    overflowX: {
      xs: "auto",
      md: "visible",
    },
    overflowY: {
      xs: "visible",
      md: "auto",
    },
    pb: {
      xs: spacing.xs,
      md: 0,
    },
  },

  navGroup: {
    display: "flex",
    flexDirection: "column",
    gap: spacing.md,
    minWidth: {
      xs: "fit-content",
      md: "auto",
    },
  },

  groupTitle: {
    display: {
      xs: "none",
      md: "block",
    },
    ...typography.label,
    color: colors.gray[400],
  },

  item: {
    height: sizes.buttonHeight,
    px: spacing.md,
    borderRadius: radius.sm,
    display: "flex",
    alignItems: "center",
    gap: spacing.sm,
    ...typography.body,
    fontWeight: 500,
    color: colors.gray[600],
    textDecoration: "none",
    whiteSpace: "nowrap",

    "&:hover": {
      bgcolor: colors.primary[100],
      color: colors.primary[500],
    },

    "&:focus-visible": {
      outline: `2px solid ${colors.primary[500]}`,
      outlineOffset: "2px",
    },
  },

  itemActive: {
    bgcolor: colors.primary[500],
    color: colors.background.default,

    "&:hover": {
      bgcolor: colors.primary[600],
      color: colors.background.default,
    },

    "&:focus-visible": {
      outline: `2px solid ${colors.gray[900]}`,
      outlineOffset: "2px",
    },
  },

  profile: {
    display: {
      xs: "none",
      md: "flex",
    },
    flexDirection: "column",
    gap: "2px",
    flexShrink: 0,
  },

  profileName: {
    ...typography.body,
    fontWeight: 500,
    color: colors.gray[900],
  },

  profileEmail: {
    ...typography.label,
    color: colors.gray[400],
  },

  logoIcon: {
    fontSize: sizes.icon,
    color: colors.primary[500],
  },

  itemIcon: {
    fontSize: sizes.icon,
  },
} satisfies Record<string, SxProps<Theme>>;

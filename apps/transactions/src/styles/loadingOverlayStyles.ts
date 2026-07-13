import { SxProps, Theme } from "@mui/material";
import { colors, radius, spacing, shadow, typography, zIndex } from "./tokens";

export const loadingOverlayStyles = {
  backdrop: {
    zIndex: zIndex.overlay,
    backgroundColor: colors.background.overlay,
    backdropFilter: "blur(2px)",
  } as SxProps<Theme>,

  container: {
    width: "320px",
    maxWidth: "90vw",
    backgroundColor: colors.background.default,
    borderRadius: radius.lg,
    padding: `${spacing.xxl} ${spacing.xl}`,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: spacing.lg,
    boxShadow: shadow.lg,
  } as SxProps<Theme>,

  spinner: {
    color: colors.primary[500],
  } as SxProps<Theme>,

  title: {
    ...typography.body,
    fontWeight: 600,
    color: colors.gray[900],
    textAlign: "center",
  } as SxProps<Theme>,

  subtitle: {
    ...typography.label,
    color: colors.gray[500],
    textAlign: "center",
  } as SxProps<Theme>,
};
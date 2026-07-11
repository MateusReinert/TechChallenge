import type { SystemStyleObject, Theme } from "@mui/system";

import {
  colors,
  radius,
  shadow,
  spacing,
  typography,
} from "@/styles/tokens";

export const fileDropzoneStyles = {
  root: {
    display: "flex",
    flexDirection: "column",
    gap: spacing.md,
  } satisfies SystemStyleObject<Theme>,

  fileList: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxHeight: 220,
    overflowY: "auto",
    border: `1px solid ${colors.gray[200]}`,
    borderRadius: radius.md,
    bgcolor: colors.background.default,
  } satisfies SystemStyleObject<Theme>,

  fileItem: {
    display: "grid",
    gridTemplateColumns: "32px 1fr 32px",
    alignItems: "center",
    gap: spacing.md,
    width: "100%",
    padding: spacing.md,
    borderBottom: `1px solid ${colors.gray[200]}`,
    "&:last-of-type": {
      borderBottom: "none",
    },
  } satisfies SystemStyleObject<Theme>,

  dropzone: {
    minHeight: 96,
    border: `2px dashed ${colors.gray[300]}`,
    borderRadius: radius.lg,
    backgroundColor: colors.background.default,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: spacing.md,
    padding: spacing.lg,
    cursor: "pointer",
    transition: "all .2s ease",
    "&:hover": {
      borderColor: colors.primary[500],
      backgroundColor: colors.primary[100],
    },
    "&:focus-visible": {
      outline: `2px solid ${colors.primary[500]}`,
      outlineOffset: 2,
    },
  } satisfies SystemStyleObject<Theme>,

  dropzoneActive: {
    borderColor: colors.primary[500],
    backgroundColor: colors.primary[100],
    boxShadow: shadow.md,
  } satisfies SystemStyleObject<Theme>,

  dropzoneError: {
    borderColor: colors.error[500],
    backgroundColor: colors.error[100],
  } satisfies SystemStyleObject<Theme>,

  uploadIcon: {
    fontSize: 32,
    color: colors.primary[500],
    flexShrink: 0,
  } satisfies SystemStyleObject<Theme>,

  dropzoneText: {
    display: "flex",
    flexDirection: "column",
    gap: spacing.xs,
    minWidth: 0,
  } satisfies SystemStyleObject<Theme>,

  title: {
    ...typography.body,
    fontWeight: 600,
    color: colors.gray[900],
  } satisfies SystemStyleObject<Theme>,

  subtitle: {
    ...typography.body,
    color: colors.gray[600],
    textAlign: "center",
  } satisfies SystemStyleObject<Theme>,

  info: {
    ...typography.label,
    color: colors.gray[500],
  } satisfies SystemStyleObject<Theme>,

  fileContainer: {
    display: "flex",
    flexDirection: "column",
    gap: spacing.sm,
    width: "100%",
  } satisfies SystemStyleObject<Theme>,

  fileIcon: {
    fontSize: 28,
    color: colors.primary[500],
    flexShrink: 0,
  } satisfies SystemStyleObject<Theme>,

  fileInfo: {
    display: "flex",
    flexDirection: "column",
    gap: spacing.xs,
    minWidth: 0,
  } satisfies SystemStyleObject<Theme>,

  fileName: {
    ...typography.body,
    fontWeight: 600,
    color: colors.gray[900],
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  } satisfies SystemStyleObject<Theme>,

  fileSize: {
    ...typography.label,
    color: colors.gray[500],
  } satisfies SystemStyleObject<Theme>,

  fileActions: {
    display: "flex",
    alignItems: "center",
    flexShrink: 0,
  } satisfies SystemStyleObject<Theme>,

  removeButton: {
    width: 32,
    height: 32,
    color: colors.error[500],
    "&:hover": {
      bgcolor: colors.error[100],
    },
    "&:focus-visible": {
      outline: `2px solid ${colors.error[500]}`,
      outlineOffset: 2,
    },
  } satisfies SystemStyleObject<Theme>,

  removeIcon: {
    fontSize: 18,
  } satisfies SystemStyleObject<Theme>,

  helperText: {
    ...typography.label,
    color: colors.error[500],
    marginLeft: spacing.xs,
  } satisfies SystemStyleObject<Theme>,
};
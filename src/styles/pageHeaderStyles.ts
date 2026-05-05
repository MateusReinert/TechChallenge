import { SxProps, Theme } from "@mui/material";

export const pageHeaderStyles = {
  root: {
    mb: 3,
  } as SxProps<Theme>,

  title: {
    fontSize: "24px",
    fontWeight: 600,
    color: "#111827",
    lineHeight: 1.2,
  } as SxProps<Theme>,

  breadcrumb: {
    fontSize: "14px",
    color: "#6B7280",
    mt: 0.5,
    display: "flex",
    alignItems: "center",
    gap: "6px",
  } as SxProps<Theme>,

  breadcrumbGroup: {
    display: "flex",
    alignItems: "center",
  } as SxProps<Theme>,

  breadcrumbItem: {
    cursor: "default",
  } as SxProps<Theme>,

  breadcrumbSeparator: {
    color: "#9CA3AF",
  } as SxProps<Theme>,

  breadcrumbLast: {
    color: "#111827",
    fontWeight: 500,
  } as SxProps<Theme>,
};
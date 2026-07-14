"use client";

import { Box } from "@mui/material";

import { statusTagStyles } from "../styles/statusTagStyles";

type StatusTagProps = {
  status: "success" | "error" | "pending";
  label: string;
};

export default function StatusTag({
  status,
  label,
}: StatusTagProps) {
  return (
    <Box
      component="span"
      sx={[
        statusTagStyles.base,
        statusTagStyles[status],
      ]}
    >
      {label}
    </Box>
  );
}
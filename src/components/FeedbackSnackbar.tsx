"use client";

import { Snackbar, Alert } from "@mui/material";

import { feedbackSnackbarStyles } from "@/styles/feedbackSnackbarStyles";

type FeedbackSnackbarProps = {
  open: boolean;
  message: string;
  type?: "success" | "error";
  onClose: () => void;
};

export default function FeedbackSnackbar({
  open,
  message,
  type = "success",
  onClose,
}: FeedbackSnackbarProps) {
  const variantStyle =
    type === "success"
      ? feedbackSnackbarStyles.success
      : feedbackSnackbarStyles.error;

  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={onClose}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <Alert
        onClose={onClose}
        severity={type}
        variant="filled"
        role="alert"
        aria-live="assertive"
        sx={{
          ...feedbackSnackbarStyles.content,
          ...variantStyle,
          ...feedbackSnackbarStyles.alertParts,
        }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}
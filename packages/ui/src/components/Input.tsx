"use client";

import { TextField, TextFieldProps } from "@mui/material";
import { inputStyles } from "../styles/inputStyles";

type InputProps = Omit<TextFieldProps, "variant">;

export default function Input({
  sx,
  error,
  helperText,
  id,
  label,
  ...props
}: InputProps) {
  const inputId =
    id ||
    (typeof label === "string"
      ? label.toLowerCase().replace(/\s+/g, "-")
      : undefined);

  return (
    <TextField
      id={inputId}
      variant="outlined"
      fullWidth
      error={error}
      helperText={helperText}
      label={label}
      aria-invalid={error ? "true" : "false"}
      {...props}
      sx={[
        inputStyles.root,
        inputStyles.field,
        inputStyles.helperText,
        ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
      ]}
    />
  );
}
import { Button as MuiButton, type ButtonProps } from "@mui/material";

import { buttonStyles } from "../styles/buttonStyles";

type CustomButtonProps = Omit<ButtonProps, "variant" | "sx"> & {
  variantType?: "primary" | "outlined" | "ghost" | "danger" | "dangerOutlined";
  sx?: any;
};

export default function Button({
  variantType = "primary",
  children,
  sx,
  disabled = false,
  type = "button",
  ...props
}: CustomButtonProps) {
  const muiVariant: ButtonProps["variant"] =
    variantType === "primary" || variantType === "danger"
      ? "contained"
      : variantType === "outlined" || variantType === "dangerOutlined"
        ? "outlined"
        : "text";

  return (
    <MuiButton
      type={type}
      variant={muiVariant}
      disableElevation
      disabled={disabled}
      sx={[
        buttonStyles.base,
        buttonStyles[variantType],
        ...(disabled ? [buttonStyles.disabled] : []),
        ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
      ]}
      {...props}
    >
      {children}
    </MuiButton>
  );
}

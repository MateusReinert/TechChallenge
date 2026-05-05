import { Button as MuiButton, ButtonProps } from "@mui/material";
import { buttonStyles } from "@/styles/buttonStyles";

type CustomButtonProps = Omit<ButtonProps, "variant"> & {
  variantType?: "primary" | "outlined" | "ghost";
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
    variantType === "primary"
      ? "contained"
      : variantType === "outlined"
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
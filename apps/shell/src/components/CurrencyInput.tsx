"use client";

import type { ClipboardEvent } from "react";
import { TextFieldProps } from "@mui/material";

import { Input } from "@finance/ui";

type CurrencyInputProps = Omit<TextFieldProps, "type" | "onChange" | "value"> & {
  value?: string;
  onChange?: (value: string) => void;
};

function formatCurrency(value: string) {
  const onlyNumbers = value.replace(/\D/g, "");

  if (!onlyNumbers) {
    return "";
  }

  return (Number(onlyNumbers) / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export default function CurrencyInput({
  value = "",
  onChange,
  placeholder = "R$ 0,00",
  label = "Valor",
  id = "currency-input",
  ...props
}: CurrencyInputProps) {
  function handleChange(rawValue: string) {
    const formattedValue = formatCurrency(rawValue);
    onChange?.(formattedValue);
  }

  function handlePaste(event: ClipboardEvent<HTMLInputElement>) {
    event.preventDefault();

    const pastedValue = event.clipboardData.getData("text");
    handleChange(pastedValue);
  }

  return (
    <Input
      {...props}
      id={id}
      label={label}
      value={value}
      placeholder={placeholder}
      inputMode="numeric"
      onPaste={handlePaste}
      onChange={(event) => handleChange(event.target.value)}
      slotProps={{
        htmlInput: {
          "aria-label": typeof label === "string" ? label : "Valor",
        },
      }}
    />
  );
}
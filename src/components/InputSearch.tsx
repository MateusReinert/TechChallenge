"use client";

import { TextField, InputAdornment, TextFieldProps } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import { inputSearchStyles } from "@/styles/inputSearchStyles";

type InputSearchProps = Omit<TextFieldProps, "onChange"> & {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
};

export default function InputSearch({
  value = "",
  onChange,
  placeholder = "Buscar...",
  id = "input-search",
  ...props
}: InputSearchProps) {
  return (
    <TextField
      id={id}
      size="small"
      value={value}
      placeholder={placeholder}
      onChange={(event) => onChange?.(event.target.value)}
      aria-label={props["aria-label"] || "Buscar transações"}
      {...props}
      sx={inputSearchStyles.root}
      slotProps={{
        input: {
          sx: inputSearchStyles.input,
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={inputSearchStyles.icon} aria-hidden="true" />
            </InputAdornment>
          ),
        },
      }}
    />
  );
}
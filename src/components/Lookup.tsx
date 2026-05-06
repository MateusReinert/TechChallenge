"use client";

import { Box, MenuItem, TextField, Typography } from "@mui/material";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

import { lookupStyles } from "@/styles/lookupStyles";

type LookupOption = {
  label: string;
  value: string;
};

type LookupProps = {
  label: string;
  value?: string;
  placeholder?: string;
  options: LookupOption[];
  onChange?: (value: string) => void;
  error?: boolean;
  helperText?: string;
  id?: string;
};

function createIdFromLabel(label: string) {
  return label
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-");
}

export default function Lookup({
  label,
  value = "",
  placeholder = "Selecione",
  options,
  onChange,
  error = false,
  helperText,
  id,
}: LookupProps) {
  const inputId = id || `lookup-${createIdFromLabel(label)}`;
  const labelId = `${inputId}-label`;
  const helperTextId = helperText ? `${inputId}-helper-text` : undefined;

  return (
    <Box sx={lookupStyles.root}>
      <Typography
        id={labelId}
        component="label"
        htmlFor={inputId}
        sx={[lookupStyles.label, error && lookupStyles.labelError]}
      >
        {label}
      </Typography>

      <TextField
        id={inputId}
        select
        fullWidth
        error={error}
        helperText={helperText}
        value={value}
        onChange={(event) => onChange?.(event.target.value)}
        aria-labelledby={labelId}
        aria-describedby={helperTextId}
        sx={[lookupStyles.textField, lookupStyles.helperText]}
        slotProps={{
          formHelperText: {
            id: helperTextId,
          },
          select: {
            displayEmpty: true,
            IconComponent: KeyboardArrowDownRoundedIcon,
            renderValue: (selected) => {
              const selectedOption = options.find(
                (option) => option.value === selected
              );

              if (!selectedOption) {
                return (
                  <span style={lookupStyles.placeholderText}>
                    {placeholder}
                  </span>
                );
              }

              return selectedOption.label;
            },
          },
        }}
      >
        <MenuItem value="" disabled>
          {placeholder}
        </MenuItem>

        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
}
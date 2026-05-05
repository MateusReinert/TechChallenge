"use client";

import { useRef } from "react";
import {
  Box,
  IconButton,
  InputAdornment,
} from "@mui/material";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

import Input from "./Input";
import { formatDateInput } from "@/utils/dateUtils";

type DateInputProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: boolean;
  helperText?: string;
};

function formatToISO(date: string) {
  const [day, month, year] = date.split("/");

  if (!day || !month || !year || year.length !== 4) {
    return "";
  }

  return `${year}-${month}-${day}`;
}

function formatFromISO(date: string) {
  const [year, month, day] = date.split("-");

  if (!day || !month || !year) {
    return "";
  }

  return `${day}/${month}/${year}`;
}

export default function DateInput({
  label,
  value,
  onChange,
  error = false,
  helperText,
}: DateInputProps) {
  const calendarInputRef = useRef<HTMLInputElement | null>(null);

  function handleChange(rawValue: string) {
    onChange(formatDateInput(rawValue));
  }

  function handlePaste(event: React.ClipboardEvent<HTMLInputElement>) {
    event.preventDefault();
    const pastedValue = event.clipboardData.getData("text");
    handleChange(pastedValue);
  }

  function openCalendar() {
    const calendarInput = calendarInputRef.current;

    if (!calendarInput) return;

    if (typeof calendarInput.showPicker === "function") {
      calendarInput.showPicker();
    } else {
      calendarInput.click();
    }
  }

  return (
    <Box sx={{ position: "relative", width: "100%" }}>
      <Input
        label={label}
        value={value}
        placeholder="dd/mm/aaaa"
        inputMode="numeric"
        onPaste={handlePaste}
        onChange={(event) => handleChange(event.target.value)}
        error={error}
        helperText={helperText}
        slotProps={{
          htmlInput: {
            maxLength: 10,
            "aria-label": label,
          },
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  type="button"
                  edge="end"
                  aria-label="Abrir calendário"
                  onClick={openCalendar}
                >
                  <CalendarMonthOutlinedIcon fontSize="small" />
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
      />

      {/* input invisível usado só pra abrir o calendário */}
      <input
        ref={calendarInputRef}
        type="date"
        value={formatToISO(value)}
        onChange={(event) => {
          const formattedDate = formatFromISO(event.target.value);

          if (formattedDate) {
            onChange(formattedDate);
          }
        }}
        tabIndex={-1}
        aria-hidden="true"
        style={{
          position: "absolute",
          right: 8,
          top: "50%",
          transform: "translateY(-50%)",
          width: 32,
          height: 32,
          opacity: 0,
        }}
      />
    </Box>
  );
}
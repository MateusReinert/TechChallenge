"use client";

import { useState } from "react";
import type { MouseEvent } from "react";
import {
  Box,
  ButtonBase,
  IconButton,
  InputAdornment,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

import Input from "./Input";
import { filterBarStyles } from "../styles/filterBarStyles";

export type FilterBarValue = {
  search: string;
  [key: string]: string;
};

export type FilterBarOption = {
  label: string;
  value: string;
};

export type FilterBarItem = {
  key: string;
  label: string;
  ariaLabel: string;
  options: FilterBarOption[];
};

export type FilterBarProps = {
  value: FilterBarValue;
  filters: FilterBarItem[];
  searchPlaceholder?: string;
  onChange: (value: FilterBarValue) => void;
  onClear: () => void;
};

type FilterSelectProps = {
  filter: FilterBarItem;
  value: string;
  onChange: (value: string) => void;
};

function FilterSelect({ filter, value, onChange }: FilterSelectProps) {
  const [anchorElement, setAnchorElement] = useState<HTMLElement | null>(null);

  const open = Boolean(anchorElement);

  const selectedOption = filter.options.find(
    (option) => option.value === value
  );

  const displayValue = value
    ? `${filter.label}: ${selectedOption?.label}`
    : `${filter.label}: ${filter.options[0]?.label}`;
  const isActive = Boolean(value);

  function handleOpen(event: MouseEvent<HTMLElement>) {
    setAnchorElement(event.currentTarget);
  }

  function handleClose() {
    setAnchorElement(null);
  }

  function handleSelect(selectedValue: string) {
    onChange(selectedValue);
    handleClose();
  }

  return (
    <>
      <ButtonBase
        type="button"
        aria-label={filter.ariaLabel}
        aria-haspopup="menu"
        aria-expanded={open ? "true" : "false"}
        onClick={handleOpen}
        sx={{
          ...filterBarStyles.filterButton,
          ...(isActive ? filterBarStyles.filterButtonActive : {}),
        }}
      >
        <Typography
  sx={[
    filterBarStyles.filterButtonText,
    ...(isActive ? [filterBarStyles.filterButtonTextActive] : []),
  ]}
>
  {displayValue}
</Typography>

        <KeyboardArrowDownRoundedIcon
          sx={filterBarStyles.filterIcon}
          aria-hidden="true"
        />
      </ButtonBase>

      <Menu
        anchorEl={anchorElement}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            sx: filterBarStyles.menuPaper,
          },
        }}
      >
        {filter.options.map((option) => (
          <MenuItem
            key={`${filter.key}-${option.value || "all"}`}
            selected={option.value === value}
            onClick={() => handleSelect(option.value)}
            sx={filterBarStyles.menuItem}
          >
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

export default function FilterBar({
  value,
  filters,
  searchPlaceholder = "Buscar...",
  onChange,
  onClear,
}: FilterBarProps) {
  const hasActiveFilters = Object.values(value).some(Boolean);

  function updateFilter(field: string, fieldValue: string) {
    onChange({
      ...value,
      [field]: fieldValue,
    });
  }

  return (
    <Box component="section" sx={filterBarStyles.root} aria-label="Filtros">
      <Box sx={filterBarStyles.search}>
        <Input
          label=""
          placeholder={searchPlaceholder}
          value={value.search}
          onChange={(event) => updateFilter("search", event.target.value)}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchRoundedIcon fontSize="small" aria-hidden="true" />
                </InputAdornment>
              ),
              endAdornment: value.search ? (
                <InputAdornment position="end">
                  <IconButton
                    type="button"
                    size="small"
                    aria-label="Limpar busca"
                    onClick={() => updateFilter("search", "")}
                    sx={filterBarStyles.clearSearchButton}
                  >
                    <CloseRoundedIcon fontSize="small" />
                  </IconButton>
                </InputAdornment>
              ) : undefined,
            },
          }}
          sx={filterBarStyles.input}
        />
      </Box>

      {filters.map((filter) => (
        <FilterSelect
          key={filter.key}
          filter={filter}
          value={value[filter.key] || ""}
          onChange={(selectedValue) => updateFilter(filter.key, selectedValue)}
        />
      ))}

      <ButtonBase
        type="button"
        aria-label="Limpar filtros"
        disabled={!hasActiveFilters}
        onClick={onClear}
        sx={{
          ...filterBarStyles.clearButton,
          ...(!hasActiveFilters ? filterBarStyles.clearButtonDisabled : {}),
        }}
      >
        <TuneRoundedIcon sx={filterBarStyles.clearIcon} aria-hidden="true" />
        Limpar
      </ButtonBase>
    </Box>
  );
}

"use client";

import { ReactNode } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import { theme } from "@/theme/theme";

type ProvidersProps = {
  children: ReactNode;
};

export default function Providers({
  children,
}: ProvidersProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
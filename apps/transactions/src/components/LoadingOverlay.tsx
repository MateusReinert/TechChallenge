"use client";

import {
  Backdrop,
  Box,
  CircularProgress,
  Typography,
} from "@mui/material";

import { loadingOverlayStyles } from "@/styles/loadingOverlayStyles";
import { sizes } from "@/styles/tokens";

type LoadingOverlayProps = {
  open: boolean;
  message?: string;
};

export default function LoadingOverlay({
  open,
  message = "Processando...",
}: LoadingOverlayProps) {
  const descriptionId = "loading-overlay-description";

  return (
    <Backdrop
      open={open}
      sx={loadingOverlayStyles.backdrop}
      role="status"
      aria-live="polite"
      aria-busy={open}
      aria-describedby={descriptionId}
    >
      <Box sx={loadingOverlayStyles.container}>
        <CircularProgress
          size={sizes.spinner}
          thickness={4}
          sx={loadingOverlayStyles.spinner}
          aria-hidden="true"
        />

        <Typography sx={loadingOverlayStyles.title}>
          {message}
        </Typography>

        <Typography
          id={descriptionId}
          sx={loadingOverlayStyles.subtitle}
        >
          Aguarde só um instante.
        </Typography>
      </Box>
    </Backdrop>
  );
}
"use client";

import { Modal, Box, Typography } from "@mui/material";

import Button from "./Button";

import {
  confirmationModalOverlayStyle,
  confirmationModalContainerStyle,
  confirmationModalHeaderStyle,
  confirmationModalTitleStyle,
  confirmationModalDescriptionStyle,
  confirmationModalFooterStyle,
} from "@/styles/confirmationModalStyles";

type ConfirmationModalProps = {
  open: boolean;
  title: string;
  description: string;
  confirmLabel?: string;
  cancelLabel?: string;
  danger?: boolean;
  loading?: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

export default function ConfirmationModal({
  open,
  title,
  description,
  confirmLabel = "Confirmar",
  cancelLabel = "Cancelar",
  danger = false,
  loading = false,
  onClose,
  onConfirm,
}: ConfirmationModalProps) {
  const titleId = "confirmation-modal-title";
  const descriptionId = "confirmation-modal-description";

  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={confirmationModalOverlayStyle}
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
    >
      <Box
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        sx={confirmationModalContainerStyle}
      >
        <Box sx={confirmationModalHeaderStyle}>
          <Typography id={titleId} sx={confirmationModalTitleStyle}>
            {title}
          </Typography>

          <Typography
            id={descriptionId}
            sx={confirmationModalDescriptionStyle}
          >
            {description}
          </Typography>
        </Box>

        <Box sx={confirmationModalFooterStyle}>
          <Button
            variantType="ghost"
            onClick={onClose}
            disabled={loading}
            aria-label={cancelLabel}
          >
            {cancelLabel}
          </Button>

          <Button
            variantType={danger ? "danger" : "primary"}
            onClick={onConfirm}
            disabled={loading}
            aria-label={confirmLabel}
          >
            {loading ? "Processando..." : confirmLabel}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
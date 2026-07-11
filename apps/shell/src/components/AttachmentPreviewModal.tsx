"use client";

import { useEffect, useMemo } from "react";
import { Box, IconButton, Modal, Typography } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import PictureAsPdfRoundedIcon from "@mui/icons-material/PictureAsPdfRounded";
import InsertPhotoRoundedIcon from "@mui/icons-material/InsertPhotoRounded";

import Button from "@/components/Button";

import type { TransactionAttachment } from "@/types/transaction";
import { createObjectUrlFromBase64 } from "@/utils/fileUtils";
import { attachmentPreviewModalStyles } from "@/styles/attachmentPreviewModalStyles";

type AttachmentPreviewModalProps = {
  open: boolean;
  attachment?: TransactionAttachment | null;
  onClose: () => void;
};

export default function AttachmentPreviewModal({
  open,
  attachment,
  onClose,
}: AttachmentPreviewModalProps) {
  const objectUrl = useMemo(() => {
    if (!attachment) return "";

    return createObjectUrlFromBase64(
      attachment.base64,
      attachment.type
    );
  }, [attachment]);

  useEffect(() => {
    return () => {
      if (objectUrl) {
        URL.revokeObjectURL(objectUrl);
      }
    };
  }, [objectUrl]);

  if (!attachment) return null;

  const currentAttachment = attachment;
  const isImage = currentAttachment.type.startsWith("image/");
  const isPdf = currentAttachment.type === "application/pdf";

  function handleDownload() {
    const link = document.createElement("a");

    link.href = objectUrl;
    link.download = currentAttachment.name;
    link.click();
  }

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={attachmentPreviewModalStyles.overlay}>
        <Box sx={attachmentPreviewModalStyles.container}>
          <Box sx={attachmentPreviewModalStyles.header}>
            <Box sx={attachmentPreviewModalStyles.titleWrapper}>
              {isPdf ? (
                <PictureAsPdfRoundedIcon />
              ) : (
                <InsertPhotoRoundedIcon />
              )}

              <Typography sx={attachmentPreviewModalStyles.title}>
                {currentAttachment.name}
              </Typography>
            </Box>

            <IconButton
              type="button"
              onClick={onClose}
              aria-label="Fechar visualização do comprovante"
            >
              <CloseRoundedIcon />
            </IconButton>
          </Box>

          <Box sx={attachmentPreviewModalStyles.content}>
            {isImage && (
              <img
                src={objectUrl}
                alt={currentAttachment.name}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            )}

            {isPdf && (
              <iframe
                src={objectUrl}
                title={currentAttachment.name}
                style={{
                  width: "100%",
                  height: "100%",
                  border: 0,
                }}
              />
            )}
          </Box>

          <Box sx={attachmentPreviewModalStyles.footer}>
            <Button variantType="outlined" onClick={onClose}>
              Fechar
            </Button>

            <Button variantType="primary" onClick={handleDownload}>
              Baixar
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}
"use client";

import { Box, Typography } from "@mui/material";
import AttachFileRoundedIcon from "@mui/icons-material/AttachFileRounded";

import { Button } from "@finance/ui";

import { transactionDetailsStyles } from "@/styles/transactionDetailsStyles";

import type { TransactionAttachment } from "@/types/transaction";

import { createObjectUrlFromBase64 } from "@finance/ui";

type TransactionAttachmentCardProps = {
  attachment: TransactionAttachment;
  onView: (attachment: TransactionAttachment) => void;
};

function formatFileSize(size: number) {
  if (size < 1024) {
    return `${size} B`;
  }

  if (size < 1024 * 1024) {
    return `${(size / 1024).toFixed(1)} KB`;
  }

  return `${(size / (1024 * 1024)).toFixed(1)} MB`;
}

export default function TransactionAttachmentCard({
  attachment,
  onView,
}: TransactionAttachmentCardProps) {
  function handleDownload() {
    const objectUrl = createObjectUrlFromBase64(
      attachment.base64,
      attachment.type
    );

    const link = document.createElement("a");

    link.href = objectUrl;
    link.download = attachment.name;
    link.click();

    window.setTimeout(() => {
      URL.revokeObjectURL(objectUrl);
    }, 1000);
  }

  return (
    <Box sx={transactionDetailsStyles.attachmentCard}>
      <Box sx={transactionDetailsStyles.attachmentHeader}>
        <Box sx={transactionDetailsStyles.attachmentIconWrapper}>
          <AttachFileRoundedIcon sx={transactionDetailsStyles.attachmentIcon} />
        </Box>

        <Box sx={transactionDetailsStyles.attachmentInfo}>
          <Typography sx={transactionDetailsStyles.attachmentName}>
            {attachment.name}
          </Typography>

          <Typography sx={transactionDetailsStyles.attachmentMeta}>
            {formatFileSize(attachment.size)}
          </Typography>
        </Box>
      </Box>

      <Box sx={transactionDetailsStyles.attachmentActions}>
        <Button
          variantType="outlined"
          fullWidth
          onClick={() => onView(attachment)}
        >
          Visualizar
        </Button>

        <Button variantType="primary" fullWidth onClick={handleDownload}>
          Baixar
        </Button>
      </Box>
    </Box>
  );
}

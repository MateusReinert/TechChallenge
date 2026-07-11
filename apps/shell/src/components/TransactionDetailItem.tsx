"use client";

import { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

import { transactionDetailsStyles } from "@/styles/transactionDetailsStyles";

type TransactionDetailItemProps = {
  label: string;
  value?: string;
  copyable?: boolean;
};

export default function TransactionDetailItem({
  label,
  value,
  copyable = false,
}: TransactionDetailItemProps) {
  const [wasCopied, setWasCopied] = useState(false);

  const displayValue = value || "-";

  async function handleCopy() {
    if (!value) return;

    await navigator.clipboard.writeText(value);
    setWasCopied(true);

    window.setTimeout(() => {
      setWasCopied(false);
    }, 1500);
  }

  return (
    <Box sx={transactionDetailsStyles.detailsItem}>
      <Typography sx={transactionDetailsStyles.label}>
        {label}
      </Typography>

      {copyable ? (
        <Box sx={transactionDetailsStyles.valueRow}>
          <Typography sx={transactionDetailsStyles.value}>
            {displayValue}
          </Typography>

          <IconButton
            type="button"
            size="small"
            onClick={handleCopy}
            disabled={!value}
            aria-label={`Copiar ${label}`}
            sx={transactionDetailsStyles.copyButton}
          >
            <ContentCopyIcon sx={transactionDetailsStyles.copyIcon} />
          </IconButton>

          {wasCopied && (
            <Typography
              component="span"
              aria-live="polite"
              sx={transactionDetailsStyles.copyFeedback}
            >
              Copiado
            </Typography>
          )}
        </Box>
      ) : (
        <Typography sx={transactionDetailsStyles.value}>
          {displayValue}
        </Typography>
      )}
    </Box>
  );
}
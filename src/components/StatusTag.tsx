"use client";

import { Box } from "@mui/material";
import { statusTagStyles } from "@/styles/statusTagStyles";
import { TransactionStatus } from "@/types/transaction";
import { TRANSACTION_STATUS_LABEL } from "@/constants/transaction";

type StatusTagProps = {
  status: TransactionStatus;
  label?: string;
};

export default function StatusTag({ status, label }: StatusTagProps) {
  const displayLabel = label ?? TRANSACTION_STATUS_LABEL[status];

  return (
    <Box
      component="span"
      role="status"
      aria-label={`Status: ${displayLabel}`}
      sx={{
        ...statusTagStyles.base,
        ...statusTagStyles[status],
      }}
    >
      {displayLabel}
    </Box>
  );
}
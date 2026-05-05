"use client";

import type { MouseEvent } from "react";
import { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

import Button from "@/components/Button";
import StatusTag from "@/components/StatusTag";
import ConfirmationModal from "@/components/ConfirmationModal";

import { transactionDetailsStyles } from "@/styles/transactionDetailsStyles";
import { Transaction } from "@/types/transaction";
import {
  TRANSACTION_OPERATION_LABEL,
  TRANSACTION_TYPE_LABEL,
} from "@/constants/transaction";

interface TransactionDetailsProps {
  transaction?: Transaction;
  onEdit?: (transaction: Transaction) => void;
  onDelete?: (transactionId: string) => void;
}

interface DetailItemProps {
  label: string;
  value?: string;
  copyable?: boolean;
}

function formatCurrency(value: number, type: Transaction["type"]) {
  const formattedValue = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return `${type === "income" ? "+ " : "- "}${formattedValue}`;
}

function DetailItem({ label, value, copyable }: DetailItemProps) {
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
      <Typography sx={transactionDetailsStyles.label}>{label}</Typography>

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

export default function TransactionDetails({
  transaction,
  onEdit,
  onDelete,
}: TransactionDetailsProps) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  function handleConfirmDelete() {
    if (!transaction) return;

    onDelete?.(transaction.id);
    setIsDeleteModalOpen(false);
  }

  if (!transaction) {
    return (
      <Box
        component="aside"
        aria-label="Detalhes da transação"
        sx={transactionDetailsStyles.root}
      >
        <Typography sx={transactionDetailsStyles.title}>
          Detalhes da transação
        </Typography>

        <Typography sx={transactionDetailsStyles.emptyText}>
          Selecione uma transação para ver os detalhes.
        </Typography>
      </Box>
    );
  }

  const transactionTypeLabel = TRANSACTION_TYPE_LABEL[transaction.type];
  const transactionOperationLabel =
    TRANSACTION_OPERATION_LABEL[transaction.operation];

  const formattedAmount = formatCurrency(transaction.amount, transaction.type);

  return (
    <>
      <Box
        component="aside"
        aria-label={`Detalhes da transação ${transaction.description}`}
        onClick={(event: MouseEvent<HTMLDivElement>) => event.stopPropagation()}
        sx={transactionDetailsStyles.root}
      >
        <Box sx={transactionDetailsStyles.summary}>
          <Typography sx={transactionDetailsStyles.title}>
            Detalhes da transação
          </Typography>

          <Box sx={transactionDetailsStyles.content}>
            <Box sx={transactionDetailsStyles.meta}>
              <span>{transactionTypeLabel}</span>
              <span>•</span>
              <span>{transactionOperationLabel}</span>
            </Box>

            <Typography sx={transactionDetailsStyles.amount}>
              {formattedAmount}
            </Typography>

            <StatusTag status={transaction.status || "pending"} />
          </Box>
        </Box>

        <Box sx={transactionDetailsStyles.detailsList}>
          <DetailItem label="ID" value={transaction.id} copyable />
          <DetailItem label="Descrição" value={transaction.description} />
          <DetailItem label="Data" value={transaction.date} />
          <DetailItem
            label="Natureza da transação"
            value={transactionTypeLabel}
          />
          <DetailItem
            label="Tipo de transação"
            value={transactionOperationLabel}
          />
          <DetailItem label="Categoria" value={transaction.category} />
          <DetailItem label="Conta" value={transaction.account} />
          <DetailItem label="Observação" value={transaction.note} />
        </Box>

        <Box sx={transactionDetailsStyles.actions}>
          <Button
            variantType="outlined"
            fullWidth
            aria-label={`Editar transação ${transaction.description}`}
            onClick={() => onEdit?.(transaction)}
          >
            Editar
          </Button>

          <Button
            variantType="ghost"
            fullWidth
            aria-label={`Excluir transação ${transaction.description}`}
            onClick={() => setIsDeleteModalOpen(true)}
          >
            Excluir
          </Button>
        </Box>
      </Box>

      <ConfirmationModal
        open={isDeleteModalOpen}
        title="Excluir transação?"
        description="Essa ação não poderá ser desfeita. Tem certeza que deseja excluir esta transação?"
        confirmLabel="Excluir"
        cancelLabel="Cancelar"
        danger
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleConfirmDelete}
      />
    </>
  );
}
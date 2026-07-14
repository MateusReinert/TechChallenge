"use client";

import { useState, type MouseEvent } from "react";
import { Box, Typography } from "@mui/material";

import { Button, ConfirmationModal, AttachmentPreviewModal } from "@finance/ui";
import { StatusTag } from "@finance/ui";
import TransactionAttachmentCard from "@/components/TransactionAttachmentCard";
import TransactionDetailItem from "@/components/TransactionDetailItem";
import { TRANSACTION_STATUS_LABEL } from "@/constants/transaction";

import {
  TRANSACTION_OPERATION_LABEL,
  TRANSACTION_TYPE_LABEL,
} from "@/constants/transaction";

import { transactionDetailsStyles } from "@/styles/transactionDetailsStyles";

import type { Transaction, TransactionAttachment } from "@/types/transaction";

type TransactionDetailsProps = {
  transaction?: Transaction;
  onEdit?: (transaction: Transaction) => void;
  onDelete?: (transactionId: string) => void;
};

function formatCurrency(value: number, type: Transaction["type"]) {
  const formattedValue = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return `${type === "income" ? "+ " : "- "}${formattedValue}`;
}

export default function TransactionDetails({
  transaction,
  onEdit,
  onDelete,
}: TransactionDetailsProps) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [selectedAttachment, setSelectedAttachment] =
    useState<TransactionAttachment | null>(null);

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

  const attachments = transaction.attachments || [];

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

            <StatusTag
              status={transaction.status ?? "pending"}
              label={TRANSACTION_STATUS_LABEL[transaction.status ?? "pending"]}
            />
          </Box>
        </Box>

        <Box sx={transactionDetailsStyles.detailsList}>
          <TransactionDetailItem label="ID" value={transaction.id} copyable />

          <TransactionDetailItem
            label="Descrição"
            value={transaction.description}
          />

          <TransactionDetailItem label="Data" value={transaction.date} />

          <TransactionDetailItem
            label="Natureza da transação"
            value={transactionTypeLabel}
          />

          <TransactionDetailItem
            label="Tipo de transação"
            value={transactionOperationLabel}
          />

          <TransactionDetailItem
            label="Categoria"
            value={transaction.category}
          />

          <TransactionDetailItem label="Conta" value={transaction.account} />

          <TransactionDetailItem label="Observação" value={transaction.note} />
        </Box>

        {attachments.length > 0 && (
          <Box sx={transactionDetailsStyles.attachmentsSection}>
            <Typography sx={transactionDetailsStyles.attachmentTitle}>
              Comprovantes
            </Typography>

            {attachments.map((attachment) => (
              <TransactionAttachmentCard
                key={attachment.id}
                attachment={attachment}
                onView={setSelectedAttachment}
              />
            ))}
          </Box>
        )}

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
            variantType="dangerOutlined"
            fullWidth
            aria-label={`Excluir transação ${transaction.description}`}
            onClick={() => setIsDeleteModalOpen(true)}
          >
            Excluir
          </Button>
        </Box>
      </Box>

      <AttachmentPreviewModal
        open={Boolean(selectedAttachment)}
        attachment={selectedAttachment}
        onClose={() => setSelectedAttachment(null)}
      />

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

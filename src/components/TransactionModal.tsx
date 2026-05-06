"use client";

import { useState } from "react";
import { Box, Modal, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import Input from "./Input";
import Lookup from "./Lookup";
import CurrencyInput from "./CurrencyInput";
import DateInput from "./DateInput";
import Button from "./Button";
import ConfirmationModal from "./ConfirmationModal";

import { Transaction } from "@/types/transaction";
import { isValidDateBR } from "@/utils/dateUtils";
import {
  TRANSACTION_MODAL_ACCOUNT_OPTIONS,
  TRANSACTION_MODAL_CATEGORY_OPTIONS,
  TRANSACTION_MODAL_OPERATION_OPTIONS,
  TRANSACTION_MODAL_TYPE_OPTIONS,
} from "@/constants/transaction";

import {
  modalActionsGroupStyle,
  modalCloseButtonStyle,
  modalContainerStyle,
  modalContentStyle,
  modalDescriptionStyle,
  modalFooterEditingStyle,
  modalFooterStyle,
  modalFormGridStyle,
  modalHeaderStyle,
  modalOverlayStyle,
  modalTitleStyle,
} from "@/styles/transactionModalStyles";

type TransactionModalProps = {
  open: boolean;
  onClose: () => void;
  transaction?: Transaction | null;
  onSave?: (transaction: Transaction) => void;
  onDelete?: (transactionId: string) => void;
};

type TransactionForm = {
  description: string;
  amount: string;
  date: string;
  type: string;
  operation: string;
  category: string;
  account: string;
  note: string;
};

type TransactionFormErrors = Partial<Record<keyof TransactionForm, string>>;

type TransactionModalContentProps = {
  initialData: TransactionForm;
  transaction?: Transaction | null;
  isEditing: boolean;
  onClose: () => void;
  onSave?: (transaction: Transaction) => void;
  onDelete?: (transactionId: string) => void;
};

const initialForm: TransactionForm = {
  description: "",
  amount: "",
  date: "",
  type: "",
  operation: "",
  category: "",
  account: "",
  note: "",
};

function formatCurrency(value: number) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function parseCurrency(value: string) {
  const onlyNumbers = value.replace(/\D/g, "");

  if (!onlyNumbers) return 0;

  return Number(onlyNumbers) / 100;
}

function getInitialForm(transaction?: Transaction | null): TransactionForm {
  if (!transaction) return initialForm;

  return {
    description: transaction.description,
    amount: formatCurrency(transaction.amount),
    date: transaction.date,
    type: transaction.type,
    operation: transaction.operation,
    category: transaction.category,
    account: transaction.account,
    note: transaction.note || "",
  };
}

function validateForm(form: TransactionForm) {
  const errors: TransactionFormErrors = {};

  if (!form.description.trim()) {
    errors.description = "Informe a descrição.";
  }

  if (parseCurrency(form.amount) <= 0) {
    errors.amount = "Informe um valor maior que zero.";
  }

  if (!form.date.trim()) {
    errors.date = "Informe a data.";
  } else if (!isValidDateBR(form.date)) {
    errors.date = "Informe uma data válida.";
  }

  if (!form.type.trim()) {
    errors.type = "Selecione a natureza.";
  }

  if (!form.operation.trim()) {
    errors.operation = "Selecione o tipo de transação.";
  }

  if (!form.category.trim()) {
    errors.category = "Selecione a categoria.";
  }

  if (!form.account.trim()) {
    errors.account = "Selecione a conta.";
  }

  return errors;
}

function TransactionModalContent({
  initialData,
  transaction,
  isEditing,
  onClose,
  onSave,
  onDelete,
}: TransactionModalContentProps) {
  const [form, setForm] = useState<TransactionForm>(initialData);
  const [errors, setErrors] = useState<TransactionFormErrors>({});
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  function updateForm(field: keyof TransactionForm, value: string) {
    setForm((currentForm) => ({
      ...currentForm,
      [field]: value,
    }));

    setErrors((currentErrors) => ({
      ...currentErrors,
      [field]: undefined,
    }));
  }

  function handleSave() {
    const validationErrors = validateForm(form);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const savedTransaction: Transaction = {
      id: transaction?.id || "",
      description: form.description.trim(),
      amount: parseCurrency(form.amount),
      date: form.date,
      type: form.type as Transaction["type"],
      operation: form.operation as Transaction["operation"],
      category: form.category,
      account: form.account,
      status: transaction?.status || "success",
      note: form.note.trim(),
    };

    onSave?.(savedTransaction);
  }

  function confirmDelete() {
    if (!transaction) return;

    onDelete?.(transaction.id);
    setIsDeleteModalOpen(false);
  }

  return (
    <>
      <Box
        sx={modalContainerStyle}
        role="dialog"
        aria-modal="true"
        aria-labelledby="transaction-modal-title"
        aria-describedby="transaction-modal-description"
      >
        <Box sx={modalHeaderStyle}>
          <Box>
            <Typography id="transaction-modal-title" sx={modalTitleStyle}>
              {isEditing ? "Editar transação" : "Nova transação"}
            </Typography>

            <Typography
              id="transaction-modal-description"
              sx={modalDescriptionStyle}
            >
              {isEditing
                ? "Altere os dados abaixo para atualizar a movimentação."
                : "Preencha os dados abaixo para cadastrar uma nova movimentação."}
            </Typography>
          </Box>

          <IconButton
            type="button"
            onClick={onClose}
            sx={modalCloseButtonStyle}
            aria-label="Fechar modal de transação"
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>

        <Box
          component="form"
          noValidate
          sx={modalContentStyle}
          onSubmit={(event) => {
            event.preventDefault();
            handleSave();
          }}
        >
          <Input
            label="Descrição"
            placeholder="Ex: Compra no mercado"
            value={form.description}
            error={Boolean(errors.description)}
            helperText={errors.description}
            onChange={(event) => updateForm("description", event.target.value)}
          />

          <Box sx={modalFormGridStyle}>
            <CurrencyInput
              label="Valor"
              value={form.amount}
              onChange={(value) => updateForm("amount", value)}
              error={Boolean(errors.amount)}
              helperText={errors.amount}
            />

            <DateInput
              label="Data"
              value={form.date}
              onChange={(value) => updateForm("date", value)}
              error={Boolean(errors.date)}
              helperText={errors.date}
            />
          </Box>

          <Box sx={modalFormGridStyle}>
            <Lookup
              label="Natureza"
              value={form.type}
              onChange={(value) => updateForm("type", value)}
              error={Boolean(errors.type)}
              helperText={errors.type}
              options={TRANSACTION_MODAL_TYPE_OPTIONS}
            />

            <Lookup
              label="Tipo de transação"
              value={form.operation}
              onChange={(value) => updateForm("operation", value)}
              error={Boolean(errors.operation)}
              helperText={errors.operation}
              options={TRANSACTION_MODAL_OPERATION_OPTIONS}
            />
          </Box>

          <Box sx={modalFormGridStyle}>
            <Lookup
              label="Categoria"
              value={form.category}
              onChange={(value) => updateForm("category", value)}
              error={Boolean(errors.category)}
              helperText={errors.category}
              options={TRANSACTION_MODAL_CATEGORY_OPTIONS}
            />

            <Lookup
              label="Conta"
              value={form.account}
              onChange={(value) => updateForm("account", value)}
              error={Boolean(errors.account)}
              helperText={errors.account}
              options={TRANSACTION_MODAL_ACCOUNT_OPTIONS}
            />
          </Box>

          <Input
            label="Observação"
            value={form.note}
            onChange={(event) => updateForm("note", event.target.value)}
          />
        </Box>

        <Box sx={isEditing ? modalFooterEditingStyle : modalFooterStyle}>
          {isEditing && (
            <Button
              variantType="dangerOutlined"
              onClick={() => setIsDeleteModalOpen(true)}
            >
              Excluir
            </Button>
          )}

          <Box sx={modalActionsGroupStyle}>
            <Button variantType="outlined" onClick={onClose}>
              Cancelar
            </Button>

            <Button variantType="primary" onClick={handleSave}>
              {isEditing ? "Salvar alterações" : "Salvar transação"}
            </Button>
          </Box>
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
        onConfirm={confirmDelete}
      />
    </>
  );
}

export function TransactionModal({
  open,
  onClose,
  transaction,
  onSave,
  onDelete,
}: TransactionModalProps) {
  const isEditing = Boolean(transaction);
  const initialData = getInitialForm(transaction);

  return (
    <Modal open={open} onClose={onClose} sx={modalOverlayStyle}>
      <TransactionModalContent
        key={transaction?.id || "new"}
        initialData={initialData}
        transaction={transaction}
        isEditing={isEditing}
        onClose={onClose}
        onSave={onSave}
        onDelete={onDelete}
      />
    </Modal>
  );
}
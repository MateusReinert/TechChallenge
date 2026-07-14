import type { Transaction, TransactionAttachment } from "@/types/transaction";

import { isValidDateBR } from "@finance/ui";

export type TransactionForm = {
  description: string;
  amount: string;
  date: string;
  type: string;
  operation: string;
  category: string;
  account: string;
  note: string;
  files: File[];
  existingAttachments: TransactionAttachment[];
};

export type TransactionFormField = Exclude<
  keyof TransactionForm,
  "files" | "existingAttachments"
>;

export type TransactionFormErrors = Partial<
  Record<TransactionFormField, string>
>;

export function formatTransactionCurrency(value: number) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export function parseTransactionCurrency(value: string) {
  const onlyNumbers = value.replace(/\D/g, "");

  if (!onlyNumbers) return 0;

  return Number(onlyNumbers) / 100;
}

export function getInitialTransactionForm(
  transaction?: Transaction | null
): TransactionForm {
  if (!transaction) {
    return {
      description: "",
      amount: "",
      date: "",
      type: "",
      operation: "",
      category: "",
      account: "",
      note: "",
      files: [],
      existingAttachments: [],
    };
  }

  return {
    description: transaction.description,
    amount: formatTransactionCurrency(transaction.amount),
    date: transaction.date,
    type: transaction.type,
    operation: transaction.operation,
    category: transaction.category,
    account: transaction.account,
    note: transaction.note || "",
    files: [],
    existingAttachments: transaction.attachments || [],
  };
}

export function validateTransactionForm(
  form: TransactionForm
): TransactionFormErrors {
  const errors: TransactionFormErrors = {};

  if (!form.description.trim()) {
    errors.description = "Informe a descrição.";
  }

  if (parseTransactionCurrency(form.amount) <= 0) {
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

"use server";

import { revalidatePath } from "next/cache";

import { Transaction } from "@/types/transaction";
import {
  createTransaction,
  updateTransaction,
  deleteTransaction,
} from "@/services/transactionService";

import {
  validateTransactionAttachments,
} from "@finance/shared";

function validateTransaction(transaction: Transaction) {
  if (!transaction.description?.trim()) {
    throw new Error("Informe a descrição da transação.");
  }

  if (!transaction.amount || transaction.amount <= 0) {
    throw new Error("Informe um valor válido para a transação.");
  }

  if (!transaction.date?.trim()) {
    throw new Error("Informe a data da transação.");
  }

  if (!transaction.type) {
    throw new Error("Selecione a natureza da transação.");
  }

  if (!transaction.operation) {
    throw new Error("Selecione o tipo da transação.");
  }

  if (!transaction.category?.trim()) {
    throw new Error("Selecione a categoria da transação.");
  }

  if (!transaction.account?.trim()) {
    throw new Error("Selecione a conta da transação.");
  }

  const attachmentValidationError =
    validateTransactionAttachments(
      transaction.attachments
    );
  
  if (attachmentValidationError) {
    throw new Error(attachmentValidationError);
  }
}

export async function saveTransactionAction(
  transaction: Transaction
): Promise<Transaction> {
  try {
    validateTransaction(transaction);

    const transactionToSave: Transaction = {
      ...transaction,
      id: transaction.id || crypto.randomUUID(),
    };

    const savedTransaction = transaction.id
      ? await updateTransaction(transactionToSave)
      : await createTransaction(transactionToSave);

    revalidatePath("/dashboard");
    revalidatePath("/transactions");

    return savedTransaction;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }

    throw new Error("Não foi possível salvar a transação.");
  }
}

export async function deleteTransactionAction(
  transactionId: string
): Promise<void> {
  try {
    if (!transactionId) {
      throw new Error("Transação não encontrada para exclusão.");
    }

    await deleteTransaction(transactionId);

    revalidatePath("/dashboard");
    revalidatePath("/transactions");
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }

    throw new Error("Não foi possível excluir a transação.");
  }
}
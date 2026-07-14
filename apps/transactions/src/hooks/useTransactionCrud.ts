import type { Dispatch, SetStateAction } from "react";

import {
  deleteTransactionAction,
  saveTransactionAction,
} from "@/actions/transactionActions";

import { useAppDispatch } from "@/store/hooks";

import {
  addTransaction,
  removeTransaction,
  updateTransaction,
} from "@/store/features/transactions/transactionsSlice";

import type { Transaction } from "@/types/transaction";

type FeedbackType = "success" | "error";

type UseTransactionCrudParams = {
  transactions: Transaction[];
  isLoading: boolean;
  startTransition: (callback: () => void | Promise<void>) => void;
  runWithLoading: (
    message: string,
    action: () => Promise<void>
  ) => Promise<void>;
  showFeedback: (message: string, type?: FeedbackType) => void;
  setSelectedTransaction: Dispatch<SetStateAction<Transaction | null>>;
  clearSelectedTransactionImmediately: () => void;
  closeTransactionModalImmediately: () => void;
  refresh: () => void;
  onTransactionCreated?: (transaction: Transaction) => void;
  onTransactionDeleted?: (transactionId: string) => void;
};

function getErrorMessage(error: unknown, fallbackMessage: string) {
  if (error instanceof Error && error.message) {
    return error.message;
  }

  return fallbackMessage;
}

export function useTransactionCrud({
  transactions,
  isLoading,
  startTransition,
  runWithLoading,
  showFeedback,
  setSelectedTransaction,
  clearSelectedTransactionImmediately,
  closeTransactionModalImmediately,
  refresh,
  onTransactionCreated,
  onTransactionDeleted,
}: UseTransactionCrudParams) {
  const dispatch = useAppDispatch();

  function handleSaveTransaction(savedTransaction: Transaction) {
    if (isLoading) return;

    const isEditing = Boolean(savedTransaction.id);

    const loadingMessage = isEditing
      ? "Atualizando transação..."
      : "Criando transação...";

    const errorMessage = isEditing
      ? "Não foi possível atualizar a transação. Tente novamente."
      : "Não foi possível criar a transação. Tente novamente.";

    startTransition(async () => {
      await runWithLoading(loadingMessage, async () => {
        try {
          const saved = await saveTransactionAction(savedTransaction);

          const transactionExists = transactions.some(
            (transaction) => transaction.id === saved.id
          );

          if (transactionExists) {
            dispatch(updateTransaction(saved));
            showFeedback("Transação atualizada com sucesso.");
          } else {
            dispatch(addTransaction(saved));
            onTransactionCreated?.(saved);
            showFeedback("Transação criada com sucesso.");
          }

          setSelectedTransaction(saved);
          closeTransactionModalImmediately();
          refresh();
        } catch (error) {
          showFeedback(getErrorMessage(error, errorMessage), "error");
        }
      });
    });
  }

  function handleDeleteTransaction(transactionId: string) {
    if (isLoading) return;

    if (!transactionId) {
      showFeedback("Não foi possível identificar a transação.", "error");

      return;
    }

    startTransition(async () => {
      await runWithLoading("Excluindo transação...", async () => {
        try {
          await deleteTransactionAction(transactionId);

          dispatch(removeTransaction(transactionId));

          clearSelectedTransactionImmediately();
          closeTransactionModalImmediately();
          onTransactionDeleted?.(transactionId);

          showFeedback("Transação excluída com sucesso.");

          refresh();
        } catch (error) {
          showFeedback(
            getErrorMessage(
              error,
              "Não foi possível excluir a transação. Tente novamente."
            ),
            "error"
          );
        }
      });
    });
  }

  return {
    handleSaveTransaction,
    handleDeleteTransaction,
  };
}

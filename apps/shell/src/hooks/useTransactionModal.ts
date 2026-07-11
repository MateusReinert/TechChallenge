import { useState } from "react";

import { Transaction } from "@/types/transaction";

export function useTransactionModal(isLoading: boolean) {
  const [selectedTransaction, setSelectedTransaction] =
    useState<Transaction | null>(null);

  const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false);

  function selectTransaction(transaction: Transaction | null) {
    if (isLoading) return;

    setSelectedTransaction(transaction);
  }

  function clearSelectedTransaction() {
    if (isLoading) return;

    setSelectedTransaction(null);
  }

  function openNewTransactionModal() {
    if (isLoading) return;

    setSelectedTransaction(null);
    setIsTransactionModalOpen(true);
  }

  function openEditTransactionModal(transaction: Transaction) {
    if (isLoading) return;

    setSelectedTransaction(transaction);
    setIsTransactionModalOpen(true);
  }

  function closeTransactionModal() {
    if (isLoading) return;

    setIsTransactionModalOpen(false);
  }

  function closeTransactionModalImmediately() {
    setIsTransactionModalOpen(false);
  }

  function clearSelectedTransactionImmediately() {
    setSelectedTransaction(null);
  }

  return {
    selectedTransaction,
    setSelectedTransaction,
    isTransactionModalOpen,
    selectTransaction,
    clearSelectedTransaction,
    openNewTransactionModal,
    openEditTransactionModal,
    closeTransactionModal,
    closeTransactionModalImmediately,
    clearSelectedTransactionImmediately,
  };
}
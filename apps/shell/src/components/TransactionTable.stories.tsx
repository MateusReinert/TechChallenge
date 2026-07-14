import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import TransactionTable, {
  SortDirection,
  TransactionSortField,
} from "./TransactionTable";

import { Transaction } from "@/types/transaction";

const mockTransactions: Transaction[] = [
  {
    id: "1",
    description: "Salário mensal",
    category: "Salário",
    type: "income",
    operation: "deposit",
    account: "Conta corrente",
    amount: 5200,
    date: "01/05/2026",
    status: "success",
  },
  {
    id: "2",
    description: "Mercado",
    category: "Alimentação",
    type: "expense",
    operation: "purchase",
    account: "Cartão de crédito",
    amount: 348.9,
    date: "03/05/2026",
    status: "pending",
  },
  {
    id: "3",
    description: "Netflix",
    category: "Assinatura",
    type: "expense",
    operation: "payment",
    account: "Cartão de crédito",
    amount: 39.9,
    date: "05/05/2026",
    status: "success",
  },
  {
    id: "4",
    description: "Freelance",
    category: "Renda extra",
    type: "income",
    operation: "receipt",
    account: "Conta digital",
    amount: 850,
    date: "07/05/2026",
    status: "error",
  },
];

const meta = {
  title: "Components/TransactionTable",
  component: TransactionTable,
  tags: ["autodocs"],
} satisfies Meta<typeof TransactionTable>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    transactions: mockTransactions,
  },
};

export const WithSelectedTransaction: Story = {
  args: {
    transactions: mockTransactions,
    selectedTransactionId: "2",
  },
};

export const Empty: Story = {
  args: {
    transactions: [],
    emptyTitle: "Nenhuma transação cadastrada",
    emptyDescription:
      "Cadastre sua primeira transação para começar a acompanhar seu financeiro.",
    emptyActionLabel: "Nova transação",
    onEmptyAction: () => alert("Nova transação"),
  },
};

export const Interactive: Story = {
  render: () => {
    const [selectedTransactionId, setSelectedTransactionId] =
      React.useState<string>();

    const [sortField, setSortField] =
      React.useState<TransactionSortField | null>(null);

    const [sortDirection, setSortDirection] =
      React.useState<SortDirection>(null);

    function handleSort(field: TransactionSortField) {
      if (sortField !== field) {
        setSortField(field);
        setSortDirection("asc");
        return;
      }

      if (sortDirection === "asc") {
        setSortDirection("desc");
        return;
      }

      setSortField(null);
      setSortDirection(null);
    }

    const sortedTransactions = [...mockTransactions].sort((a, b) => {
      if (!sortField || !sortDirection) return 0;

      const firstValue = a[sortField] ?? "";
      const secondValue = b[sortField] ?? "";

      if (firstValue < secondValue) {
        return sortDirection === "asc" ? -1 : 1;
      }

      if (firstValue > secondValue) {
        return sortDirection === "asc" ? 1 : -1;
      }

      return 0;
    });

    return (
      <TransactionTable
        transactions={sortedTransactions}
        selectedTransactionId={selectedTransactionId}
        sortField={sortField}
        sortDirection={sortDirection}
        onSort={handleSort}
        onSelectTransaction={(transaction) =>
          setSelectedTransactionId(transaction.id)
        }
      />
    );
  },
};

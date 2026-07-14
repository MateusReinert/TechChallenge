import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box, Typography } from "@mui/material";

import TransactionDetails from "./TransactionDetails";

import { Transaction } from "@/types/transaction";

const mockTransactions: Transaction[] = [
  {
    id: "TRX-001",
    description: "Salário mensal",
    category: "Salário",
    type: "income",
    operation: "deposit",
    account: "Conta corrente",
    amount: 5200,
    date: "01/05/2026",
    status: "success",
    note: "Pagamento referente ao mês de maio.",
  },
  {
    id: "TRX-002",
    description: "Compra no mercado",
    category: "Alimentação",
    type: "expense",
    operation: "purchase",
    account: "Cartão de crédito",
    amount: 348.9,
    date: "03/05/2026",
    status: "pending",
    note: "Compra mensal do mercado.",
  },
  {
    id: "TRX-003",
    description: "Netflix",
    category: "Assinatura",
    type: "expense",
    operation: "payment",
    account: "Cartão de crédito",
    amount: 39.9,
    date: "05/05/2026",
    status: "success",
    note: "Assinatura mensal.",
  },
];

const meta = {
  title: "Components/TransactionDetails",
  component: TransactionDetails,
  tags: ["autodocs"],
} satisfies Meta<typeof TransactionDetails>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Interactive: Story = {
  render: () => {
    const [selectedTransaction, setSelectedTransaction] = React.useState<
      Transaction | undefined
    >();

    return (
      <Box
        sx={{
          minHeight: 760,
          p: 3,
          bgcolor: "#F9FAFB",
          display: "grid",
          gridTemplateColumns: "1fr 320px",
          gap: 3,
        }}
      >
        <Box
          sx={{
            bgcolor: "#FFFFFF",
            border: "1px solid #E5E7EB",
            borderRadius: "16px",
            p: 3,
          }}
        >
          <Typography
            sx={{
              fontSize: 20,
              fontWeight: 700,
              color: "#111827",
              mb: 2,
            }}
          >
            Transações
          </Typography>

          <Box sx={{ display: "grid", gap: 1.5 }}>
            {mockTransactions.map((transaction) => {
              const isSelected = selectedTransaction?.id === transaction.id;

              const formattedAmount = transaction.amount.toLocaleString(
                "pt-BR",
                {
                  style: "currency",
                  currency: "BRL",
                }
              );

              return (
                <Box
                  key={transaction.id}
                  onClick={() => setSelectedTransaction(transaction)}
                  sx={{
                    p: 2,
                    border: "1px solid",
                    borderColor: isSelected ? "#315CC3" : "#E5E7EB",
                    borderRadius: "12px",
                    cursor: "pointer",
                    bgcolor: isSelected ? "#EEF4FF" : "#FFFFFF",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 14,
                      fontWeight: 700,
                      color: "#111827",
                    }}
                  >
                    {transaction.description}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 13,
                      color: "#6B7280",
                      mt: 0.5,
                    }}
                  >
                    {transaction.category} • {transaction.date}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 14,
                      fontWeight: 700,
                      color:
                        transaction.type === "income" ? "#285A3F" : "#8F2F2F",
                      mt: 1,
                    }}
                  >
                    {transaction.type === "income" ? "+ " : "- "}
                    {formattedAmount}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Box>

        <TransactionDetails
          transaction={selectedTransaction}
          onEdit={() => alert("Editar transação")}
          onDelete={() => {
            alert("Excluir transação");
            setSelectedTransaction(undefined);
          }}
        />
      </Box>
    );
  },
};

export const Empty: Story = {
  args: {
    transaction: undefined,
  },
};

import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box } from "@mui/material";

import { TransactionModal } from "./TransactionModal";
import Button from "./Button";

import { Transaction } from "@/types/transaction";

const mockTransaction: Transaction = {
  id: "1",
  description: "Compra no mercado",
  category: "Alimentação",
  type: "expense",
  operation: "purchase",
  account: "Cartão de crédito",
  amount: 348.9,
  date: "03/05/2026",
  status: "success",
  note: "Compra mensal do mercado.",
};

const meta = {
  title: "Components/TransactionModal",
  component: TransactionModal,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Box sx={{ minHeight: 220 }}>
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof TransactionModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const NewTransaction: Story = {
  args: {
    open: false,
    onClose: () => {},
  },
  render: (args) => {
    const [open, setOpen] = React.useState(false);

    return (
      <>
        <Button variantType="primary" onClick={() => setOpen(true)}>
          Nova transação
        </Button>

        <TransactionModal
          {...args}
          open={open}
          onClose={() => setOpen(false)}
          onSave={() => setOpen(false)}
        />
      </>
    );
  },
};

export const EditTransaction: Story = {
  args: {
    open: false,
    transaction: mockTransaction,
    onClose: () => {},
  },
  render: (args) => {
    const [open, setOpen] = React.useState(false);

    return (
      <>
        <Button variantType="outlined" onClick={() => setOpen(true)}>
          Editar transação
        </Button>

        <TransactionModal
          {...args}
          open={open}
          transaction={mockTransaction}
          onClose={() => setOpen(false)}
          onSave={() => setOpen(false)}
          onDelete={() => setOpen(false)}
        />
      </>
    );
  },
};
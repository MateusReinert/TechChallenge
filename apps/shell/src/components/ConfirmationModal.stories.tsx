import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box } from "@mui/material";

import { Button, ConfirmationModal } from "@finance/ui";

const meta = {
  title: "Components/ConfirmationModal",
  component: ConfirmationModal,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Box sx={{ minHeight: 220 }}>
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof ConfirmationModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: false,
    title: "Deseja continuar?",
    description: "Confirme a ação para prosseguir.",
    onClose: () => {},
    onConfirm: () => {},
  },
  render: (args) => {
    const [open, setOpen] = React.useState(false);

    return (
      <>
        <Button variantType="primary" onClick={() => setOpen(true)}>
          Abrir confirmação
        </Button>

        <ConfirmationModal
          {...args}
          open={open}
          onClose={() => setOpen(false)}
          onConfirm={() => setOpen(false)}
        />
      </>
    );
  },
};

export const Danger: Story = {
  args: {
    open: false,
    title: "Excluir transação?",
    description: "Essa ação não poderá ser desfeita.",
    confirmLabel: "Excluir",
    cancelLabel: "Cancelar",
    danger: true,
    onClose: () => {},
    onConfirm: () => {},
  },
  render: (args) => {
    const [open, setOpen] = React.useState(false);

    return (
      <>
        <Button variantType="outlined" onClick={() => setOpen(true)}>
          Excluir item
        </Button>

        <ConfirmationModal
          {...args}
          open={open}
          onClose={() => setOpen(false)}
          onConfirm={() => setOpen(false)}
        />
      </>
    );
  },
};

export const Loading: Story = {
  args: {
    open: false,
    title: "Salvando alterações",
    description: "Aguarde a conclusão do processo.",
    loading: true,
    onClose: () => {},
    onConfirm: () => {},
  },
  render: (args) => {
    const [open, setOpen] = React.useState(false);

    return (
      <>
        <Button variantType="primary" onClick={() => setOpen(true)}>
          Abrir loading
        </Button>

        <ConfirmationModal
          {...args}
          open={open}
          onClose={() => setOpen(false)}
          onConfirm={() => setOpen(false)}
        />
      </>
    );
  },
};

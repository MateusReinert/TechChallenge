import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box } from "@mui/material";

import FeedbackSnackbar from "./FeedbackSnackbar";

const meta = {
  title: "Components/FeedbackSnackbar",
  component: FeedbackSnackbar,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Box sx={{ minHeight: 280, position: "relative" }}>
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof FeedbackSnackbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    open: true,
    type: "success",
    message: "Transação salva com sucesso!",
    onClose: () => {},
  },
};

export const Error: Story = {
  args: {
    open: true,
    type: "error",
    message: "Erro ao salvar transação.",
    onClose: () => {},
  },
};

export const LongMessage: Story = {
  args: {
    open: true,
    type: "success",
    message:
      "Transação atualizada com sucesso e sincronizada com os dados atuais.",
    onClose: () => {},
  },
};

export const Closed: Story = {
  args: {
    open: false,
    type: "success",
    message: "Mensagem oculta",
    onClose: () => {},
  },
};
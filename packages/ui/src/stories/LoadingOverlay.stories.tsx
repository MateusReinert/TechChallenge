import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box } from "@mui/material";

import { LoadingOverlay } from "@finance/ui";

const meta = {
  title: "Components/LoadingOverlay",
  component: LoadingOverlay,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Box sx={{ minHeight: 420, position: "relative" }}>
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof LoadingOverlay>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: true,
    message: "Processando...",
  },
};

export const Saving: Story = {
  args: {
    open: true,
    message: "Salvando transação...",
  },
};

export const Deleting: Story = {
  args: {
    open: true,
    message: "Excluindo registro...",
  },
};
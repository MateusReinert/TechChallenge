import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box } from "@mui/material";

import StatusTag from "./StatusTag";

const meta = {
  title: "Components/StatusTag",
  component: StatusTag,
  tags: ["autodocs"],
  argTypes: {
    status: {
      control: "select",
      options: ["success", "pending", "error"],
    },
    label: {
      control: "text",
    },
  },
} satisfies Meta<typeof StatusTag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    status: "success",
  },
};

export const Pending: Story = {
  args: {
    status: "pending",
  },
};

export const Error: Story = {
  args: {
    status: "error",
  },
};

export const CustomLabel: Story = {
  args: {
    status: "success",
    label: "Finalizada",
  },
};

export const AllStatuses: Story = {
  args: {
    status: "success",
  },
  render: () => (
    <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
      <StatusTag status="success" />
      <StatusTag status="pending" />
      <StatusTag status="error" />
    </Box>
  ),
};
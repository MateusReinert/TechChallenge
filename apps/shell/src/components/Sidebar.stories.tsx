import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box } from "@mui/material";

import Sidebar from "./Sidebar";

const meta = {
  title: "Components/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Box sx={{ height: "100vh", width: 280 }}>
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof Sidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Interactive: Story = {
  render: () => {
    const [currentPath, setCurrentPath] = React.useState("/dashboard");

    return (
      <Sidebar
        currentPath={currentPath}
        onNavigate={setCurrentPath}
      />
    );
  },
};

export const DashboardActive: Story = {
  args: {
    currentPath: "/dashboard",
  },
};

export const TransactionsActive: Story = {
  args: {
    currentPath: "/transactions",
  },
};

export const NoActiveItem: Story = {
  args: {
    currentPath: "/",
  },
};
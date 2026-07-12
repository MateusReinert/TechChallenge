import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import React from "react";

import Sidebar from "@/components/Sidebar";

const meta = {
  title: "Components/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    currentZone: "shell",
  },
} satisfies Meta<typeof Sidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Interactive: Story = {
  render: (args) => {
    const [currentPath, setCurrentPath] = React.useState("/dashboard");

    return (
      <Sidebar
        {...args}
        currentPath={currentPath}
        onNavigate={setCurrentPath}
      />
    );
  },
};
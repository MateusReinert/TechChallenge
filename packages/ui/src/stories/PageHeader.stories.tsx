import type { Meta, StoryObj } from "@storybook/react-vite";

import PageHeader from "../components/PageHeader";

const meta = {
  title: "Components/PageHeader",
  component: PageHeader,
  tags: ["autodocs"],
} satisfies Meta<typeof PageHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Dashboard: Story = {
  args: {
    title: "Dashboard",
    breadcrumb: ["Home", "Dashboard"],
  },
};

export const Transactions: Story = {
  args: {
    title: "Transações",
    breadcrumb: ["Home", "Transações"],
  },
};

export const LongPath: Story = {
  args: {
    title: "Detalhes da transação",
    breadcrumb: ["Home", "Financeiro", "Transações", "Detalhes"],
  },
};

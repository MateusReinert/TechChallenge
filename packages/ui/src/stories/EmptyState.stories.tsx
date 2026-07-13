import type { Meta, StoryObj } from "@storybook/react-vite";
import SearchOffOutlinedIcon from "@mui/icons-material/SearchOffOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";

import { EmptyState } from "@finance/ui";

const meta = {
  title: "Components/EmptyState",
  component: EmptyState,
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
    },
    description: {
      control: "text",
    },
    actionLabel: {
      control: "text",
    },
  },
} satisfies Meta<typeof EmptyState>;

export default meta;

type Story = StoryObj<typeof meta>;

export const NoTransactions: Story = {
  args: {
    title: "Nenhuma transação encontrada",
    description:
      "Cadastre sua primeira transação para começar a acompanhar sua movimentação financeira.",
    actionLabel: "Nova transação",
    onAction: () => alert("Nova transação"),
  },
};

export const NoSearchResults: Story = {
  args: {
    title: "Nenhum resultado encontrado",
    description:
      "Não encontramos transações com os filtros informados. Tente buscar por outro termo.",
    icon: <SearchOffOutlinedIcon sx={{ fontSize: 28, color: "#315CC3" }} />,
  },
};

export const WithoutAction: Story = {
  args: {
    title: "Sem dados para exibir",
    description:
      "Assim que houver informações disponíveis, elas serão exibidas nesta área.",
  },
};

export const CustomIcon: Story = {
  args: {
    title: "Extrato vazio",
    description:
      "Você ainda não possui movimentações registradas neste período.",
    icon: <ReceiptLongOutlinedIcon sx={{ fontSize: 28, color: "#315CC3" }} />,
  },
};
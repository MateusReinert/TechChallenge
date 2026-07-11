import type { Meta, StoryObj } from "@storybook/react-vite";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import TrendingDownOutlinedIcon from "@mui/icons-material/TrendingDownOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

import SummaryCard from "./SummaryCard";
import Button from "./Button";

const meta = {
  title: "Components/SummaryCard",
  component: SummaryCard,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
    },
    value: {
      control: "text",
    },
    trend: {
      control: "text",
    },
  },
} satisfies Meta<typeof SummaryCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Balance: Story = {
  args: {
    label: "Saldo atual",
    value: "R$ 8.430,00",
    icon: <AccountBalanceWalletOutlinedIcon />,
    trend: "12% acima do mês anterior",
    trendIcon: <TrendingUpOutlinedIcon />,
  },
};

export const Income: Story = {
  args: {
    label: "Entradas",
    value: "R$ 4.250,00",
    icon: <TrendingUpOutlinedIcon />,
    trend: "8% acima do mês anterior",
    trendIcon: <TrendingUpOutlinedIcon />,
  },
};

export const Expenses: Story = {
  args: {
    label: "Saídas",
    value: "R$ 1.820,00",
    icon: <TrendingDownOutlinedIcon />,
    trend: "3% abaixo do mês anterior",
    trendIcon: <TrendingDownOutlinedIcon />,
  },
};

export const WithAction: Story = {
  args: {
    label: "Saldo atual",
    value: "R$ 8.430,00",
    icon: <AccountBalanceWalletOutlinedIcon />,
    action: (
      <Button variantType="ghost" startIcon={<VisibilityOutlinedIcon />}>
        Ver detalhes
      </Button>
    ),
  },
};
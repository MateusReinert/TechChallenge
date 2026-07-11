import type { Meta, StoryObj } from "@storybook/react-vite";
import Button from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variantType: {
      control: "select",
      options: ["primary", "outlined", "ghost"],
    },
    disabled: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Adicionar transação",
    variantType: "primary",
    type: "button",
  },
};

export const Outlined: Story = {
  args: {
    children: "Cancelar",
    variantType: "outlined",
    type: "button",
  },
};

export const Ghost: Story = {
  args: {
    children: "Ver detalhes",
    variantType: "ghost",
    type: "button",
  },
};

export const Disabled: Story = {
  args: {
    children: "Salvar",
    variantType: "primary",
    disabled: true,
    type: "button",
  },
};
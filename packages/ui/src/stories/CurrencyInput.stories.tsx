import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import CurrencyInput from "../components/CurrencyInput";

const meta = {
  title: "Components/CurrencyInput",
  component: CurrencyInput,
  tags: ["autodocs"],
} satisfies Meta<typeof CurrencyInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = React.useState("");

    return (
      <CurrencyInput
        label="Valor"
        value={value}
        onChange={setValue}
      />
    );
  },
};

export const Filled: Story = {
  render: () => {
    const [value, setValue] = React.useState("R$ 1.250,00");

    return (
      <CurrencyInput
        label="Valor"
        value={value}
        onChange={setValue}
      />
    );
  },
};

export const HighValue: Story = {
  render: () => {
    const [value, setValue] = React.useState("R$ 25.999,90");

    return (
      <CurrencyInput
        label="Valor"
        value={value}
        onChange={setValue}
      />
    );
  },
};

export const Disabled: Story = {
  args: {
    label: "Valor",
    value: "R$ 350,00",
    disabled: true,
  },
};

export const Required: Story = {
  render: () => {
    const [value, setValue] = React.useState("");

    return (
      <CurrencyInput
        label="Valor obrigatório"
        required
        value={value}
        onChange={setValue}
      />
    );
  },
};
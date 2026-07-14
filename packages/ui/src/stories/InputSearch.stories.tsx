import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import InputSearch from "../components/InputSearch";

const meta = {
  title: "Components/InputSearch",
  component: InputSearch,
  tags: ["autodocs"],
} satisfies Meta<typeof InputSearch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = React.useState("");

    return (
      <InputSearch
        placeholder="Buscar transações..."
        value={value}
        onChange={setValue}
        aria-label="Buscar transações"
      />
    );
  },
};

export const WithValue: Story = {
  render: () => {
    const [value, setValue] = React.useState("mercado");

    return (
      <InputSearch
        placeholder="Buscar transações..."
        value={value}
        onChange={setValue}
        aria-label="Buscar transações"
      />
    );
  },
};

export const LongText: Story = {
  render: () => {
    const [value, setValue] = React.useState("transferência nubank abril");

    return (
      <InputSearch
        placeholder="Buscar..."
        value={value}
        onChange={setValue}
        aria-label="Buscar transações"
      />
    );
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Buscar...",
    value: "",
    disabled: true,
    "aria-label": "Buscar transações (desabilitado)",
  },
};

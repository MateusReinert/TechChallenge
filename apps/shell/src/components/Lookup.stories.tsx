import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import Lookup from "./Lookup";

const transactionTypeOptions = [
  { label: "Entrada", value: "income" },
  { label: "Saída", value: "expense" },
];

const categoryOptions = [
  { label: "Alimentação", value: "food" },
  { label: "Transporte", value: "transport" },
  { label: "Salário", value: "salary" },
  { label: "Lazer", value: "leisure" },
];

const meta = {
  title: "Components/Lookup",
  component: Lookup,
  tags: ["autodocs"],
} satisfies Meta<typeof Lookup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Tipo",
    placeholder: "Selecione o tipo",
    value: "",
    options: transactionTypeOptions,
    onChange: () => {},
  },
  render: (args) => {
    const [value, setValue] = React.useState("");

    return <Lookup {...args} value={value} onChange={setValue} />;
  },
};

export const Filled: Story = {
  args: {
    label: "Tipo",
    placeholder: "Selecione o tipo",
    value: "income",
    options: transactionTypeOptions,
    onChange: () => {},
  },
  render: (args) => {
    const [value, setValue] = React.useState("income");

    return <Lookup {...args} value={value} onChange={setValue} />;
  },
};

export const Category: Story = {
  args: {
    label: "Categoria",
    placeholder: "Selecione a categoria",
    value: "",
    options: categoryOptions,
    onChange: () => {},
  },
  render: (args) => {
    const [value, setValue] = React.useState("");

    return <Lookup {...args} value={value} onChange={setValue} />;
  },
};

export const Error: Story = {
  args: {
    label: "Tipo",
    placeholder: "Selecione o tipo",
    value: "",
    options: transactionTypeOptions,
    onChange: () => {},
    error: true,
    helperText: "Campo obrigatório",
  },
  render: (args) => {
    const [value, setValue] = React.useState("");

    return <Lookup {...args} value={value} onChange={setValue} />;
  },
};
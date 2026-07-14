import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { Input } from "@finance/ui";

const meta = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = React.useState("");

    return (
      <Input
        label="Descrição"
        placeholder="Digite aqui"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    );
  },
};

export const WithValue: Story = {
  render: () => {
    const [value, setValue] = React.useState("Salário mensal");

    return (
      <Input
        label="Descrição"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    );
  },
};

export const Disabled: Story = {
  args: {
    label: "Campo bloqueado",
    value: "Sem edição",
    disabled: true,
  },
};

export const Error: Story = {
  render: () => {
    const [value, setValue] = React.useState("");

    return (
      <Input
        label="Valor"
        placeholder="Obrigatório"
        value={value}
        error
        helperText="Campo obrigatório"
        onChange={(event) => setValue(event.target.value)}
      />
    );
  },
};

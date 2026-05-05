import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import DateInput from "./DateInput";

const meta = {
  title: "Components/DateInput",
  component: DateInput,
  tags: ["autodocs"],
} satisfies Meta<typeof DateInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Data",
    value: "",
    onChange: () => {},
  },
  render: (args) => {
    const [value, setValue] = React.useState("");

    return (
      <DateInput
        {...args}
        value={value}
        onChange={setValue}
      />
    );
  },
};

export const Filled: Story = {
  args: {
    label: "Data",
    value: "25/04/2026",
    onChange: () => {},
  },
  render: (args) => {
    const [value, setValue] = React.useState("25/04/2026");

    return (
      <DateInput
        {...args}
        value={value}
        onChange={setValue}
      />
    );
  },
};

export const Error: Story = {
  args: {
    label: "Data",
    value: "",
    onChange: () => {},
    error: true,
    helperText: "Data inválida",
  },
  render: (args) => {
    const [value, setValue] = React.useState("");

    return (
      <DateInput
        {...args}
        value={value}
        onChange={setValue}
      />
    );
  },
};

export const Required: Story = {
  args: {
    label: "Data obrigatória",
    value: "",
    onChange: () => {},
  },
  render: (args) => {
    const [value, setValue] = React.useState("");

    return (
      <DateInput
        {...args}
        value={value}
        onChange={setValue}
      />
    );
  },
};
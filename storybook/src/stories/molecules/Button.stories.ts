import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { Button } from "ui-components";

const meta: Meta<Button> = {
  title: "Molecules/Button",
  component: "ord-button",
  tags: ["autodocs"],
  argTypes: {
    msg: {
      description: "The text displayed on the button.",
      control: "text",
    },
    type: {
      description: "The style of the button, either primary or secondary.",
      control: { type: "select" },
      options: ["primary", "secondary"],
    },
    disabled: {
      description: "Whether the button is disabled.",
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<Button>;

export const Primary: Story = {
  args: {
    msg: "Primary",
    type: "primary",
  },
};

export const Secondary: Story = {
  args: {
    msg: "Secondary",
    type: "secondary",
  },
};

export const Disabled: Story = {
  args: {
    type: "primary",
    msg: "Disabled",
    disabled: true,
  },
};

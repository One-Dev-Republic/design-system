import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import { Button } from "ui-components";

const meta: Meta<Button> = {
  title: "Molecules/Button",
  component: "ord-button",
  tags: ["autodocs"],
  argTypes: {
    name: { control: "text" },
  },
  render: () => html`<ord-button name="Primary Button"></ord-button>`,
};

export default meta;
type Story = StoryObj<Button>;

export const Primary: Story = {
  args: {
    name: "Primary Button",
  },
};

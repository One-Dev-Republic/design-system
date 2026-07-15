import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import type { Hero, HeroTranslations } from "ui-components";

import translations from "../../translations/en";

const heroTranslations = translations["odr-hero"] as HeroTranslations;

const meta: Meta<Hero & { translations: HeroTranslations }> = {
  title: "Molecules/Hero",
  component: "odr-hero",
  tags: ["autodocs"],
  argTypes: {
    translations: { control: "object" },
  },
  render: (args) =>
    html`<odr-hero .translations=${args.translations}></odr-hero>`,
};

export default meta;
type Story = StoryObj<Hero & { translations: HeroTranslations }>;

export const Primary: Story = {
  args: {
    translations: heroTranslations,
  },
};

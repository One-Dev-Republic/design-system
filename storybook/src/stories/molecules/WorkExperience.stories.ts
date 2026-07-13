import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import type { WorkExperience, WorkExperienceTranslations } from "ui-components";

import translations from "../../translations/en";

const workExperienceTranslations = translations[
  "odr-work-experience"
] as WorkExperienceTranslations;

const meta: Meta<
  WorkExperience & { translations: WorkExperienceTranslations }
> = {
  title: "Molecules/Work Experience",
  component: "odr-work-experience",
  tags: ["autodocs"],
  argTypes: {
    translations: { control: "object" },
  },
  render: (args) =>
    html`<odr-work-experience
      .translations=${args.translations}
    ></odr-work-experience>`,
};

export default meta;
type Story = StoryObj<
  WorkExperience & { translations: WorkExperienceTranslations }
>;

export const Primary: Story = {
  args: {
    translations: workExperienceTranslations,
  },
};

import type { Preview } from "@storybook/web-components-vite";
import { html } from "lit";
import { themes } from "storybook/theming";

// @ts-expect-error fontsource/inter doesn't have type declarations
import "@fontsource/inter/index.css";
import "ui-components";
// @ts-expect-error Storybook preview config allows side-effect CSS imports.
import "../src/themes/odr-global.css";

const preview: Preview = {
  decorators: [(Story) => html`<div class="container">${Story()}</div>`],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "oklch(20.5% 0 0)" }],
    },
    docs: {
      theme: themes.dark,
    },
    a11y: {
      test: "error",
    },
    layout: "fullscreen",
  },
};

export default preview;

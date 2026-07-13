import type { Preview } from "@storybook/web-components-vite";
import { html } from "lit";
import { themes } from "storybook/theming";

// @ts-expect-error Storybook preview config allows side-effect CSS imports.
import "../src/themes/odr-global.css";

const preview: Preview = {
  decorators: [(Story) => html`<div id="container">${Story()}</div>`],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: themes.light,
    },
    a11y: {
      test: "error",
    },
    layout: "centered",
  },
};

export default preview;

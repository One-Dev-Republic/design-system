import { create } from "storybook/theming";

export default create({
  base: "light",
  brandTitle: "One Dev Republic - Łukasz Migut - Design System",
  brandUrl: "https://www.onedevrepublic.com/design-system",
  brandImage: "/one-dev-republic-logo.png",
  fontCode: "monospace",
  brandTarget: "_self",
  appBg: "#1C2432",
  appContentBg: "oklch(20.5% 0 0)",
  appPreviewBg: "oklch(20.5% 0 0)",
  barSelectedColor: "#FF5104",
  textColor: "#FF5104",
  colorSecondary: "#6f87b7",

  // UI
  appBorderColor: "#6f87b7",
  appBorderRadius: 4,

  // Text colors
  textInverseColor: "#ffffff",

  // Toolbar default and active colors
  barTextColor: "#6f87b7",
  barHoverColor: "rgba(142, 164, 204, 0.7)",
  barBg: "#1C2432",

  // Form colors
  inputBg: "#1C2432",
  inputBorder: "#8ea4cc",
  inputTextColor: "#fff",
  inputBorderRadius: 2,
});

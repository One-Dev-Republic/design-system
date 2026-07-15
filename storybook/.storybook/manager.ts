import { addons } from "storybook/manager-api";

import OneDevRepublicTheme from "./one-dev-republic.theme";

addons.setConfig({
  theme: OneDevRepublicTheme,
});

type StorybookManagerWindow = Window & {
  __STORYBOOK_ADDONS_MANAGER?: {
    getConfig: () => { theme?: Record<string, unknown> };
  };
};

const applySidebarHoverOverride = () => {
  const manager = (window as StorybookManagerWindow).__STORYBOOK_ADDONS_MANAGER;
  const theme = manager?.getConfig?.().theme;
  const hoverColor = String(theme?.barHoverColor ?? "#2f3b52");
  const separatorColor = String(theme?.appBg ?? "#1C2432");
  const activeColor = String(theme?.barSelectedColor ?? "#FF5104");

  const styleId = "odr-sidebar-hover-override";
  const existing = document.getElementById(styleId);
  if (existing) existing.remove();

  const style = document.createElement("style");
  style.id = styleId;
  style.textContent = `
    #storybook-explorer-tree .sidebar-item[data-selected="false"]:hover {
      background-color: ${hoverColor} !important;
      background-image: none !important;
      box-shadow:
        inset 0 1px 0 ${separatorColor},
        inset 0 -1px 0 ${separatorColor} !important;
    }

    #storybook-explorer-tree .sidebar-item[data-selected="false"]:hover,
    #storybook-explorer-tree .sidebar-item[data-selected="false"]:hover a,
    #storybook-explorer-tree .sidebar-item[data-selected="false"]:hover button,
    #storybook-explorer-tree .sidebar-item[data-selected="false"]:hover svg,
    #storybook-explorer-tree .sidebar-item[data-selected="false"]:hover path {
      color: #ffffff !important;
    }

    #storybook-explorer-tree .sidebar-item[data-selected="false"]:hover svg,
    #storybook-explorer-tree .sidebar-item[data-selected="false"]:hover path {
      fill: currentColor !important;
      stroke: none !important;
    }

    #storybook-explorer-tree .sidebar-item[data-selected="true"],
    #storybook-explorer-tree .sidebar-item[data-selected="true"] a,
    #storybook-explorer-tree .sidebar-item[data-selected="true"] button,
    #storybook-explorer-tree .sidebar-item[data-selected="true"] svg,
    #storybook-explorer-tree .sidebar-item[data-selected="true"] path {
      color: ${activeColor} !important;
    }

    #storybook-explorer-tree .sidebar-item[data-selected="true"] svg,
    #storybook-explorer-tree .sidebar-item[data-selected="true"] path {
      fill: currentColor !important;
      stroke: none !important;
    }

    #storybook-explorer-tree .sidebar-item button[aria-label="Open context menu"],
    #storybook-explorer-tree .sidebar-item button[aria-label="Open context menu"]:hover,
    #storybook-explorer-tree .sidebar-item button[aria-label="Open context menu"]:focus,
    #storybook-explorer-tree .sidebar-item button[aria-label="Open context menu"]:active {
      background-color: transparent !important;
      background-image: none !important;
      box-shadow: none !important;
    }

    #storybook-explorer-tree .sidebar-item[data-selected="false"]:hover::before,
    #storybook-explorer-tree .sidebar-item[data-selected="false"]:hover::after {
      background-image: none !important;
    }
  `;
  document.head.appendChild(style);
};

// Storybook manager keeps a light default hover on story rows.
// Enforce theme-driven hover background for the Stories tree.
applySidebarHoverOverride();
window.addEventListener("load", applySidebarHoverOverride, { once: true });

const centerBrandLogo = () => {
  const styleId = "odr-sidebar-brand-center";
  const existing = document.getElementById(styleId);
  if (existing) existing.remove();

  const style = document.createElement("style");
  style.id = styleId;
  style.textContent = `
    [role="banner"] a[href="https://www.onedevrepublic.com/design-system"] {
      margin-inline: auto !important;
      display: inline-flex !important;
      justify-content: center !important;
      align-items: center !important;
      max-width: 100% !important;
    }
  `;

  document.head.appendChild(style);
};

centerBrandLogo();
window.addEventListener("load", centerBrandLogo, { once: true });

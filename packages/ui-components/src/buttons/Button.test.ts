import { fixture, html } from "@open-wc/testing";
import { expect, describe, it, beforeEach } from "vitest";

import type { UiButton } from "./Button";
import "./Button";

describe("UiButton component", () => {
  let el: UiButton;
  const name = "World";

  beforeEach(async () => {
    expect(customElements.get("ui-button")).toBeDefined();
    el = await fixture(html`<ui-button name="${name}"></ui-button>`);
    await el.updateComplete;
  });

  it("should render the button with the correct label", async () => {
    const button = el.shadowRoot?.querySelector("button");

    expect(button?.textContent).toBe("Hello, World!");
  });
});

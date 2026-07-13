import { fixture, html } from "@open-wc/testing";
import { beforeEach, describe, expect, it } from "vitest";

import type { Button } from "@components/buttons/Button";

import "@components/buttons/Button";

describe("OrdButton component", () => {
  let el: Button;
  const name = "World";

  beforeEach(async () => {
    expect(customElements.get("ord-button")).toBeDefined();
    el = await fixture(html`<ord-button name="${name}"></ord-button>`);
    await el.updateComplete;
  });

  it("should render the button with the correct label", async () => {
    const button = el.shadowRoot?.querySelector("button");

    expect(button?.textContent).toBe("Hello, World!");
  });
});

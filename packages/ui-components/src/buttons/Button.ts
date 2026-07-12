import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("ui-button")
export class UiButton extends LitElement {
  static styles = css`
    :host {
      color: blue;
    }
  `;

  @property()
  name?: string;

  render() {
    return html`<button>Hello, ${this.name ?? "World"}!</button>`;
  }
}

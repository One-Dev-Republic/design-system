import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("ord-button")
export class Button extends LitElement {
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

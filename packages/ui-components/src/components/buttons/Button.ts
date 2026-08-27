import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";

@customElement("ord-button")
export class Button extends LitElement {
  static styles = css`
    .button {
      color: #fff;
      border: none;
      border-radius: 0.5rem;
      padding: 1rem 1.5rem;
      font-size: var(--default-font-size);
      cursor: pointer;
    }

    .button--primary {
      background-color: var(--main-accent);
    }

    .button--secondary {
      border: 2px solid var(--main-accent);
      background-color: transparent;
    }

    .button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      background-color: var(--muted);
    }
  `;

  @property({ type: String })
  msg: string = "";

  @property({ type: Boolean })
  disabled = false;

  @property({ type: String })
  type: "primary" | "secondary" = "primary";

  render() {
    return html`<button
      class=${classMap({
        button: true,
        "button--primary": this.type === "primary",
        "button--secondary": this.type === "secondary",
      })}
      ?disabled=${this.disabled}
    >
      ${this.msg}
    </button>`;
  }
}

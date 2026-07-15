import { css, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";

import { BaseClass } from "@root/src/helpers/BaseClass";

import bgHero from "../../assets/bg-hero.svg";

export type HeroTranslations = {
  heading: string;
  firstParagraph: string;
  colorizedSpan: string;
  secondParagraph: string;
};

@customElement("odr-hero")
export class Hero extends BaseClass {
  @property({ attribute: false })
  translations!: HeroTranslations;

  constructor() {
    super();
  }

  static styles = [
    css`
      .hero {
        text-align: center;
        padding-top: 2.5rem;
        padding-bottom: 2.5rem;
        position: relative;
        z-index: 0;
        margin-top: -12px;
        overflow: hidden;
      }

      .hero::before {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        inset-inline-start: 50%;
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-position: top;
        background-size: cover;
        z-index: -1;
        transform: translateX(-50%);
        background-image: ${unsafeCSS(`url("${bgHero}")`)};
      }

      h1 {
        font-weight: 800;
        color: var(--text);
        font-size: 2.25rem;
      }

      p {
        color: var(--muted);
      }

      .colorized {
        background: linear-gradient(90deg, #ec4899, #f59e0b);
        -webkit-background-clip: text;
        color: transparent;
      }
    `,
  ];

  render() {
    return html`
      <section class="hero">
        <h1>${this.translations.heading}</h1>
        <p>
          ${this.translations.firstParagraph}
          <span class="colorized">${this.translations.colorizedSpan}</span>
          ${this.translations.secondParagraph}
        </p>
      </section>
    `;
  }
}

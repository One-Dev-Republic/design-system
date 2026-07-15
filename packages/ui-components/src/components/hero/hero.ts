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
        padding-bottom: 2.5rem;
        padding-inline: 1rem;
        position: relative;
        z-index: 0;
        margin-top: -12px;
        overflow: hidden;
        height: 220px;
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

      .hero-heading {
        margin-top: calc(0.25rem * 24);
      }

      h1 {
        margin: 2rem auto;
        max-width: 670px;
        font-weight: 700;
        color: oklch(92.2% 0 0);
        font-size: 3.6rem;
        line-height: 4rem;
      }

      p {
        margin: 2rem auto;
        max-width: 670px;
        font-size: 1.8rem;
        font-weight: 400;
        line-height: 2.8rem;
        color: var(--muted);
      }

      @media (min-width: 48rem) {
        h1 {
          font-size: 6rem;
          line-height: 6rem;
        }
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
        <div class="hero-heading">
          <h1>${this.translations.heading}</h1>
        </div>
        <p>
          ${this.translations.firstParagraph}
          <span class="colorized">${this.translations.colorizedSpan}</span>
          ${this.translations.secondParagraph}
        </p>
      </section>
    `;
  }
}

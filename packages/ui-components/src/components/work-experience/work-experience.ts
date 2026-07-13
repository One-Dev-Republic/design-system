import { css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

import { BaseClass } from "@helpers/BaseClass";

import logoMarkUrl from "../../assets/logo-mark.png";

export type WorkExperienceTranslations = {
  title: string;
  experienceItems: {
    translations: {
      period: string;
      company: string;
      role: string;
      bullets: string[];
    };
    links: {
      company: string;
    };
  }[];
};

@customElement("odr-work-experience")
export class WorkExperience extends BaseClass {
  @property({ attribute: false })
  translations!: WorkExperienceTranslations;

  static styles = [
    css`
      section {
        border: 1px solid oklch(43.9% 0 0);
        background-color: oklch(26.9% 0 0);
        padding: 1rem 2rem;
        border-radius: 1.5rem;
      }

      .item {
        display: flex;
        gap: 2.5rem;
        margin: 0;
        padding-bottom: 1rem;
      }

      .date {
        color: var(--muted);
        padding-bottom: 1rem;
        font-size: 1.2rem;
      }

      .company,
      .role {
        font-weight: 600;
      }

      h2 {
        padding-bottom: 1rem;
      }

      .company,
      h2 {
        color: var(--main-accent);
      }

      .role {
        color: #fff;
      }

      .icon {
        position: relative;
        width: 24px;
        min-width: 24px;
        display: flex;
        align-items: flex-start;
        justify-content: center;
      }

      .icon::after {
        content: "";
        position: absolute;
        top: 3.2rem;
        bottom: 0.8rem;
        left: 50%;
        width: 1px;
        transform: translateX(-0.5px);
        background-color: oklch(37.1% 0 0);
      }

      .item:last-child .icon::after {
        display: none;
      }
    `,
  ];

  render() {
    return html`
      <section>
        <h2>${this.translations.title}</h2>
        ${this.translations.experienceItems.map(
          (item) => html`
            <div class="item">
              <div class="icon">
                <img src="${logoMarkUrl}" alt="logo mark" width="24" />
              </div>
              <div>
                <div class="date">${item.translations.period}</div>
                <a
                  href="${item.links.company}"
                  class="company"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ${item.translations.company}
                </a>
                <p class="role"><i>${item.translations.role}</i></p>
                <ul class="muted">
                  ${item.translations.bullets.map((bullet) => html`<li><p>${bullet}</p></li>`)}
                </ul>
              </div>
            </div>
          `,
        )}
      </section>
    `;
  }
}

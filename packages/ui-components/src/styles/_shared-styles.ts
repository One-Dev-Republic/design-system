import { css } from "lit";

export const sharedStyles = css`
  :host {
    display: block;
    box-sizing: border-box;

    --main-accent: #ff7a01;
    --text: #374151;
    --muted: #6b7280;
    --bg: #ffffff;
    --dark-text: #e5e7eb;
    --surface-dark: #0d1524;
    --border-subtle: #e5e7eb;
  }

  .container {
    max-width: 85rem;
    margin: 0 auto;
    padding: 1rem;
    color: var(--text);
  }

  h2 {
    color: var(--text);
    font-weight: 600;
    margin: 0 0 0.5rem 0;
  }

  p {
    color: var(--muted);
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .muted {
    color: var(--muted);
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
`;

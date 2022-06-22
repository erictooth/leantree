import { LitElement, html, css, type TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";

@customElement("leantree-group")
export class LeanTreeGroup extends LitElement {
  static styles = css`
    [role="group"] {
      padding-inline-start: var(--leantree--group--indent);
    }
  `;

  @state()
  private _isRoot = false;

  @property({ attribute: "aria-label" })
  ariaLabel: string | null = null;

  connectedCallback(): void {
    super.connectedCallback();
    if (this.parentElement?.tagName !== "LEANTREE-NODE") {
      this._isRoot = true;
    }
  }

  render(): TemplateResult {
    return html`
      <div
        role=${this._isRoot ? "tree" : "group"}
        aria-label=${ifDefined(this.ariaLabel)}
      >
        <slot></slot>
      </div>
    `;
  }
}

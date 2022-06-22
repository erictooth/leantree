import { LitElement, html, css, type TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";

@customElement("quicktree-node")
export class QuickTreeNode extends LitElement {
  static styles = css`
    [role="treeitem"]:focus-visible {
      outline: none;
    }

    [role="treeitem"]:focus-visible [part="label"] {
      outline: 1px dotted #212121;
      outline: 5px auto -webkit-focus-ring-color;
    }

    [part="label"] {
      cursor: default;
      user-select: none;

      padding: var(--quicktree--node--padding);
    }

    [part="label"]:hover,
    [part="label"]:focus-visible {
      background: var(--quicktree--node--hover--background);
    }
  `;

  @state()
  private _hasChildrenRendered = false;

  private _handleChildrenSlotChange(e: any) {
    this._hasChildrenRendered =
      e.target.assignedNodes({ flatten: true }).length !== 0;
  }

  private _handleExpand() {
    this.dispatchEvent(new CustomEvent("onExpand", { bubbles: true }));
  }

  private _handleCollapse() {
    this.dispatchEvent(new CustomEvent("onCollapse", { bubbles: true }));
  }

  private _handleToggle() {
    if (this._hasChildrenRendered) {
      this._handleCollapse();
    } else {
      this._handleExpand();
    }
  }

  @property({ attribute: "haschildren" })
  hasChildren?: boolean;

  render(): TemplateResult {
    return html`
      <div
        role="treeitem"
        tabindex="0"
        ${this.hasChildren ? `aria-expanded=${this._hasChildrenRendered}` : ""}
      >
        <div part="label" @click=${this._handleToggle}>
          <slot name="label"></slot>
        </div>

        <slot @slotchange=${this._handleChildrenSlotChange}></slot>
      </div>
    `;
  }
}

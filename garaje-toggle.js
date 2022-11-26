import { LitElement, html, css } from "lit";

export class GarajeToggle extends LitElement {
  static properties = {
    checked: {},
  };

  static styles = css`
    input {
      display: none;
    }

    label {
      display: flex;
      align-items: center;
      width: 180px;
      height: 80px;
      padding: 8px;
      border-radius: 100px;
      background: MediumTurquoise;
      cursor: pointer;
    }

    span {
      height: 80px;
      width: 80px;
      border-radius: 100%;
      transition: 0.5s;
      background: #fff;
      margin-left: 0;
    }

    label:has(:checked) {
      background: DarkSlateGray;
    }

    :checked ~ span {
      margin-left: calc(100% - 84px);
      transition: 0.5s;
    }
  `;

  constructor() {
    super();
    this.checked = false;
  }

  toggle() {
    this.checked = !this.checked;
    this.changeBodyBackground()
  }

  changeBodyBackground() {
    const bgColor = this.checked ? "Black" : "White";
    document.body.style.transition = "0.5s";
    document.body.style.backgroundColor = bgColor;
  }

  render() {
    return html`
      <label for="toggle">
          <input id="toggle" type="checkbox" @change="${this.toggle}" />
          <span></span>
      </label>
    `;
  }
}

customElements.define("garaje-toggle", GarajeToggle);

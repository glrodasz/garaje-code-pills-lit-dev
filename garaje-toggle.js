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
      cursor: pointer;
    }

    .toggle {
      display: flex;
      align-items: center;
      width: 220px;
      height: 100px;
      background: MediumTurquoise;
      background-size: cover;
      border-radius: 100px;
    }

    .circle {
      height: 88px;
      width: 88px;
      border-radius: 100%;
      transition: 0.5s;
      background: #fff;
      margin-left: 2%;
    }

    .toggle:has(:checked) {
      background: DarkSlateGray;
    }

    #toggle:checked ~ .circle {
      margin-left: 58%;
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
    const bgColor = this.checked ? "Black" : "LightCyan";
    document.body.style.transition = "0.5s";
    document.body.style.backgroundColor = bgColor;
  }

  render() {
    return html`
      <label for="toggle">
        <div class="toggle">
          <input id="toggle" type="checkbox" @change="${this.toggle}" />
          <div class="circle"></div>
        </div>
      </label>
    `;
  }
}

customElements.define("garaje-toggle", GarajeToggle);

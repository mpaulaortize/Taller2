import * as components from "./components/index.js";

class AppContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" }); // encapsulation, mode open means this is reachable for js on your web
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
    <header-bancolombia></header-bancolombia>
    <box-navBancolombia></box-navBancolombia>
    `;
  }
}

customElements.define("app-container", AppContainer);

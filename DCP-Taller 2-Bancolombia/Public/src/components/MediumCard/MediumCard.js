class MediumcardBancolombia extends HTMLElement {
  static get observedAttributes() {
    return ["image", "title", "subtitle", "description", "buttonText"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(attrName, oldValue, newValue) {
    this[attrName] = newValue;
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/MediumCard/MediumCard.css">
  
          <div class="main-box">
              <img src="${this.getAttribute("image")}"/>
  
              <div class="body-card">
                  <span>${this.getAttribute("title")}</span>
                  <h3>${this.getAttribute("subtitle")}</h3>
                  <p>${this.getAttribute("description")}</p>
                  <button>${this.getAttribute("buttonText")}</button>
              </div>
          </div>
        `;
  }
}

customElements.define("medium-card", MediumcardBancolombia);
export default MediumcardBancolombia;

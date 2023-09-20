class BigcardBancolombia extends HTMLElement {
  static get observedAttributes() {
    return ["message"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" }); // encapsulation, mode open means this is reachable for js on your web
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(propName, oldValue, newValue) {
    this[propName] = newValue;
    this.render();
  }

  //Llamar el componente como los demás, para volver a utilizarlo.

  render() {
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="./src/components/BigCard/BigCard.css">

        <div class="main-box">
            <img src="https://cdn.dynamicyield.com/api/8775742/images/2ed46f04c9315__microsoftteams-image.png"/>

            <div class="body-card">
                <span>Contactos de confianza</span>
                <h3>Todos tenemos un contacto que siempre nos salva</h3>
                <p>Cuanto necesites entrar a tu App Bancolombia a la mano desde otro celular hazlo fácil con tu contacto de confianza</p>

                <button>Inscribir contacto</button>
            </div>
      
        </div>
  
  
      `;
  }
}

customElements.define("big-card", BigcardBancolombia);
export default BigcardBancolombia;

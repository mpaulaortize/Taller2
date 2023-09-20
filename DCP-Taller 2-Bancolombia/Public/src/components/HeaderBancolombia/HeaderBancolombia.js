class HeaderBancolombia extends HTMLElement {
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

  render() {
    this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/HeaderBancolombia/HeaderBancolombia.css">
        
        <header class="Header"> 
        <img src="https://www.bancolombia.com/wcm/connect/www.bancolombia.com-26918/196f0dde-fb72-49bf-ba1b-039f08c1a33e/logo-bancolombia+%281%29.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_K9HC1202P86O40QTNS9EAE1S47-196f0dde-fb72-49bf-ba1b-039f08c1a33e-nVP-YUW"/>
        
        <nav class="navBancolombia">
        <a href="/html/">Inicio</a>
        <a href="/html/">Necesidades</a>
        <a href="/html/">Productos y Servicios</a>
        <a href="/html/">Educación Financiera</a>
        </nav>

        <div class="mainButtons">
        <button class="buttonuno">Sucursal Virtual Personas</button>
        <button class="buttondos">Entrar</button>
        </div>

        </header> 

        `;
  }
}

customElements.define("header-bancolombia", HeaderBancolombia);
export default HeaderBancolombia;

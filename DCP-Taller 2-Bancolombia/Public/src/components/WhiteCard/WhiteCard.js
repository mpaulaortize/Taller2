class Whitecard extends HTMLElement {
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
        <link rel="stylesheet" href="./src/components/WhiteCard/WhiteCard.css">
  
        <div class="main-box">

            <div class="body-card">
                <span>Créditos</span>
                <h3>Financia lo que sueñas, quieres y necesitas.</h3>
                <p>Es el momento de lograr tus sueños. Opciones ideales para esos proyectos o ideas que necesitan apoyo financiero.</p>
                <button>Saber más</button>
            </div>

            <div class="img-card">
                <img src="https://www.bancolombia.com/wcm/connect/www.bancolombia.com-26918/1a87e4d7-acab-4e94-b576-cefeb944c30d/ilustracion_creditos.svg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_K9HC1202P86O40QTNS9EAE1S47-1a87e4d7-acab-4e94-b576-cefeb944c30d-nwjHdOn"/>
            </div>
            
        </div>
    
    
        `;
  }
}

customElements.define("white-card", Whitecard);
export default Whitecard;

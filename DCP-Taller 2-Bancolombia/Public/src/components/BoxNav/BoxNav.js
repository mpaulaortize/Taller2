class BoxBancolombia extends HTMLElement {
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
    <link rel="stylesheet" href="./src/components/BoxNav/BoxNav.css">
          
        <div class="Boxnav">

            <div class="1">
                <img src=""/>
                <a href="/html/">Solicitud de documentos</a>
            </div>

            <div class="box1">
                <img src=""/>
                <a href="/html/">Pagos</a>
            </div>

            <div class="box1">
                <img src=""/>
                <a href="/html/">Centro de Ayuda</a>
            </div>

            <div class="box1">
                <img src=""/>
                <a href="/html/">Alternativas Financieras</a>
            </div>

            <div class="box1">
                <img src=""/>
                <a href="/html/">Subsidios</a>
            </div>

            <div class="box1">
                <img src=""/>
                <a href="/html/">Solicitud tu Turno</a>
            </div>
            
        </div>


    `;
  }
}

customElements.define("box-navbancolombia", BoxBancolombia);
export default BoxBancolombia;

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
    <link rel="stylesheet" href="./src/components/index.css">
    <header-bancolombia></header-bancolombia>
    <box-navbancolombia></box-navbancolombia>

    <div class="body-cards">
      <big-card></big-card>
      <medium-card
        image="https://cdn.dynamicyield.com/api/8775742/images/1fde4c01e358b__328x236.jpg"
        title="Orígenes"
        subtitle="Somos un país de muchas historias"
        description="Estas son algunas de las que hemos impulsado desde el corazón."
        buttonText="Descúbrelos">
      </medium-card>
      
      <medium-card
        image="https://cdn.dynamicyield.com/api/8775742/images/31087edd1cda9__card_desktop_02.png"
        title="Tu360Inmobiliario"
        subtitle="Cuida lo que más quieres 24/7"
        description="Compra el kit de alarmas para cuidar tu casa desde $135.000* mensuales y con 0% de interés."
        buttonText="Hazlo ahora"></medium-card>
      </medium-card>
    </div>

    <div class="section-grey">
      <h1 class="description">Conoce más de nuestros productos<h1/>
      
      <div class="segunda-seccion">
        <white-card></white-card>

        <little-card
          title="Tarjetas de crédito"
          subtitle="Paga, compra y gana puntos usando tus tarjetas."
          description="Usando nuestras tarjetas de crédito tu también ganas."
          buttonText="Saber más"
        ></little-card>

        <little-card
          title="Seguros"
          subtitle="Tu seguridad es la de todos, con nuestros seguros"
          description="Pensamos en ti y en la seguridad de tu familia"
          buttonText="Saber más"
        ></little-card>

      </div>

      <a class="link" href="/html/">Ver todos los productos</a>
    </div>

    <div class="blue-section">
      <section class="section-right">
        <p>Esto también te puede interesar</p>
        <img src="https://www.bancolombia.com/wcm/connect/www.bancolombia.com-26918/63b5cc1f-311b-4a2a-bb2a-8b650dd61994/hero-cerificacion-bancaria-desk.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_K9HC1202P86O40QTNS9EAE1S47-63b5cc1f-311b-4a2a-bb2a-8b650dd61994-ozumTn9"/>
      </section>

      <section class="section-left">
        <h3>Tu Certificado Tributario a un clic</h3>
        <p>Descarga tus certificados disponibles a través de nuestra página de forma rápida y segura.</p>
        <button>Solicitar certificado</button>
      </section>
      
    </div>
    `;
  }
}

customElements.define("app-container", AppContainer);

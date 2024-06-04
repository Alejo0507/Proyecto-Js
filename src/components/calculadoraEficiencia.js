export class CalculadoraEficiencia extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.render();
    }
  
    static get observedAttributes() {
      return []; // Agregar si hay atributos que quieres observar
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      // Manejar cambios de atributos si es necesario
    }
  
    connectedCallback() {
      this.shadowRoot.querySelector('#enviar-form').addEventListener('click', this.handleSubmit.bind(this));
      this.shadowRoot.querySelector('#closeModalBtn').addEventListener('click', this.closeModal.bind(this));
    }
  
    disconnectedCallback() {
      this.shadowRoot.querySelector('#enviar-form').removeEventListener('click', this.handleSubmit.bind(this));
      this.shadowRoot.querySelector('#closeModalBtn').removeEventListener('click', this.closeModal.bind(this));
    }
  
    handleSubmit(event) {
      event.preventDefault();
      const total = parseFloat(this.shadowRoot.querySelector('#total').value);
      const horas = parseFloat(this.shadowRoot.querySelector('#horas').value);
      const costos = parseFloat(this.shadowRoot.querySelector('#costos').value);
      const defectos = parseFloat(this.shadowRoot.querySelector('#defectos').value);
  
      if (!isNaN(total) && !isNaN(horas) && !isNaN(costos) && !isNaN(defectos)) {
        const eficiencia = total / (horas * costos * (1 + defectos / total));
        this.shadowRoot.querySelector('#resultado').textContent = eficiencia.toFixed(2);
        this.shadowRoot.querySelector('#resultado-container').style.display = 'flex';
        this.shadowRoot.querySelector('#modal-content').style.display = "none";
      }
    }
  
    closeModal() {
      this.shadowRoot.querySelector('#myModal').style.display = 'none';
    }
  
    render() {
      this.shadowRoot.innerHTML = `
        <style>
          #modalTitle {
              text-align: center;
          }
  
          .input-container {
              border-radius: 5px;
              height: 25px;
              margin: 10px;
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 10px;
          }
  
          .input-container label {
              align-self: left;
              text: left;
              justify-self: start;
              width: 370px;
          }
  
          .input-container input {
              width: 230px;
              border-radius: 6px;
              align-self: right;
              justify-self: right;
          }
  
          .modal {
              display: none;
              position: fixed;
              z-index: 1;
              left: 0;
              top: 0;
              width: 100%;
              height: 100%;
              overflow: auto;
              background-color: rgba(0, 0, 0, 0.5);
              align-items: center;
              justify-content: center;
              flex-direction: column;
          }
  
          .modal-content {
              color: white;
              border-radius: 20px;
              background: linear-gradient(to bottom right, rgb(141, 30, 168), rgba(120, 50, 100));
              margin: 15% auto;
              padding: 20px;
              border: 1px solid #888;
              width: 60%;
              height: 60%;
              box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
              animation-name: modalopen;
              animation-duration: 0.4s;
          }
  
          @keyframes modalopen {
              from { opacity: 0 }
              to { opacity: 1 }
          }
  
          .close {
              color: #aaa;
              float: right;
              font-size: 28px;
              font-weight: bold;
          }
  
          .close:hover, .close:focus {
              color: black;
              text-decoration: none;
              cursor: pointer;
          }
  
          #closeModalBtn {
              transition: 0.5s ease;
          }
  
          #closeModalBtn:hover {
              color: red;
              transform: scale(1.5);
          }
  
          #resultado-container {
              display: none;
              align-items: center;
              justify-content: center;
              flex-direction: column;
          }
  
          #resultado-container p {
              font-size: 40px;
          }
  
          #calcForm {
              display: flex;
              flex-direction: column;
              align-items: center;
              text: center;
              justify-content: center;
          }
  
          #enviar-form, #volverACalcular {
              color: white;
              font-size: 1.2rem;
              border: none;
              margin-top: 2rem;
              padding: 10px 40px;
              background-color: #ae4bc7;
              transition: all 0.5s ease;
          }
  
          #enviar-form:hover, #volverACalcular:hover {
              color: rgb(141, 30, 168);
              background-color: #efb7fd;
              padding: 20px 50px;
              cursor: pointer;
          }
  
          @media screen and (max-width: 1260px) {
              .input-container {
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  text-align: center;
                  height: 100%;
                  font-size: 10px;
              }
  
              #modalTitle {
                  font-size: 20px;
                  text-align: center;
              }
  
              #enviar-form {
                  padding: 5px 7px;
                  border-radius: 4px;
                  margin-top: 4px;
              }
          }
        </style>
        <div id="myModal" class="modal">
          <div class="modal-content">
            <span id="closeModalBtn" class="close">&times;</span>
            <h1 id="modalTitle">Calcular eficiencia operativa</h1>
            <div id="form-container">
              <form id="calcForm">
                <div class="input-container">
                  <label for="totalProductos">Cantidad total de productos terminados</label>
                  <input type="number" id="total" name="totalProductos" required>
                </div>
                <div class="input-container">
                  <label for="horasTotProduct">Horas totales de producción</label>
                  <input type="number" id="horas" name="horasTotProduct" required>
                </div>
                <div class="input-container">
                  <label for="costosOperativosTotales">Costos operativos totales</label>
                  <input type="number" id="costos" name="costosOperativosTotales" required>
                </div>
                <div class="input-container">
                  <label for="productosDefectuosos">Número de productos defectuosos</label>
                  <input type="number" id="defectos" name="productosDefectuosos" required>
                </div>
                <input type="submit" id="enviar-form" value="Calcular">
              </form>
            </div>
            <div id="resultado-container">
              <h1>Su empresa tiene una eficiencia operativa de:</h1>
              <p><span id="resultado">0</span> unidades/$</p>
            </div>
          </div>
        </div>
      `;
    }
  }
  
  customElements.define('calc-eficiencia', CalculadoraEficiencia);
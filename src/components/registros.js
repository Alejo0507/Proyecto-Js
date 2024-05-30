
const registro = document.querySelector('button');

registro.addEventListener('click', (event) => {
    document.querySelector('#cards').innerHTML = `
        <form class="row g-3">
            <div class="col-md-6">
                <label for="inputEmail4" class="form-label">Nombre</label>
                <input type="text" class="form-control" id="nombre">
            </div>
            <div class="col-md-4">
                <label for="inputPassword4" class="form-label">Fecha</label>
                <input type="date" class="form-control" id="fecha" placeholder="DD/MM/AAAA">
            </div>
            <div class="col-md-2">
                <label for="inputEmail4" class="form-label">Costo por unidad</label>
                <input type="number" class="form-control" id="costoUnidad">
            </div>
            <div class="col-md-6">
                <label for="inputPassword4" class="form-label">Proveedor</label>
                <input type="text" class="form-control" id="proveedor">
            </div>
            <div class="col-6">
                <label for="inputAddress" class="form-label">Descripcion</label>
                <input type="text" class="form-control" id="descripcion" placeholder="">
            </div>
            <div class="col-4">
                <label for="inputAddress2" class="form-label">Unidad de Medida</label>
                <input type="text" class="form-control" id="unidadMedida" placeholder="metros / centimetros">
            </div>
            <div class="col-md-2">
                <label for="inputCity" class="form-label">Cantidad</label>
                <input type="number" class="form-control" id="cantidad">
            </div>
            <div class="col-md-2">
                <label for="inputState" class="form-label">Categoria</label>
                <select id="categoria" class="form-select">
                    <option selected>Choose...</option>
                    <option value="Telas">Telas</option>
                    <option value="Hilos">Hilos</option>
                    <option value="Botones">Botones</option>
                    <option value="Cierres">Cierres</option>
                    <option value="Cauchos">Cauchos</option>
                    <option value="Lentejuelas">Lentejuelas</option>
                    <option value="Encajes">Encajes</option>
                </select>
            </div>
            <div class="col-md-4">
                <label for="inputZip" class="form-label">Ubicacion en Almacen</label>
                <input type="text" class="form-control" id="ubicacion">
            </div>
            <div class="col-12">
                <button type="button" id="guardarBtn" class="btn btn-primary">Guardar</button>
            </div>
        </form>
    `;

    event.preventDefault();
});

document.addEventListener('click', (event) => {
    if (event.target && event.target.id === 'guardarBtn') {
        let stock = {
            id: "",
            nombre: document.querySelector('#nombre').value,
            fecha: document.querySelector('#fecha').value,
            costoUnidad: document.querySelector('#costoUnidad').value,
            proveedor: document.querySelector('#proveedor').value,
            descripcion: document.querySelector('#descripcion').value,
            unidadMedida: document.querySelector('#unidadMedida').value,
            cantidad: document.querySelector('#cantidad').value,
            ubicacion: document.querySelector('#ubicacion').value,
            categoria: document.querySelector('#categoria').value
        };

        fetch('https://664a68e3a300e8795d41e736.mockapi.io/api/v1/stock', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(stock)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Datos enviados exitosamente:', data);
        })
        .catch((error) => {
            console.error('Error al enviar los datos:', error);
        });

        event.preventDefault();
    }
});
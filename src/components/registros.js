

const registro = document.getElementById('inventario')
const produccion=document.getElementById('produccion')
let stock={

}
let Producciones ={

}

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
                <select class="form-select" id="unidadMedida">
                <option selected>Choose...</option>
                <option value="Metros">Metros</option>
                <option value="Centimetros">Centimetros</option>
                </select>
            </div>
            <div class="col-md-2">
                <label for="inputCity" class="form-label">Cantidad</label>
                <input  class="form-control" id="cantidad">
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
                    <option value="lentejuelas">lentejuelas</option>
                    <option value="Encajes">Encajes</option>
                </select>
            </div>
            <div class="col-md-4">
                <label for="inputZip" class="form-label">Ubicacion en Almacen</label>
                <input type="text" class="form-control" id="ubicacion">
            </div>
            <div class="col-12">
                <button type="button" id="guardarBtn-inv" class="btn btn-primary">Guardar</button>
            </div>
        </form>
    `;

    event.preventDefault();
});


document.addEventListener('click', (event) => {
    if (event.target && event.target.id === 'guardarBtn-inv') {
        let mp = {
            "id":"",
            "nombre":"",
            "categoria":"",
            "fecha":"",
            "costoUnidad":"",
            "proveedor":"",
            "descripcion":"",
            "unidadMedida":"",
            "cantidad":"",
            "ubicacion":"",
        }
        const inputs = document.querySelectorAll('input, select');
        inputs.forEach(input => {
            mp[input.id] = input.value;
        });
        stock[Date.now()] = mp;

        inputs.forEach(input => {
            input.value = '';
        });
        console.log(stock)
        event.preventDefault();
    }
});
produccion.addEventListener('click', (event) => {
    document.querySelector('#cards').innerHTML = `
        <form class="row g-3">
            <div class="col-md-12">
            <label for="inputState" class="form-label">Producto</label>
            <select id="producto" class="form-select">
                <option selected>Choose...</option>
                <option value="option1">Camisa manga Larga</option>
                <option value="option2">Camisa manga Corta</option>
                <option value="option3">Vestido Largo</option>
                <option value="option3">Vestido Corto</option>
                <option value="option3">Pantalon de Jean</option>
                <option value="option3">Pantalon de Vestir</option>
                <option value="option3">Short</option>
            </select>
        </div>
            <div class="col-md-4">
                <label for="inputEmail4" class="form-label">Cantidad de Productos</label>
                <input type="number" class="form-control" id="cantidad">
            </div>
            
           
            <div class="col-12">
                <button type="button" id="guardarBtn-pro" class="btn btn-primary">Guardar</button>
            </div>
        </form>
    `;

    event.preventDefault();
});
document.addEventListener('click', (event) => {
    if (event.target && event.target.id === 'guardarBtn-pro') {
        let pro = {
            
            "producto":"",
            "cantidad":"",
            
        }
        const inputs = document.querySelectorAll('input, select');
        inputs.forEach(input => {
            pro[input.id] = input.value;
        });
        Producciones[Date.now()] = pro;

        inputs.forEach(input => {
            input.value = '';
        });
        console.log(Producciones)
        event.preventDefault();
    }
});

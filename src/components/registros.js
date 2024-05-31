const registro = document.getElementById('inventario');
const produccion=document.getElementById('produccion');
const costos=document.getElementById('Costos-indirectos');
const URLMP = "https://665630689f970b3b36c49525.mockapi.io/materiaPrima";
let costo={

}
let stock={

}
let Producciones ={


}

registro.addEventListener('click', (event) => {
    document.querySelector('#cards').innerHTML = `
        <form id="formMp" class="row g-3">
            <div class="col-md-6">
                <label for="inputEmail4" class="form-label">Id</label>
                <input type="number" class="form-control" name="idMateriaPrima"  id="idMp">
            </div>
            <div class="col-md-6">
                <label for="inputEmail4" class="form-label">Nombre</label>
                <input type="text" class="form-control" name="nombre" id="nombre">
            </div>
            <div class="col-md-4">
                <label for="inputPassword4" class="form-label">Fecha</label>
                <input type="date" class="form-control" name="fechaDeAdquisicion" id="fechaAdqui" placeholder="DD/MM/AAAA">
            </div>
            <div class="col-md-4">
                <label for="inputPassword4" class="form-label">Fecha</label>
                <input type="date" class="form-control" name="fechaDeVencimiento" id="fechaVenci" placeholder="DD/MM/AAAA">
            </div>
            <div class="col-md-2">
                <label for="inputEmail4" class="form-label">Costo por unidad</label>
                <input type="number" class="form-control" name="costoUnidad" id="costoUnidad">
            </div>
            <div class="col-md-6">
                <label for="inputPassword4" class="form-label">Proveedor</label>
                <input type="text" class="form-control" name="proveedor" id="proveedor">
            </div>
            <div class="col-6">
                <label for="inputAddress" class="form-label">Descripcion</label>
                <input type="text" class="form-control" name="descripcion" id="descripcion" placeholder="">
            </div>
            <div class="col-4">
                <label for="inputAddress2" class="form-label">Unidad de Medida</label>
                <select class="form-select" name="unidadMedida" id="unidadMedida">
                <option selected>Choose...</option>
                <option value="Metros">Metros</option>
                <option value="Centimetros">Centimetros</option>
                </select>
            
            </div>
            <div class="col-md-2">
                <label for="inputCity" class="form-label">Cantidad</label>
                <input  class="form-control" name="cantidad" id="cantidad">
                
            </div>
            <div class="col-md-2">
                <label for="inputState" class="form-label">Categoria</label>
                <select id="categoria" name="categoria" class="form-select">
                    <option selected>Choose...</option>
                    <option value="Telas">Telas</option>
                    <option value="Hilos">Hilos</option>
                    <option value="Botones">Botones</option>
                    <option value="Cierres">Cierres</option>
                    <option value="Cauchos">Cauchos</option>
                    <option value="lentejuelas">lentejuelas</option>
                    <option value="Encajes">Encajes</option>
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
                <input type="text" class="form-control" name="ubicacion" id="ubicacion">
            </div>
            <div class="col-12">
                <button type="button" id="guardarBtn-inv" class="btn btn-primary">Guardar</button>
            </div>
        </form>
    `;



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
                <option value="Camisa manga Larga">Camisa manga Larga</option>
                <option value="Camisa manga Corta">Camisa manga Corta</option>
                <option value="Vestido Largo">Vestido Largo</option>
                <option value="Vestido Corto">Vestido Corto</option>
                <option value="Pantalon de Jean">Pantalon de Jean</option>
                <option value="Pantalon de Vestir">Pantalon de Vestir</option>
                <option value="Short">Short</option>
            </select>
        </div>
            <div class="col-md-4">
                <label for="inputEmail4" class="form-label">Cantidad de Productos</label>
                <input type="number" class="form-control" id="costoUnidad">
            </div>
            
           
            <div class="col-12">
                <button type="button" id="guardarBtn" class="btn btn-primary">Guardar</button>
            </div>
        </form>
    `;

    event.preventDefault();
});


costos.addEventListener('click', (event) => {
    document.querySelector('#cards').innerHTML = `
        <form class="row g-3 ">
        <div  class="col-md-4 ">
            <label for="inputState" class="form-label">Costo Indirecto</label>
            <select id="nombre-costo" class="form-select">
                <option selected>Choose...</option>
                <option value="Luz/Electricidad">Luz/Electricidad</option>
                <option value="Agua/Alcantarillado">Agua/Alcantarillado</option>
                <option value="Mantenimiento de Maquinas">Mantenimiento de Maquinas</option>
                <option value="Costos de Arriendo">Costos de Arriendo</option>
                <option value="Costos de administración">Costos de administración</option>
                <option value="Costos de ventas y marketing">Costos de ventas y marketing</option>
                <option value="Costos de seguros">Costos de seguros</option>
                <option value="Costos de tecnología de la información">Costos de tecnología de la información</option>
                <option value="Costos financieros">Costos financieros</option>
            </select>
        </div>
        
            <div class="col-md-3">
                <label for="inputEmail4" class="form-label">Valor de Costo Indirecto</label>
                <input type="number" class="form-control" id="valor-costo">
            </div>
            <div class="col-md-6">
                <label for="inputEmail4" class="form-label">Descripcion</label>
                <br>
                <textarea id="descripcion-costo" name="comentarios" style="height:7rem; width:30rem;" >
                 </textarea>
            </div>
            
           
            <div class="col-12">
                <button type="button" id="guardarBtn-cos" class="btn btn-primary">Guardar</button>
            </div>
        </form>
    `;

    event.preventDefault();
});
document.addEventListener('click', (event) => {
    if (event.target && event.target.id === 'guardarBtn-cos') {
        let cos = {

            "nombre-costo":"",
            "valor-costo":"",
            "descripcion-costo":"",

        }
        const inputs = document.querySelectorAll('input, select ,textarea');
        inputs.forEach(input => {
            cos[input.id] = input.value;
        });
        costo[Date.now()] = cos;

        inputs.forEach(input => {
            input.value = '';
        });
        console.log(costo)
        event.preventDefault();
    }
})
})

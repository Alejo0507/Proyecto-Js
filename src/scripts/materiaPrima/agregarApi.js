const URLMP = "https://665630689f970b3b36c49525.mockapi.io/materiaPrima";

const form = document.getElementById('mpForm');

form.addEventListener('submit', (event) => {
    event.preventDefault()
    let materiaPrima = {
        "idMateriaPrima": document.getElementById('idMp').value,
        "nombre": document.getElementById('nombre').value,
        "fechaDeAdquisicion": document.getElementById('fechaAdqui').value,
        "fechaDeVencimiento": document.getElementById('fechaVenci').value,
        "costoUnidad": document.getElementById('costoUnidad').value,
        "proveedor": document.getElementById('proveedor').value,
        "descripcion": document.getElementById('descripcion').value,
        "unidadMedida": document.getElementById('unidadMedida').value,
        "cantidad": document.getElementById('cantidad').value,
        "categoria": document.getElementById('categoria').value,
        "ubicacion": document.getElementById('ubicacion').value,
    };

    fetch(URLMP, {
        method: 'POST',
        headers: {'content-type':'application/json'},
        // Send your data in the request body as JSON
        body: JSON.stringify(materiaPrima)
      }).then(res => {
        if (res.ok) {
            return res.json();
        }
        // handle error
      }).then(task => {
        // do something with the new task
      }).catch(error => {
        // handle error
      })
    
      form.reset()
});



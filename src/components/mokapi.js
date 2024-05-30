registro.addEventListener('click', (event) => {
    event.preventDefault(); // Evitar que el formulario se envíe de forma predeterminada

    const nombre = document.querySelector('#nombre').value;
    const fecha = document.querySelector('#fecha').value;
    const costoUnidad = document.querySelector('#costoUnidad').value;
    const proveedor = document.querySelector('#proveedor').value;
    const descripcion = document.querySelector('#descripcion').value;
    const unidadMedida = document.querySelector('#unidadMedida').value;
    const cantidad = document.querySelector('#cantidad').value;

    const stock = {
        nombre,
        fecha,
        costoUnidad,
        proveedor,
        descripcion,
        unidadMedida,
        cantidad
    };

    // Llamada a la API para registrar los datos
    fetch('https://664a68e3a300e8795d41e736.mockapi.io/api/v1/stock', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(stock)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});









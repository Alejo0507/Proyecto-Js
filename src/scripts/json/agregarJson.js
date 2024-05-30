function agregarObjetoAJSON(nuevoObjeto) {
    fetch('DATA/materiaPrima.json')
      .then(response => response.json())
      .then(data => {
        // Agregar el nuevo objeto al array 'personas'
        data.personas.push(nuevoObjeto);
  
        // Enviar los datos actualizados al archivo en el servidor
        fetch('DATA/materiaPrima.json', { // Utiliza la ruta relativa al archivo JSON en el servidor
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
        .then(response => {
          if (response.ok) {
            console.log('Objeto agregado exitosamente');
          } else {
            console.error('Error al agregar el objeto:', response.statusText);
          }
        })
        .catch(error => console.error('Error al agregar el objeto:', error));
      })
      .catch(error => console.error('Error cargando el archivo JSON:', error));
}

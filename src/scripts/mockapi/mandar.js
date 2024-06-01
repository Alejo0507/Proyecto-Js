// ESTA FUNCIÓN RECIBE LA URL A LA QUE SE VA A MANDAR LA DATA
// LA DATA QUE SE VA A ENVIAR AL MOCKAPI
// Y EL FORMULARIO DONDE SE ESTÁ EJECUTANDO EL SCRIPT

export const mandarMockApi = (URL, DATA, form) => {
    fetch(URL, {
        method: 'POST',
        headers: {'content-type':'application/json'},
        // Send your data in the request body as JSON
        body: JSON.stringify(DATA)
      }).then(res => {
        if (res.ok) {
            return res.json();
        }

      }).catch(error => {
        console.log('No se pudo enviar los datos')
      })
    
      form.reset()
}
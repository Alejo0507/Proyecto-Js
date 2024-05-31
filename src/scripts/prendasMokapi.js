
let prendas =[
        {
            "nombre":"Camisa manga Larga",
            "hilos":50,
            "telas":3,
            "sierres":0,
            "lentejuelas":0,
            "cauchos":0,
            "encajes":0,
            "costo-unidad":0,
            "id":"1"
        },
        {
            "nombre":"Camisa manga Corta",
            "hilos":45,
            "telas":2,
            "sierres":0,
            "lentejuelas":0,
            "cauchos":0,
            "encajes":0,
            "costo-unidad":0,
            "id":"2"
            },
        {
            "nombre":"Vestido Largo",
            "hilos":20,
            "telas":5,
            "sierres":1,
            "lentejuelas":100,
            "cauchos":2,
            "encajes":12,
            "costo-unidad":0,
            "id":"3"
            },
        {
            "nombre":"Vestido Corto",
            "hilos":15,
            "telas":4,
            "sierres":1,
            "lentejuelas":50,
            "cauchos":2,
            "encajes":8,
            "costo-unidad":0,
            "id":"4"
            },
        {
            "nombre":"Pantalon de Vestir",
            "hilos":20,
            "telas":3,
            "sierres":1,
            "lentejuelas":0,
            "cauchos":1,
            "encajes":0,
            "costo-unidad":0,
            "id":"5"
                    },
        {
            "nombre":"Pantalon de Jean",
            "hilos":20,
            "telas":3,
            "sierres":1,
            "lentejuelas":0,
            "cauchos":0,
            "encajes":0,
            "costo-unidad":0,
            "id":"6"
                        },
        {
            "nombre":"Short",
            "hilos":12,
            "telas":2,
            "sierres":1,
            "lentejuelas":0,
            "cauchos":0,
            "encajes":0,
            "costo-unidad":0,
            "id":"7"
                        },
]


const data = JSON.stringify(prendas);

// Enviar datos a la API
fetch('https://66586d8e5c36170526486c75.mockapi.io/prendas', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: data
})
.then(response => {
    if (response.ok) {
        return response.json();
    } else {
        throw new Error('Error al enviar los datos a la API');
    }
})
.then(tasks => {
    // Almacenar la respuesta de la API en tasksObject
    tasksObject = tasks.reduce((acc, task) => {
        acc[task.id] = task;
        return acc;
    }, {});
    console.log('Datos guardados en tasksObject:', tasksObject);
})
.catch(error => {
    console.error('Ocurrió un error:', error);
});

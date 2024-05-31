const mpForm = document.getElementById('mpForm');
const URLMP = "https://665630689f970b3b36c49525.mockapi.io/materiaPrima";
const inventoryButton = document.getElementById('inventario');

const fetchData = async () => {
    try {
        const response = await fetch(URLMP); 
        const data = await response.json();
        console.log(data); 
    } catch (error) {
        console.error('Error al obtener los datos:', error);
    }
};

inventoryButton.addEventListener('click', () => {
    
    mpForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(mpForm);
    
        try {
            await fetch(URLMP, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(Object.fromEntries(formData))
            });
            fetchData();
        } catch (error) {
            console.error('Error al agregar el elemento:', error);
        }
    });
})
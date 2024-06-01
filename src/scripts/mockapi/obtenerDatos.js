export async function fetchData(URL) {
    try {
        const response = await fetch(URL);
        if (!response.ok) {
            throw new Error('Error al obtener los datos de la API');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al obtener los datos:', error);
        throw error;
    }
}
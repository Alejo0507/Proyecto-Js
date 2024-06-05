
const cantidad=document.getElementById('cantidadproductos')
// Terminado



const updateStock = (productId, newStock) => {
    fetch(`https://api.example.com/products/${productId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        stock: newStock
      })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to update stock');
      }
      // Manejar la respuesta exitosa
    })
    .catch(error => {
      console.error('Error updating stock:', error);
    });
  };
const productButton = document.getElementById('produccion');
const inventoryDiv = document.getElementById('inventoryDiv');
const prodDiv = document.getElementById('prodDiv');
const costosDiv = document.getElementById('prodDiv');
const form = document.getElementById('productForm');
// Terminado

productButton.addEventListener('click', () => {
    inventoryDiv.style.display = "none";
    prodDiv.style.display = "none";
    costosDiv.style.display = "none";
    form.style.display = "flex";

})
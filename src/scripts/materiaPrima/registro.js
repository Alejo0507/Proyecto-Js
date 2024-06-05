const inventoryButton = document.getElementById('inventario');
const inventoryDiv = document.getElementById('inventoryDiv');
const prodDiv = document.getElementById('prodDiv');
const costosDiv = document.getElementById('prodDiv');
const form = document.getElementById('mpForm');
// Terminado

inventoryButton.addEventListener('click', () => {
    inventoryDiv.style.display = "none";
    prodDiv.style.display = "none";
    costosDiv.style.display = "none";
    form.style.display = "flex";

})
const costosButton = document.getElementById('Costos-indirectos');
const inventoryDiv = document.getElementById('inventoryDiv');
const prodDiv = document.getElementById('prodDiv');
const costosDiv = document.getElementById('prodDiv');
const form = document.getElementById('costoForm');


costosButton.addEventListener('click', () => {
    inventoryDiv.style.display = "none";
    prodDiv.style.display = "none";
    costosDiv.style.display = "none";
    form.style.display = "flex";

})
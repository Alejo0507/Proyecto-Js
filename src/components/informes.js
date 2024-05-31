const informeInventario=document.querySelector('button')

informeInventario.addEventListener('click',()=>{
    document.querySelector('#cards').innerHTML=`
    <table class="table table-dark" >
  <thead >
    <tr>
      <th  scope="col">id</th>
      <th  scope="col">Nombre</th>
      <th  scope="col">Categoria</th>
      <th  scope="col">proveedor</th>
      <th  scope="col">valor unidad</th>
      <th  scope="col">cantidad</th>
      <th  scope="col">medida</th>
      <th  scope="col">Categoria</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>lorem</td>
      <td>lorem</td>
      <td>lorem</td>
      <td>lorem</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>lorem</td>
      <td>lorem</td>
      <td>lorem</td>
      <td>lorem</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
      <td>lorem</td>
      <td>lorem</td>
      <td>lorem</td>
      <td>lorem</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
      <td>lorem</td>
      <td>lorem</td>
      <td>lorem</td>
      <td>lorem</td>
    </tr>
    
  </tbody>
</table>
    
    `
    const headerRow = document.getElementById('headerRow');
    headerRow.style.backgroundColor = 'transparent';
})
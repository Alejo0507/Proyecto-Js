export const pasarAMoneda=(number)=>{
    return number.toLocaleString('es-CO', { style: 'currency', currency: 'COP'}).replace(/COP\s/,'')
}
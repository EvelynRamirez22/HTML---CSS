//metodo push

/*const frutas =["banana","frutilla"];
const nuevaFruta = "pera";

console.log(frutas);

frutas.push(nuevaFruta);

console.log(frutas);

//metodo shift 
const frutaEliminada = frutas.shift();
console.log(frutaEliminada);*/

//En un restaurante se reciben pedidos de comida a domicilio. Vamos a escribir una función
// procesarPedido que recibe un pedido, que es un array de platos. Lo que debemos hacer es:
//El primer elemento lo sacamos del array, ya que es el nombre del cliente.
//Añadimos al principio del array la cadena de texto "bebida", ya que es una promoción que tenemos.
//Después añadimos al final del array el nombre del usuario que sacamos antes.

const array = ["Evelyn Ramirez","Hamburguesa","papas"]

function procesarPedido(pedidos) {
    const nombreCliente = pedidos.shift();
    const bebida = "coca cola";
    pedidos.unshift(bebida);
    pedidos.push(nombreCliente);
    return pedidos;
}
console.log(procesarPedido(array)); 
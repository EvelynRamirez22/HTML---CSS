//Declarar funciones

//funcion tradicional
//function myFuction() {
//  return
//}

let contador = 0;
//dato importante --> siempre los nombres de las funciones siguenlas nomenclaturas de camelCase
function incrementarNumero() {
  //let number = document.getElementById("number").textContent;
  contador = contador + 1;
  document.getElementById("number").textContent = contador;
}

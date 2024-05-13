/*//while
const array = ["Evelyn Ramirez","Hamburguesa","papas"];

let contador = 0;

while(contador < array.length){
    console.log(array[contador]);
    contador++;
}

//for 
for(let i= 0; i < array.length; i++){
    console.log(array[i]);
}


//foreach

array.forEach((element) => {
    console.log(element);
});*/


//Dada una lista de números, escribe una función en JavaScript que devuelva la suma de todos los 
//números pares en la lista. 
//La función deberá iterar sobre cada número en la lista, 
//comprobar si el número es par y, si es así, añadirlo a la suma total. 
//Realizar una solución con for y una con while


//solucion con for


const lista = [1,2,4,5,5,6,6,7] 

function sumarPares(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
      if (numeros[i] % 2 === 0) { 
        suma += numeros[i];
      }
    }
    return suma;
}

console.log(sumarPares(lista))

//Solucion con while

function sumarPares(numeros) {
    let suma = 0; let i = 0;
while (i < numeros.length) {
    if (numeros[i] % 2 === 0) {
        suma += numeros[i];
}
i++
}
return suma;
}
console.log(sumarPares(lista))



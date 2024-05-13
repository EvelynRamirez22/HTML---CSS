// Solución con while
function sumarParesWhile(numeros) {
    let suma = 0;
    let i = 0;
    while (i < numeros.length) {
      if (numeros[i] % 2 === 0) { // Comprueba si el número es par
        suma += numeros[i]; // Suma el número par a la suma total
      }
      i++;
    }
    return suma;
  }
  
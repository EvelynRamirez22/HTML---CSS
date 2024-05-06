
function agregarElemento(){
    let lista = document.getElementById("lista")
    let input = document.getElementById("textarea").value;
    const elementoLista = document.createElement("li")
    const button = document.createElement("button");

    elementoLista.textContent = input;
    button.textContent = 'delete';

    lista.append(elementoLista);
    elementoLista.append(button)

    button.onclick = function() {
        lista.removeChild(elementoLista);
    }

    ////////////append///////////////
}
let listaDeParticipantes = []; //Arreglo
let i = 0; // Contador

function agregarAmigo(){
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value;

    if(!nombreAmigo){
        alert("Debes ingresar un nombre");
        return;
    }
    listaDeParticipantes.push(nombreAmigo);
    inputAmigo.value = "";
    inputAmigo.focus();
    imprimirAmigos();
}

function imprimirAmigos(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for (i = 0; i < listaDeParticipantes.length; i++) {
        let input = document.createElement("li");
        input.textContent = listaDeParticipantes[i];
        listaAmigos.appendChild(input);
    }
}

function sortearAmigo() {
    if (listaDeParticipantes === 0) {
        alert("No hay amigos para sortear");
        return;
    }
    let amigoSorteado = listaDeParticipantes[Math.floor(Math.random() * listaDeParticipantes.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;

    let limpiarLista = document.getElementById("ListaAmigos");
    limpiarLista.innerHTML = "";
}
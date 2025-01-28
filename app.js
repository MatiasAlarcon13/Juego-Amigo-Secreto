let nombres = [];
let contador = 0;

function agregarAmigo(){
    let inputNombre = document.getElementById("amigo").value;
    if (inputNombre == ""){
        alert("Porfavor Ingrese un Nombre");
    }else{
        nombres.push(inputNombre);
        console.log(nombres);
        document.querySelector("#amigo").value = "";
        listaAmigos.innerHTML = nombres.join("<br>");
        contador++;
    }
}

function sortearAmigo(){
    if(contador == 0){
        alert("No hay ningun amigo para sortear, ingresa nombres de tus amigos para jugar");
    }else{
        amigoRandom = parseInt(Math.floor(Math.random() * contador));
        console.log(nombres[amigoRandom]);
        let resultado = document.querySelector("#resultado");
        resultado.innerHTML = "El Amigo Secreto Sorteado es: " + nombres[amigoRandom];
        listaAmigos.innerHTML = "";
    }
}
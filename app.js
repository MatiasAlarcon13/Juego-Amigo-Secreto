let nombres = [];
let contador = 0;

// funcion poner primera letra en Mayuscula
function primeraLetraMayuscula(inputNombre){
    return inputNombre.charAt(0).toUpperCase() + inputNombre.slice(1).toLowerCase();
}

// funcion para agregar un amigo
function agregarAmigo(){
    let bandera = 1;
    let inputNombre = document.getElementById("amigo").value;
    if (inputNombre == ""){
        alert("Porfavor Ingrese un Nombre");
    }else{
        inputNombre = primeraLetraMayuscula(inputNombre);
        for (let i = 0; i < nombres.length; i++){
            if(inputNombre == nombres[i]){
                alert("Nombre de persona repetida, porfavor ingrese otro nombre");
                bandera = 0;
            }
        }
        if (bandera == 1){
            nombres.push(inputNombre);
            console.log(nombres);
            document.querySelector("#amigo").value = "";
            resultado.innerHTML = "";
            listaAmigos.innerHTML = nombres.join("<br>");
            contador++;
        }
    }
}

// funcion para sortear un amigo
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
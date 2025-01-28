let nombres = [];

function agregarAmigo(){
    let inputNombre = document.getElementById("amigo").value;
    if (inputNombre == ""){
        alert("Porfavor Ingrese un Nombre");
    }else{
        nombres.push(inputNombre);
        console.log(nombres);
        document.querySelector("#amigo").value = "";
        listaAmigos.innerHTML = nombres.join("<br>");
    }
}
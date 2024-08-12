/*const index = document.quertySelector(".index");*/


const div = document.quertySelector("div");
function alertaDiv(){
    alert('Hola! Soy el div');
}
div.addEventListener("onclick", alertaDiv);


/*const btn = document.quertySelector("button");
function mostrarAlerta(){ 
    alert('Hola!!');
}
button.addEventListener("onclick", mostrarAlerta) => {
    event.stopPropagation();
}*/
const button = document.querySelector("button");

button.addEventListener("click", mostrarAlerta);

function mostrarAlerta() {
    alert("¡Hiciste clic en el botón!");
    event.stopPropagation()
}
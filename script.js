/*document.body.style.fontSize="32px"
document.getElementById("parrafo").style.fontSize="24px"*/
/*const parrafo = document.getElementById("parrafo");
parrafo.style.fontSize= "24px"
parrafo.style.color="blue"*/

//acceder a los atributos
/*var elemento = document.getElementById("parrafo");
var id = elemento.getAttribute("id");
console.log(id);

// Supongamos que queremos asignar un valor al atributo "title" de un elemento
var elemento = document.getElementById("otroElemento");
elemento.setAttribute("title", "Este es un título");*/

// Supongamos que queremos obtener todos los atributos de un elemento y mostrarlos en la consola
var elemento = document.getElementById("titulo");
var atributos = elemento.attributes;
for (var i = 0; i < atributos.length; i++) {
    console.log(atributos[i].name + ": " + atributos[i].value);
}

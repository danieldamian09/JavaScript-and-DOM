const elemento = document.getElementById('first-course');
const list = document.querySelector('.list-group');
const row = document.querySelector('.row')
const container = document.querySelector('.container');
const body = document.querySelector('body');

// console.log(elemento, list, row, container, body);

// elemento.addEventListener('click', function(){
//   console.log("Elemento")
// })

// list.addEventListener('click', function(){
//   console.log("Lista")
// })

// row.addEventListener('click', function(){
//   console.log("div_row")
// })

// container.addEventListener('click', function(){
//   console.log("Container")
// })

// body.addEventListener('click', function(){
//   console.log("Body")
// })

// Refactorizar: 
// elemento.addEventListener('click', show_messages)
// list.addEventListener('click', show_messages)
// row.addEventListener('click', show_messages)
// container.addEventListener('click', show_messages)
// body.addEventListener('click', show_messages)

for (const element of document.querySelectorAll('*')) {
  element.addEventListener('click', show_messages)
}

function show_messages(e){
  // Hacemos referencia al elemento actual con this
  console.log("Elemento Actual: " + this.tagName)
  // Para conocer solo el elemento que disparo el evento
  console.log("Elemento que disparo el evento: " + e.target.tagName)
  // Salto de linea para visualizar en Consola
  console.log("\n")

  // Para detener la propagacion podemos utilizar
  // e.stopPropagation();
}




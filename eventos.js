const button = document.getElementById('hola')

// funcion que se agregara desde el atributo onclick de la etiqueta HTML
function saludar (){
  console.log('Saludo desde JS')
}

// funcion que agregaremos directamente al elemento seleccionado en el HTML
button.addEventListener('click', function(){
  console.log('Saludo desde JS con addEventListener')
})
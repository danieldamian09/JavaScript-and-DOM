const input = document.getElementById('input');
// console.log(input)

input.addEventListener('keydown', function(e){

  // Para saber que tecla fue presionada debemos apoyarnos del objeto e y el atributo key
  console.log("La tecla presionada fue: " + e.key + " Con el codigo "+ e.keyCode)

  // console.log("Hola desde el Teclado")
})
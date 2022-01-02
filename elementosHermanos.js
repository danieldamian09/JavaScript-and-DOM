const elementoPrueba = document.querySelector('div.row > ul.list-group > li')

// Para conocer el elemento padre del que he seleccionado
// console.log(elementoPrueba.parentElement);
// Para conocer el elemento Abuelo
// console.log(elementoPrueba.parentElement.parentElement)
// Para ver cual es el siguiente hermano en este caso "Javascript"
// console.log(elementoPrueba.nextElementSibling)
// Para visualizar el siguiente hermano en este caso "Java"
// console.log(elementoPrueba.nextElementSibling.nextElementSibling)
// Si no existe el hermano el atributo sera Null


// Para obtener el ultimo hermano
const last_element = document.getElementById('last-course');
// console.log(last_element)
// Tambien podemos seleccionar el hermano anterior al ultimo con
// console.log(last_element.previousElementSibling)
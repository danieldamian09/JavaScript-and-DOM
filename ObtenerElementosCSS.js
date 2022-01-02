// Obtener un elemento por una regla css por medio de QuerySelector el cual va a retornar el primer elemento que cumpla con la regla

const elementoQuerySelectorID = document.querySelector('#first-course');
// console.log(elementoQuerySelectorID);

const elementoQuerySelectorClass = document.querySelector('.list-group-item');
// console.log(elementoQuerySelectorClass);

const elementoReglaEspecifica = document.querySelector("div.row > ul.list-group > li");
// console.log(elementoReglaEspecifica);

const itemsAll = document.querySelectorAll('.list-group-item');
// console.log(itemsAll);

// Regla para obtener todos los elementos LI inpares, es como una regla de CSS, para los pares puedo usar ('li:nth-child(odd)')

const itemsPARES = document.querySelectorAll('li:nth-child(even)');
// console.log(itemsPARES);

for (let i = 0; i < itemsPARES.length; i++) {
  let element = itemsPARES[i];
  element.style.background = "red"
  
}
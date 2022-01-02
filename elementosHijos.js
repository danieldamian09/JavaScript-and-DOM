// Como obtener los Hijos de un elemento en especial

const list = document.querySelector('ul');
// console.log(list)

// Para saber cuanto hijos tiene un elemento
// console.log(list.childElementCount)
// Obtener el listado de Hijos
// console.log(list.children)
// Al ser un listado podemos iterarlo
for (let i = 0; i < list.children.length; i++) {
  const elementHijos = list.children[i];
  // console.log(elementHijos)
}

// acceder a un hijo especifico de la lista
// console.log(list.children[3])
// accerder al primer hijo
// console.log(list.firstElementChild)
//  acceder al ultimo hijo
// console.log(list.lastElementChild.innerHTML)
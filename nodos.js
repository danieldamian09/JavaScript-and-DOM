const firstElement = document.getElementById('first-course');
// console.log(firstElement.childElementCount)

// Hace referencia al texto que esta dentro de la etiqueta por eso es 1
// console.log(firstElement.childNodes.length)
// Se agregamos una etiqueta p dentro de la lista que tiene el texto Python nos va a seguir mostarndo 1 pero ya este uno corresponde a la etiqueta p

// console.log(firstElement.childNodes)
// Esto imprime por consola 3 elementos y hace referencia a los saltos de linea y el text

// con los nodos tambien nos podemos mover entre ancestros, hermanos e hijos

// * si queremo obtener el nodo hijo childNodes, hermano siguiente nextSibling, hermano anterior previousSibling, si queremos el padre parentNode "estos no contiene la palabra element"
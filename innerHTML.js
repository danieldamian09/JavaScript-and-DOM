const descriptionElem = document.getElementById('description');
// console.log(descriptionElem.innerHTML);

// si hacemos un formateo del codigo añadiendo un salto de linea en el elemento <p> va a cambiar lo que nos devuelve en consola, mostrando los espacios y cualquier atributo que tenga como id o class hasta etiquetas hijos, como innerHTML modificamos directamente el HTML (es un atributo de lectura y escritura)

descriptionElem.innerHTML = '<strong>Listado de Cursos</strong>';

// Para obtener el texto de un elemento

// console.log(descriptionElem.textContent);
// * Para modificar bien el texto de un elemento los hacemos de la siguiente manera:
descriptionElem.textContent = "Listado de Cursos desde textContent"
// * De necesitar las etiquetas tambien puedo concatenar
descriptionElem.innerHTML = '<strong>'+ descriptionElem.textContent +'</strong>';


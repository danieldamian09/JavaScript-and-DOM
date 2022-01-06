const row = document.querySelector('.row');
const form = document.getElementById('course-form');

form.addEventListener('submit', function (e) {

  e.preventDefault();

  let title = document.getElementById('title-form').value;
  let description = document.getElementById('description-form').value;

  create_card(title, description)
})

// Declaro el div fuera de la funcion para que sea global (revisar)
// let div = null

function create_card(title, description) {

  // *Creamos los elementos (creado fuera de la funcion)
  let div = document.createElement('div');
  // *Agregamos la clase del div
  div.className = 'col-sm-6 col-md-4';

  let thumbnail = document.createElement('div');
  //  *Agregamos la clase
  thumbnail.className = 'thumbnail';

  let caption = document.createElement('div');
  //  *Agregamos la clase
  caption.className = 'caption';

  let h3 = document.createElement('h3');
  h3.textContent = title

  let p1 = document.createElement('p');
  p1.textContent = description

  let p2 = document.createElement('p');

  // Evento para eliminar
  p2.addEventListener('click', delate_card)

  // Evento para eliminar
  // p2.addEventListener('click', function(){
  //   row.removeChild(div)
  // })


  let a = document.createElement('a');
  a.className = 'btn btn-danger'
  a.textContent = "Eliminar"


  // Agregamos los elementos a los padres segun corresponda la estructura de la card

  // *Descendente
  p2.appendChild(a);
  caption.appendChild(h3);
  caption.appendChild(p1);
  caption.appendChild(p2);

  thumbnail.appendChild(caption);
  div.appendChild(thumbnail);

  row.appendChild(div)

};

function delate_card(e) {
  // Para eliminar necesitamos el padre y el elemento a eliminar(hijo del padre)
  let ancestor = get_ancestors(e.target, 4)
  console.log(ancestor)
  row.removeChild(ancestor)
}

// Obtener el ancestro
function get_ancestors(ancestor, level){
  if(level === 0){
    console.log(ancestor)
    return ancestor
  }
  level--;
  console.log(level);
  return get_ancestors(ancestor.parentElement, level)

}
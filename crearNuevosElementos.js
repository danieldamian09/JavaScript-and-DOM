// Seleccionamos el elemento donde vamos a colocar nuestra carta (row)
const row = document.querySelector('.row');
// Selecionamos el formulario del cual vamos a tomar los valores
const form = document.getElementById('course-form');
// console.log(form)

// Agregamos el evento al formulario 
form.addEventListener('submit', function (e) {

  e.preventDefault();

  let title = document.querySelector('#title-form').value;
  let description = document.querySelector('#description-form').value;

  create_card(title, description)

})



// funcion para crear la carta
function create_card(title, description) {
  let html = `
              <div class="col-sm-6 col-md-4">
              <div class="thumbnail">
                <div class="caption">
                  <h3 id="title-card">${title}</h3>
                  <p id="description-card">${description}</p>
                  <p>
                    <a href="#" class="btn btn-danger">Acción</a>
                  </p>
                </div>
              </div>
            </div>
  
  `
  row.innerHTML += html

}
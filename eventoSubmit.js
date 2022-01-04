const form = document.getElementById('course-form');
// console.log(form);

form.addEventListener('submit', function(e){

  e.preventDefault()

  // declaro las variables donde vamos a almacenar los valores una vez se haga el evento submit (con el atributo value capturo el valor de los inputs)
  let title = document.getElementById('title-form').value;
  let description = document.getElementById('description-form').value;

  console.log(title)
  console.log(description)

})
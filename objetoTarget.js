const buttonTarget = document.querySelector('.btn.btn-primary')
// console.log(buttonTarget);

buttonTarget.addEventListener('click', function(e){

  // El siguiente parametro hace referencia al Evento
  // console.log(e)


  // Hacemos un condicional para simular un pequeño toggle
  if(title.style.display != 'none'){
    title.style.display = 'none';
    description.style.display = 'none';
    // buttonTarget.textContent = "Mostar"
    // e.target.textContent = "Mostar";
    // Otra forma que podemos saber cual es el elemento que disparo el evento es:
    this.textContent = "MOSTAR";
  }else{
    title.style.display = 'block';
    description.style.display = 'block';
    // buttonTarget.textContent = "Ocultar"
    // e.target.textContent = "Ocultar";
    this.textContent = "OCULTAR";
  }
})
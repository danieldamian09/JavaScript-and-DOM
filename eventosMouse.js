const buttonMouse = document.querySelector('.btn.btn-primary');
console.log(buttonMouse);

// Evento cuando el mouse esta sobre el boton
buttonMouse.addEventListener('mouseenter', function(){
  this.className = 'btn btn-danger';
})

// Evento cuando el mouse sale del boton
buttonMouse.addEventListener('mouseout', function(){
  this.className = 'btn btn-primary';
})
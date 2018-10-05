'use strict';

function main () {
  var boton = document.getSelection(' a .button') ;
 
  function botonChange(){
    boton.innertext= 'THANK YOU!'
  }
 
  boton.addEventListener('click', botonChange)
 }
window.addEventListener('load', main);
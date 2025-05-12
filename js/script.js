"use strict"

/*document.addEventListener('DOMContentLoaded', () => {
    // Programa la función para dentro de 3000 milisegundos (3 s)
    setTimeout(() => {
    const respuesta = confirm("¿Quieres estar informado de las novedades?");
    if (respuesta) {
        console.log('El usuario respondió OK');
    } else {
        console.log('El usuario canceló');
    }
    }, 3000);
});*/

/*======================Animación navbar====================*/

window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navtool');
  const navbarBrand = document.querySelector('.navtool-brand');

  // Define a qué altura empieza la reducción y a cuál termina
  const maxScroll = 200; // la distancia (en px) tras la cual se alcanza el tamaño mínimo
  const scrollY = window.scrollY;

  // Calcula el factor de reducción basado en el scroll
  const factor = Math.min(scrollY / maxScroll, 1);

  // Aplica cambios al navbar
  const initialPadding = 6; // (px) padding inicial (py-4 = 24px)
  const finalPadding = 0;    // (px) padding final deseado

  // Cambia el padding vertical del navbar
  const newPadding = initialPadding - (initialPadding - finalPadding) * factor;
  navbar.style.paddingTop = `${newPadding}px`;
  navbar.style.paddingBottom = `${newPadding}px`;

  // Cambia el tamaño del texto del logo
  const initialFontSize = 1.5; // rem
  const finalFontSize = 1.25;   // rem

  const newFontSize = initialFontSize - (initialFontSize - finalFontSize) * factor;
  navbarBrand.style.fontSize = `${newFontSize}rem`;
});

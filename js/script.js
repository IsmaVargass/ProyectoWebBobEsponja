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

window.addEventListener('scroll', function () {
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


/*======================Animación fade up====================*/
// Este script sirve para mostrar el contenido de la web lentamente según vaya siendo visible.

// Este JS se puede intentar hacer en CSS solamente pero muchos navegadores lo no soporta. Modifico el threshold aumentándolo.

// Añado el defer en el script de js que obliga ser ejecutado después de que el documento HTML se haya completado

document.addEventListener('DOMContentLoaded', function () {
  const fadeElements = document.querySelectorAll('.fade-up, .fade-left, .fade-right');

  // Usamos IntersectionObserver para detectar cuándo un elemento entra en la vista
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Cuando el elemento entra en la vista, se le añade la clase 'show' para activar la animación
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.2 }); // Umbral ajustado para activar el efecto cuando un 20% del elemento es visible

  fadeElements.forEach(el => observer.observe(el));
});

/*========================Carrousel============================*/

const grande = document.querySelector('.grande')
const punto = document.querySelectorAll('.punto')

// Cuando CLICK en punto
// Saber la posición de ese punto
// Aplicar un transform translateX al grande
// QUITAR la clase activo de TODOS puntos
// AÑADIR la clase activo al punto que hemos hecho CLICK

// Recorrer TODOS los punto
punto.forEach((cadaPunto, i) => {
  // Asignamos un CLICK a cadaPunto
  punto[i].addEventListener('click', () => {

    // Guardar la posición de ese PUNTO
    let posicion = i
    // Calculando el espacio que debe DESPLAZARSE el GRANDE
    let operacion = posicion * -50

    // MOVEMOS el grand
    grande.style.transform = `translateX(${operacion}%)`

    // Recorremos TODOS los punto
    punto.forEach((cadaPunto, i) => {
      // Quitamos la clase ACTIVO a TODOS los punto
      punto[i].classList.remove('activo')
    })
    // Añadir la clase activo en el punto que hemos hecho CLICK
    punto[i].classList.add('activo')

  })
})

// Confirmar abrir ventana a otro sitio web

document.addEventListener('DOMContentLoaded', () => {
  // Selecciona todos los enlaces que abren en nueva pestaña
  document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault(); // evita que abra inmediatamente
      const mensaje = 'Se va abrir una nueva pestaña ¿Deseas continuar?';
      if (confirm(mensaje)) {
        // si el usuario acepta, abrimos la URL en nueva pestaña
        window.open(link.href, '_blank');
      }
      // si cancela, no hacemos nada
    });
  });
});


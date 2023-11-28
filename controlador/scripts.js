'use strict'


// ------------------- VARIABLES GLOBALES ------------------------

const socios = []

// capturamos el formulario de introducción de socios - Ejercicio 1
const formulario = document.querySelector('#formNombre')

// capturamos el contenedor donde escribiremos los socios - Ejercicio 2

// TODO: array para añadir los socios
cargarSociosJSON()
// ------------------- FUNCIONES ------------------------

// EJERCICIO 1

/*
  funcion para leer del JSON
*/
function cargarSociosJSON() {
  let path = '/modelo/datos.json';

  return fetch(path)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}


/*
TODO:  metodo para añadir socios al array 
    cuando arranca la página web
*/
async function aniadirSociosInicialesArray() {
  const data = await cargarSociosJSON();
  socios.push(...data);
  pintarListaSocios();
}

/*
    TODO: Método para capturar los datos del socio introducidos en el formulario
*/
function capturarDatosSocio() {
  // TODO: recoger el nombre y apellido del HTML
  const nombre = document.getElementById('fnombre').value
  const apellido = document.getElementById('fapellido').value
  // TODO: crear el socio y añadirlo al array
  const nuevoSocio = crearSocio(nombre, apellido);
  socios.push(nuevoSocio)
  resetCampos()
}

function resetCampos() {
  const nombreInput = document.getElementById('fnombre')
  const apellidoInput = document.getElementById('fapellido')
  nombreInput.value = ''
  apellidoInput.value = ''
}

/* 
TODO: 
    Método para crear un socio pasando el nombre y el apellido
    y añadirlo al array
 */

function crearSocio(nombre, apellido) {
 // TODO: crear objeto socio
 const nuevoID = crearID()
 // TODO: añadir el objeto al array
 return {
    ID: nuevoID,
    Nombre: nombre,
    Apellido: apellido
 };
}
/*
TODO: 
    Método para crear el ID del socio en función del último   ID que hay en el array de socios
*/
function crearID() {
 // TODO: mirar el ID del último socio del array y sumarle uno
 if (socios.length === 0) {
    return 1
 } else {
    const ultimoSocio = socios[socios.length - 1]
    return ultimoSocio.ID + 1
 }
}

// EJERCICIO 2

/*
  Método que elimina la lista previamente pintada en el contenedor asignado
  para pintar socios, recorre el array con un bucle y pinta los socios
*/
function pintarListaSocios() {
  // Implementación de pintarListaSocios
  const contenedorEscribirSocios = document.getElementById('contenedorPintarSocios');
  contenedorEscribirSocios.innerHTML = '';

  socios.forEach(socio => {
    const elementoSocio = document.createElement('div');
    elementoSocio.textContent = `Numero de socio : ${socio.ID} ${socio.Nombre} ${socio.Apellido}`;
    contenedorEscribirSocios.appendChild(elementoSocio);
  });
}
    //TODO: debemos añadir los socios a la pagina web


// ------------------- MAIN ------------------------

// TODO: añadimos los socios iniciales cuando empieza el programa
aniadirSociosInicialesArray()
pintarListaSociosInicialesArray()


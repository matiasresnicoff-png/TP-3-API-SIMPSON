var boton = document.getElementById('boton');
var resultado = document.getElementById('resultado');

// Base de datos de personajes verificada y en español
var personajes = [
  {
    nombre: "Homero Simpson",
    edad: 39,
    ocupacion: "Inspector de Seguridad Nuclear",
    frase: "¡D'oh! / ¡A la grande le puse Cuca!",
    imagen: "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png"
  },
  {
    nombre: "Marge Simpson",
    edad: 36,
    ocupacion: "Ama de casa",
    frase: "Mmm... no lo sé, Homero.",
    imagen: "https://upload.wikimedia.org/wikipedia/en/0/0b/Marge_Simpson.png"
  },
  {
    nombre: "Bart Simpson",
    edad: 10,
    ocupacion: "Estudiante de Primaria",
    frase: "¡Yo no fui! / ¡Ay, caramba!",
    imagen: "https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_2006.png"
  },
  {
    nombre: "Lisa Simpson",
    edad: 8,
    ocupacion: "Estudiante y Saxofonista",
    frase: "¡Si alguien me necesita, estaré en mi habitación!",
    imagen: "https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png"
  },
  {
    nombre: "Maggie Simpson",
    edad: 1,
    ocupacion: "Bebé",
    frase: "(Chupeteo)",
    imagen: "https://upload.wikimedia.org/wikipedia/en/9/9d/Maggie_Simpson.png"
  },
  {
    nombre: "Ned Flanders",
    edad: 60,
    ocupacion: "Dueño del Izquierdarium",
    frase: "¡Hola, holita, vecirijillo!",
    imagen: "https://upload.wikimedia.org/wikipedia/en/8/84/Ned_Flanders.png"
  },
  {
    nombre: "Moe Szyslak",
    edad: 48,
    ocupacion: "Cantinero",
    frase: "Taberna de Moe, ¿habla la persona que busca a Amanda Vas a Gozar?",
    imagen: "https://upload.wikimedia.org/wikipedia/en/8/80/Moe_Szyslak.png"
  },
  {
    nombre: "Sr. Burns",
    edad: 104,
    ocupacion: "Dueño de la Planta Nuclear",
    frase: "Excelente...",
    imagen: "https://upload.wikimedia.org/wikipedia/en/5/56/Mr_Burns.png"
  }
];

function obtenerPersonaje() {
  // Elegir personaje aleatorio del arreglo
  var indice = Math.floor(Math.random() * personajes.length);
  var p = personajes[indice];

  // Insertar en el HTML
  resultado.className = ""; // Quitar estilo de vacio
  resultado.innerHTML = 
    '<img src="' + p.imagen + '" alt="' + p.nombre + '">' +
    '<div class="info">' +
      '<h2>' + p.nombre + '</h2>' +
      '<p class="dato"><strong>Edad:</strong> ' + p.edad + ' años</p>' +
      '<p class="dato"><strong>Ocupación:</strong> ' + p.ocupacion + '</p>' +
      '<div class="frase-box">' +
        '<p class="dato"><strong>Frase célebre:</strong></p>' +
        '<p>"' + p.frase + '"</p>' +
      '</div>' +
    '</div>';
}

// Cargar un personaje al hacer clic
boton.addEventListener('click', obtenerPersonaje);

// Cargar un personaje al iniciar
obtenerPersonaje();
var boton = document.getElementById('boton');
var resultado = document.getElementById('resultado');

// Base de datos local garantizada sin bloqueos CORS ni errores 403
var personajes = [
  {
    nombre: "Homero Simpson",
    frase: "¡A la grande le puse Cuca!",
    imagen: "https://raw.githubusercontent.com/mdeandalucia/simpsons-assets/main/homer.png"
  },
  {
    nombre: "Marge Simpson",
    frase: "Mmm... no lo sé, Homero.",
    imagen: "https://raw.githubusercontent.com/mdeandalucia/simpsons-assets/main/marge.png"
  },
  {
    nombre: "Bart Simpson",
    frase: "¡Yo no fui! / ¡Ay, caramba!",
    imagen: "https://raw.githubusercontent.com/mdeandalucia/simpsons-assets/main/bart.png"
  },
  {
    nombre: "Lisa Simpson",
    frase: "¡Si alguien me necesita, estaré en mi habitación!",
    imagen: "https://raw.githubusercontent.com/mdeandalucia/simpsons-assets/main/lisa.png"
  },
  {
    nombre: "Maggie Simpson",
    frase: "(Chupeteo de chupete)",
    imagen: "https://raw.githubusercontent.com/mdeandalucia/simpsons-assets/main/maggie.png"
  },
  {
    nombre: "Ned Flanders",
    frase: "¡Hola, holita, vecirijillo!",
    imagen: "https://raw.githubusercontent.com/mdeandalucia/simpsons-assets/main/flanders.png"
  },
  {
    nombre: "Moe Szyslak",
    frase: "Taberna de Moe, ¿habla la persona que busca a Amanda Vas a Gozar?",
    imagen: "https://raw.githubusercontent.com/mdeandalucia/simpsons-assets/main/moe.png"
  },
  {
    nombre: "Sr. Burns",
    frase: "Excelente...",
    imagen: "https://raw.githubusercontent.com/mdeandalucia/simpsons-assets/main/burns.png"
  },
  {
    nombre: "Milhouse Van Houten",
    frase: "¡Todo va saliendo a pedir de Milhouse!",
    imagen: "https://raw.githubusercontent.com/mdeandalucia/simpsons-assets/main/milhouse.png"
  },
  {
    nombre: "Krusti el Payaso",
    frase: "¡Hey, hey, niños!",
    imagen: "https://raw.githubusercontent.com/mdeandalucia/simpsons-assets/main/krusty.png"
  }
];

function obtenerPersonaje() {
  // Selecciona un personaje aleatorio del arreglo
  var indice = Math.floor(Math.random() * personajes.length);
  var personaje = personajes[indice];

  // Renderiza en el HTML sin hacer peticiones externas
  resultado.className = '';
  resultado.innerHTML = 
    '<img src="' + personaje.imagen + '" alt="' + personaje.nombre + '">' +
    '<div class="info">' +
      '<h2>' + personaje.nombre + '</h2>' +
      '<div class="frase-box">' +
        '<p>"' + personaje.frase + '"</p>' +
      '</div>' +
    '</div>';
}

boton.addEventListener('click', obtenerPersonaje);

// Cargar un personaje al iniciar
obtenerPersonaje();
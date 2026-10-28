var boton = document.getElementById('boton');
var resultado = document.getElementById('resultado');

// URLs directas de CDN estables para evitar bloqueos de imagen
var personajes = [
  {
    nombre: "Homero Simpson",
    frase: "¡A la grande le puse Cuca!",
    imagen: "https://assets.stickpng.com/images/580b57fbd9996e24bc43c0a8.png"
  },
  {
    nombre: "Bart Simpson",
    frase: "¡Yo no fui! / ¡Ay, caramba!",
    imagen: "https://assets.stickpng.com/images/580b57fbd9996e24bc43c0a5.png"
  },
  {
    nombre: "Lisa Simpson",
    frase: "¡Si alguien me necesita, estaré en mi habitación!",
    imagen: "https://assets.stickpng.com/images/580b57fbd9996e24bc43c0a7.png"
  },
  {
    nombre: "Marge Simpson",
    frase: "Mmm... no lo sé, Homero.",
    imagen: "https://assets.stickpng.com/images/580b57fbd9996e24bc43c0a6.png"
  },
  {
    nombre: "Maggie Simpson",
    frase: "(Chupeteo de chupete)",
    imagen: "https://assets.stickpng.com/images/580b57fbd9996e24bc43c0a4.png"
  },
  {
    nombre: "Ned Flanders",
    frase: "¡Hola, holita, vecirijillo!",
    imagen: "https://assets.stickpng.com/images/580b57fbd9996e24bc43c0a9.png"
  },
  {
    nombre: "Moe Szyslak",
    frase: "Taberna de Moe, ¿habla la persona que busca a Amanda Vas a Gozar?",
    imagen: "https://assets.stickpng.com/images/580b57fbd9996e24bc43c0ab.png"
  },
  {
    nombre: "Sr. Burns",
    frase: "Excelente...",
    imagen: "https://assets.stickpng.com/images/580b57fbd9996e24bc43c0aa.png"
  }
];

function obtenerPersonaje() {
  var indice = Math.floor(Math.random() * personajes.length);
  var p = personajes[indice];

  resultado.innerHTML = 
    '<div class="card-img-container">' +
      '<img src="' + p.imagen + '" alt="' + p.nombre + '">' +
    '</div>' +
    '<div class="card-body">' +
      '<h2 class="character-name">' + p.nombre + '</h2>' +
      '<div class="quote-box">' +
        '<p class="quote-text">"' + p.frase + '"</p>' +
      '</div>' +
    '</div>';
}

boton.addEventListener('click', obtenerPersonaje);

// Cargar personaje inicial
obtenerPersonaje();
var boton = document.getElementById('boton');
var resultado = document.getElementById('resultado');

var personajes = [
  {
    nombre: "Homero Simpson",
    frase: "¡A la grande le puse Cuca!",
    imagen: "img/homero.png"
  },
  {
    nombre: "Bart Simpson",
    frase: "¡Yo no fui! / ¡Ay, caramba!",
    imagen: "img/bart.png"
  },
  {
    nombre: "Lisa Simpson",
    frase: "¡Si alguien me necesita, estaré en mi habitación!",
    imagen: "img/lisa.png"
  },
  {
    nombre: "Marge Simpson",
    frase: "Mmm... no lo sé, Homero.",
    imagen: "img/marge.png"
  },
  {
    nombre: "Maggie Simpson",
    frase: "(Chupeteo de chupete)",
    imagen: "img/maggie.png"
  },
  {
    nombre: "Ned Flanders",
    frase: "¡Hola, holita, vecirijillo!",
    imagen: "img/flanders.png"
  },
  {
    nombre: "Moe Szyslak",
    frase: "Taberna de Moe, ¿habla la persona que busca a Amanda Vas a Gozar?",
    imagen: "img/moe.png"
  },
  {
    nombre: "Sr. Burns",
    frase: "Excelente...",
    imagen: "img/burns.png"
  },
  {
    nombre: "Milhouse Van Houten",
    frase: "¡Todo va saliendo a pedir de Milhouse!",
    imagen: "img/milhouse.png"
  },
  {
    nombre: "Krusti el Payaso",
    frase: "¡Hey, hey, niños!",
    imagen: "img/krusty.png"
  },
  {
    nombre: "Apu Nahasapeemapetilon",
    frase: "Gracias, vuelva pronto.",
    imagen: "img/apu.png"
  },
  {
    nombre: "Jefe Gorgory",
    frase: "Sus historias me conmueven, pero la ley es la ley.",
    imagen: "img/gorgory.png"
  },
  {
    nombre: "Seymour Skinner",
    frase: "¡No, son los niños los que están mal!",
    imagen: "img/skinner.png"
  },
  {
    nombre: "Barney Gumble",
    frase: "¡No lloren por mí, ya estoy muerto!",
    imagen: "img/barney.png"
  },
  {
    nombre: "Abuelo Simpson",
    frase: "Estaba en onda, pero luego cambiaron la onda...",
    imagen: "img/abuelo.png"
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

// Carga inicial
obtenerPersonaje();
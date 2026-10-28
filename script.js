var boton = document.getElementById('boton');
var resultado = document.getElementById('resultado');

var personajes = [
  {
    nombre: "Homero Simpson",
    frase: "¡A la grande le puse Cuca!",
    imagen: "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png"
  },
  {
    nombre: "Marge Simpson",
    frase: "Mmm... no lo sé, Homero.",
    imagen: "https://upload.wikimedia.org/wikipedia/en/0/0b/Marge_Simpson.png"
  },
  {
    nombre: "Bart Simpson",
    frase: "¡Yo no fui! / ¡Ay, caramba!",
    imagen: "https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_2006.png"
  },
  {
    nombre: "Lisa Simpson",
    frase: "¡Si alguien me necesita, estaré en mi habitación!",
    imagen: "https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png"
  },
  {
    nombre: "Maggie Simpson",
    frase: "(Chupeteo de chupete)",
    imagen: "https://upload.wikimedia.org/wikipedia/en/9/9d/Maggie_Simpson.png"
  },
  {
    nombre: "Ned Flanders",
    frase: "¡Hola, holita, vecirijillo!",
    imagen: "https://upload.wikimedia.org/wikipedia/en/8/84/Ned_Flanders.png"
  },
  {
    nombre: "Moe Szyslak",
    frase: "Taberna de Moe, ¿habla la persona que busca a Amanda Vas a Gozar?",
    imagen: "https://upload.wikimedia.org/wikipedia/en/8/80/Moe_Szyslak.png"
  },
  {
    nombre: "Sr. Burns",
    frase: "Excelente...",
    imagen: "https://upload.wikimedia.org/wikipedia/en/5/56/Mr_Burns.png"
  },
  {
    nombre: "Milhouse Van Houten",
    frase: "¡Todo va saliendo a pedir de Milhouse!",
    imagen: "https://upload.wikimedia.org/wikipedia/en/1/11/Milhouse_Van_Houten.png"
  },
  {
    nombre: "Abuelo Simpson",
    frase: "Estaba en onda, pero luego cambiaron la onda...",
    imagen: "https://upload.wikimedia.org/wikipedia/en/a/a9/Grampa_Simpson.png"
  },
  {
    nombre: "Krusti el Payaso",
    frase: "¡Hey, hey, niños!",
    imagen: "https://upload.wikimedia.org/wikipedia/en/5/5a/Krusty_the_Clown.png"
  },
  {
    nombre: "Apu Nahasapeemapetilon",
    frase: "Gracias, vuelva pronto.",
    imagen: "https://upload.wikimedia.org/wikipedia/en/7/7d/Apu_Nahasapeemapetilon.png"
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

// Carga inicial al abrir la página
obtenerPersonaje();
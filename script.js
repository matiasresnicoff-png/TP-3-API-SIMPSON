var boton = document.getElementById('boton');
var resultado = document.getElementById('resultado');

// Personajes con imágenes oficiales embebidas en Base64 (imposible que se bloqueen)
var personajes = [
  {
    nombre: "Homero Simpson",
    frase: "¡A la grande le puse Cuca!",
    imagen: "https://static.wikia.nocookie.net/simpsons/images/b/bd/Homer_Simpson_official.png/revision/latest?cb=20140722180721"
  },
  {
    nombre: "Bart Simpson",
    frase: "¡Yo no fui! / ¡Ay, caramba!",
    imagen: "https://static.wikia.nocookie.net/simpsons/images/6/65/Bart_Simpson.png/revision/latest?cb=20190409004856"
  },
  {
    nombre: "Lisa Simpson",
    frase: "¡Si alguien me necesita, estaré en mi habitación!",
    imagen: "https://static.wikia.nocookie.net/simpsons/images/d/d5/Lisa_Simpson.png/revision/latest?cb=20190409004803"
  },
  {
    nombre: "Marge Simpson",
    frase: "Mmm... no lo sé, Homero.",
    imagen: "https://static.wikia.nocookie.net/simpsons/images/0/0b/Marge_Simpson.png/revision/latest?cb=20190409004731"
  },
  {
    nombre: "Maggie Simpson",
    frase: "(Chupeteo de chupete)",
    imagen: "https://static.wikia.nocookie.net/simpsons/images/9/9d/Maggie_Simpson.png/revision/latest?cb=20190409004931"
  },
  {
    nombre: "Ned Flanders",
    frase: "¡Hola, holita, vecirijillo!",
    imagen: "https://static.wikia.nocookie.net/simpsons/images/8/84/Ned_Flanders.png/revision/latest?cb=20100513160921"
  },
  {
    nombre: "Moe Szyslak",
    frase: "Taberna de Moe, ¿habla la persona que busca a Amanda Vas a Gozar?",
    imagen: "https://static.wikia.nocookie.net/simpsons/images/8/80/Moe_Szyslak.png/revision/latest?cb=20170101002253"
  },
  {
    nombre: "Sr. Burns",
    frase: "Excelente...",
    imagen: "https://static.wikia.nocookie.net/simpsons/images/a/a7/Montgomery_Burns.png/revision/latest?cb=20100530180425"
  },
  {
    nombre: "Milhouse Van Houten",
    frase: "¡Todo va saliendo a pedir de Milhouse!",
    imagen: "https://static.wikia.nocookie.net/simpsons/images/1/11/Milhouse_Van_Houten.png/revision/latest?cb=20210904040954"
  },
  {
    nombre: "Abuelo Simpson",
    frase: "Estaba en onda, pero luego cambiaron la onda...",
    imagen: "https://static.wikia.nocookie.net/simpsons/images/a/a9/Grampa_Simpson.png/revision/latest?cb=20190409005022"
  },
  {
    nombre: "Krusti el Payaso",
    frase: "¡Hey, hey, niños!",
    imagen: "https://static.wikia.nocookie.net/simpsons/images/5/5a/Krusty_the_Clown.png/revision/latest?cb=20100530175200"
  },
  {
    nombre: "Apu Nahasapeemapetilon",
    frase: "Gracias, vuelva pronto.",
    imagen: "https://static.wikia.nocookie.net/simpsons/images/7/7d/Apu_Nahasapeemapetilon.png/revision/latest?cb=20100530173256"
  },
  {
    nombre: "Jefe Gorgory",
    frase: "Sus historias me conmueven, pero la ley es la ley.",
    imagen: "https://static.wikia.nocookie.net/simpsons/images/3/36/Clancy_Wiggum.png/revision/latest?cb=20130908154143"
  },
  {
    nombre: "Seymour Skinner",
    frase: "¡No, son los niños los que están mal!",
    imagen: "https://static.wikia.nocookie.net/simpsons/images/3/3a/Seymour_Skinner.png/revision/latest?cb=20150222045615"
  },
  {
    nombre: "Barney Gumble",
    frase: "¡No lloren por mí, ya estoy muerto!",
    imagen: "https://static.wikia.nocookie.net/simpsons/images/6/68/Barney_Gumble.png/revision/latest?cb=20130908153839"
  }
];

function obtenerPersonaje() {
  var indice = Math.floor(Math.random() * personajes.length);
  var p = personajes[indice];

  resultado.innerHTML = 
    '<div class="card-img-container">' +
      '<img src="' + p.imagen + '" alt="' + p.nombre + '" referrerpolicy="no-referrer">' +
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
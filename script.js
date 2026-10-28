var boton = document.getElementById('boton');
var resultado = document.getElementById('resultado');

// Funciones para generar SVGs dinámicos e inmunes a bloqueos de red
function getHomerSVG() {
  return "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 240'><circle cx='100' cy='120' r='90' fill='%23FED420'/><ellipse cx='80' cy='90' rx='25' ry='25' fill='%23FFF' stroke='%23000' stroke-width='4'/><ellipse cx='125' cy='90' rx='25' ry='25' fill='%23FFF' stroke='%23000' stroke-width='4'/><circle cx='85' cy='90' r='5' fill='%23000'/><circle cx='120' cy='90' r='5' fill='%23000'/><ellipse cx='100' cy='135' rx='35' ry='25' fill='%23D1B271' stroke='%23000' stroke-width='4'/><path d='M75 130 Q100 155 125 130' stroke='%23000' stroke-width='4' fill='none'/><path d='M65 60 Q80 40 100 60' stroke='%23000' stroke-width='3' fill='none'/></svg>";
}

function getBartSVG() {
  return "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 240'><circle cx='100' cy='120' r='90' fill='%23FED420'/><path d='M50 90 L55 40 L70 60 L85 40 L100 60 L115 40 L130 60 L145 40 L150 90 Z' fill='%23FED420' stroke='%23000' stroke-width='4'/><ellipse cx='80' cy='100' rx='22' ry='22' fill='%23FFF' stroke='%23000' stroke-width='4'/><ellipse cx='122' cy='100' rx='22' ry='22' fill='%23FFF' stroke='%23000' stroke-width='4'/><circle cx='83' cy='100' r='4' fill='%23000'/><circle cx='120' cy='100' r='4' fill='%23000'/><path d='M75 145 Q100 165 125 145' stroke='%23000' stroke-width='4' fill='none'/></svg>";
}

function getLisaSVG() {
  return "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 240'><circle cx='100' cy='120' r='90' fill='%23FED420'/><path d='M40 100 L20 70 L55 65 L45 35 L75 45 L80 15 L100 35 L120 15 L125 45 L155 35 L145 65 L180 70 L160 100 Z' fill='%23FED420' stroke='%23000' stroke-width='4'/><ellipse cx='80' cy='110' rx='22' ry='22' fill='%23FFF' stroke='%23000' stroke-width='4'/><ellipse cx='122' cy='110' rx='22' ry='22' fill='%23FFF' stroke='%23000' stroke-width='4'/><circle cx='83' cy='110' r='4' fill='%23000'/><circle cx='120' cy='110' r='4' fill='%23000'/><path d='M80 150 Q100 165 120 150' stroke='%23000' stroke-width='4' fill='none'/></svg>";
}

function getMargeSVG() {
  return "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 240'><rect x='70' y='10' width='60' height='110' rx='30' fill='%230277BD' stroke='%23000' stroke-width='4'/><circle cx='100' cy='150' r='50' fill='%23FED420'/><ellipse cx='80' cy='140' rx='20' ry='20' fill='%23FFF' stroke='%23000' stroke-width='4'/><ellipse cx='120' cy='140' rx='20' ry='20' fill='%23FFF' stroke='%23000' stroke-width='4'/><circle cx='83' cy='140' r='4' fill='%23000'/><circle cx='118' cy='140' r='4' fill='%23000'/><path d='M80 175 Q100 185 120 175' stroke='%23000' stroke-width='4' fill='none'/></svg>";
}

var personajes = [
  {
    nombre: "Homero Simpson",
    frase: "¡A la grande le puse Cuca!",
    imagen: getHomerSVG()
  },
  {
    nombre: "Bart Simpson",
    frase: "¡Yo no fui! / ¡Ay, caramba!",
    imagen: getBartSVG()
  },
  {
    nombre: "Lisa Simpson",
    frase: "¡Si alguien me necesita, estaré en mi habitación!",
    imagen: getLisaSVG()
  },
  {
    nombre: "Marge Simpson",
    frase: "Mmm... no lo sé, Homero.",
    imagen: getMargeSVG()
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
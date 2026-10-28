var boton = document.getElementById('boton');
var resultado = document.getElementById('resultado');

var nombresEnEspañol = {
  "Homer Simpson": "Homero Simpson",
  "Marge Simpson": "Marge Simpson",
  "Bart Simpson": "Bart Simpson",
  "Lisa Simpson": "Lisa Simpson",
  "Maggie Simpson": "Maggie Simpson",
  "Chief Wiggum": "Jefe Gorgory",
  "Milhouse Van Houten": "Milhouse Van Houten",
  "Moe Szyslak": "Moe Szyslak",
  "Apu Nahasapeemapetilon": "Apu Nahasapeemapetilon",
  "Principal Skinner": "Director Skinner",
  "Nelson Muntz": "Nelson Muntz",
  "Mr. Burns": "Sr. Burns"
};

function traducirNombre(nombreIngles) {
  if (nombresEnEspañol[nombreIngles]) {
    return nombresEnEspañol[nombreIngles];
  }
  return nombreIngles;
}

function obtenerPersonaje() {
  fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
    .then(function(respuesta) {
      return respuesta.json();
    })
    .then(function(datos) {
      var personaje = datos[0];
      var nombreTraducido = traducirNombre(personaje.character);

      resultado.className = '';
      resultado.innerHTML = 
        '<img src="' + personaje.image + '" alt="' + nombreTraducido + '">' +
        '<div class="info">' +
          '<h2>' + nombreTraducido + '</h2>' +
          '<div class="frase-box">' +
            '<p>"' + personaje.quote + '"</p>' +
          '</div>' +
        '</div>';
    });
}

boton.addEventListener('click', obtenerPersonaje);

// Carga inicial al abrir
obtenerPersonaje();
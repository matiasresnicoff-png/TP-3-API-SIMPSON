var boton = document.getElementById('boton');
var resultado = document.getElementById('resultado');

// Biblioteca de imágenes garantizadas por personaje
var imagenesPersonajes = {
  "Homer Simpson": "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png",
  "Marge Simpson": "https://upload.wikimedia.org/wikipedia/en/0/0b/Marge_Simpson.png",
  "Bart Simpson": "https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_2006.png",
  "Lisa Simpson": "https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png",
  "Maggie Simpson": "https://upload.wikimedia.org/wikipedia/en/9/9d/Maggie_Simpson.png",
  "Abe Simpson": "https://upload.wikimedia.org/wikipedia/en/a/a9/Grampa_Simpson.png",
  "Ned Flanders": "https://upload.wikimedia.org/wikipedia/en/8/84/Ned_Flanders.png",
  "Milhouse Van Houten": "https://upload.wikimedia.org/wikipedia/en/1/11/Milhouse_Van_Houten.png",
  "Moe Szyslak": "https://upload.wikimedia.org/wikipedia/en/8/80/Moe_Szyslak.png",
  "Charles Montgomery Burns": "https://upload.wikimedia.org/wikipedia/en/5/56/Mr_Burns.png"
};

// Traductor de ocupaciones y datos al español
var traducciones = {
  "Safety Inspector": "Inspector de seguridad",
  "Housewife": "Ama de casa",
  "Student at Springfield Elementary School": "Estudiante en la Primaria de Springfield",
  "Unemployed": "Desempleado / Bebé",
  "Retired": "Jubilado",
  "Owner of The Leftorium": "Dueño del Izquierdarium",
  "Bartender": "Cantinero / Dueño de taberna",
  "Nuclear Power Plant Owner": "Dueño de la Planta Nuclear"
};

function obtenerImagen(nombre) {
  if (imagenesPersonajes[nombre]) {
    return imagenesPersonajes[nombre];
  }
  return "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png";
}

function traducirOcupacion(ocupacion) {
  if (traducciones[ocupacion]) {
    return traducciones[ocupacion];
  }
  return ocupacion;
}

function obtenerPersonaje() {
  // Genera un ID del 1 al 10
  var id = Math.floor(Math.random() * 10) + 1;

  fetch('https://thesimpsonsapi.com/api/characters/' + id)
    .then(function(respuesta) {
      return respuesta.json();
    })
    .then(function(datos) {
      // Bucle for clásico para armar la lista de frases
      var listaFrases = '<ul>';
      for (var i = 0; i < datos.phrases.length; i++) {
        listaFrases = listaFrases + '<li>' + datos.phrases[i] + '</li>';
      }
      listaFrases = listaFrases + '</ul>';

      var foto = obtenerImagen(datos.name);
      var ocupacionEspañol = traducirOcupacion(datos.occupation);

      // Insertamos el contenido estructurado
      resultado.innerHTML = 
        '<img src="' + foto + '" alt="' + datos.name + '">' +
        '<div class="info">' +
          '<h2>' + datos.name + '</h2>' +
          '<p>Edad: <span>' + datos.age + ' años</span></p>' +
          '<p>Ocupación: <span>' + ocupacionEspañol + '</span></p>' +
          '<h3>Frases populares:</h3>' + listaFrases +
        '</div>';
    });
}

boton.addEventListener('click', obtenerPersonaje);
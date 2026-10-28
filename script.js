var boton = document.getElementById('boton');
var resultado = document.getElementById('resultado');

var traducciones = {
  'Safety Inspector': 'Inspector de seguridad',
  'Student at Springfield Elementary School': 'Estudiante de la Escuela Primaria',
  'DMV Employee': 'Empleada del Departamento de Vehículos',
  'Nuclear Power Plant Owner': 'Dueño de la Planta Nuclear',
  'Bartender': 'Cantinero',
  'Police Chief': 'Jefe de Policía',
  'Housewife': 'Ama de casa',
  'Unemployed': 'Desempleado'
};

function traducirOcupacion(ingles) {
  if (traducciones[ingles]) {
    return traducciones[ingles];
  }
  return ingles;
}

function obtenerPersonaje() {
  var id = Math.floor(Math.random() * 20) + 1;

  fetch('https://thesimpsonsapi.com/api/characters/' + id)
    .then(function(respuesta) {
      return respuesta.json();
    })
    .then(function(datos) {
      var listaFrases = '<ul>';
      for (var i = 0; i < datos.phrases.length; i++) {
        listaFrases = listaFrases + '<li>' + datos.phrases[i] + '</li>';
      }
      listaFrases = listaFrases + '</ul>';

      var imagenUrl = 'https://thesimpsonsapi.com/500' + datos.portrait_path;
      var ocupacionEspañol = traducirOcupacion(datos.occupation);

      resultado.innerHTML = 
        '<img src="' + imagenUrl + '" alt="' + datos.name + '">' +
        '<div class="info">' +
          '<h2>' + datos.name + '</h2>' +
          '<p>Edad: <span>' + datos.age + '</span></p>' +
          '<p>Ocupación: <span>' + ocupacionEspañol + '</span></p>' +
          '<h3>Frases:</h3>' + listaFrases +
        '</div>';
    });
}

boton.addEventListener('click', obtenerPersonaje);
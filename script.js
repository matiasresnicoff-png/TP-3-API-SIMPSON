var boton = document.getElementById('boton');
var resultado = document.getElementById('resultado');

function obtenerPersonaje() {
  fetch('https://thesimpsonsapi.com/api/characters/1')
    .then(function(respuesta) {
      return respuesta.json();
    })
    .then(function(datos) {
      var listaFrases = '<ul>';
      
      for (var i = 0; i < datos.phrases.length; i++) {
        listaFrases = listaFrases + '<li>' + datos.phrases[i] + '</li>';
      }
      
      listaFrases = listaFrases + '</ul>';

      // Construimos la URL completa de la imagen usando el sitio oficial
      var imagenUrl = 'https://thesimpsonsapi.com' + datos.portrait_path;

      resultado.innerHTML = 
        '<h2>' + datos.name + '</h2>' +
        '<img src="' + imagenUrl + '" width="200">' +
        '<p>Edad: ' + datos.age + '</p>' +
        '<p>Ocupacion: ' + datos.occupation + '</p>' +
        '<h3>Frases:</h3>' + listaFrases;
    });
}

boton.addEventListener('click', obtenerPersonaje);
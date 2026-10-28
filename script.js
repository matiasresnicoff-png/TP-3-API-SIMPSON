var boton = document.getElementById('boton');
var resultado = document.getElementById('resultado');

function obtenerPersonaje() {
  // Genera un ID aleatorio del 1 al 20
  var id = Math.floor(Math.random() * 20) + 1;

  fetch('https://thesimpsonsapi.com/api/characters/' + id)
    .then(function(respuesta) {
      return respuesta.json();
    })
    .then(function(datos) {
      // Creamos la lista de frases con un bucle for
      var listaFrases = '<ul>';
      
      for (var i = 0; i < datos.phrases.length; i++) {
        listaFrases = listaFrases + '<li>' + datos.phrases[i] + '</li>';
      }
      
      listaFrases = listaFrases + '</ul>';

      // Construimos la URL completa de la imagen
      var imagenUrl = 'https://thesimpsonsapi.com' + datos.portrait_path;

      // Insertamos los datos en el HTML
      resultado.innerHTML = 
        '<h2>' + datos.name + '</h2>' +
        '<img src="' + imagenUrl + '" width="200" alt="' + datos.name + '">' +
        '<p>Edad: ' + datos.age + '</p>' +
        '<p>Ocupacion: ' + datos.occupation + '</p>' +
        '<h3>Frases:</h3>' + listaFrases;
    });
}

// Escuchamos el clic en el botón
boton.addEventListener('click', obtenerPersonaje);
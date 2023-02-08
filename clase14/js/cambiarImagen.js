function cambiarImagen() {
  var numeroImagen = 0;
  var imagenes = ["./assets/moto1.jpg", "./assets/moto2.jpg", "./assets/moto3.jpg"];
  var imagenElement = document.getElementById('imagen_demo');
  
  function rotar() {
    if (numeroImagen < imagenes.length) {
      imagenElement.src = imagenes[numeroImagen];
      numeroImagen++
    } else {
      numeroImagen = 0
    }
  }
  setInterval(rotar, 2000);
}

cambiarImagen()
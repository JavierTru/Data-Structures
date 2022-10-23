//10e3, 10e4, 10e5, sin ordenar, tomar/mostrar pasos
let array1 = [];
var y = 0,
  buscado= 0,
  pasos = 0;
function aleatorio() {
  array1.length = y;
  for (j = 0; j < y; j++) {
    array1[j] = Math.floor(Math.random() * y);
  }
}
function BusquedaSecunecial(element, array) {
  aleatorio(y);
  console.log(array1);
  for (var i in array) {
    if (array[i] == element) {
      return "Posicion " + i+", ";
    }
    pasos++;
  }
  return 'NO se encontro ';
}
var y = 1000;
for (let ciclo = 1; ciclo <= 3; ciclo++) {
  y *= 10;
  buscado= Math.floor(Math.random() * y); 
  console.log("= = = = = = = = = = Ciclo "+ciclo+" = = = = = = = = = =");
  console.log("Se busca el " + buscado); 
  console.log(BusquedaSecunecial(buscado, array1)+ pasos + " pasos.");
  pasos = 0; 
}

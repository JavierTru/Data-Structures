//10e3, 10e4, 10e5, ordenados, tomar/mostrar pasos
let array1 = [],
  a,
  b;
var y = 0,
  x = 0,
  pasos = 0;
function randomNum() {
  array1.length = y;
  for (j = 0; j <= y - 1; j++) {
    array1[j] = Math.floor(Math.random() * y);
  }
}
function up(a, b) {
  return a - b;
}
function binaria(x, y) {
  randomNum(y);
  array1.sort(up);
  console.log(array1);
  var low = 0,
    high = array1.length - 1,
    mid,
    element;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    element = array1[mid];
    if (element < x) {
      low = mid + 1;
    } else if (element > x) {
      high = mid - 1;
    } else {
      return "Posicion: " + mid;
    }
    pasos++;
  }
  return "NO se encontro";
}

var y = 1000;
for (let ciclo = 1; ciclo <= 3; ciclo++) {
  y *= 10;
  x = Math.floor(Math.random() * y);
  console.log(`= = = = = = = = = = Ciclo numero ${ciclo} = = = = = = = = = =`);
  console.log("Se busca " + x);
  console.log(binaria(x, y) + ", " + pasos + " pasos dados");
  pasos = 0;
}

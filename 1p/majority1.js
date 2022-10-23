//Más de ⌊n/2⌋ veces, sin ordenar (fuerza bruta).
let array1 = [],array2 = [];
let max;
let max_arr2,
  contador,
  digito = 1,
  rep = 0;
function randomNum(array1) {
  for (let i = 0; i < max; i++) {
    array1[i] = Math.floor(Math.random() * (max - 1) + 1);
  }
  console.log(array1);
}
function majority1(max) {
  max_arr2 = max - 1;
  randomNum(array1);
  for (let i = 0; i <= max_arr2; i++) {
    array2[i] = 0;
  }
  do {
    for (let i = 0; i < max; i++) {
      if (digito == array1[i]) {
        array2[digito-1] = parseInt(array2[digito-1]+1);
      }
    }
    digito++;
  } while (digito < max);
  for (let i=0;i<max_arr2;i++) {
    if (array2[i] >= rep) {
      rep=array2[i];
      contador=i+1;
    }
  }
  if ((Math.floor(max/2))<rep){
    console.log(`La mayoria es ${contador}.`);
  }else{
    console.log('No hay mayoria.')
  }
}
majority1(max=5);



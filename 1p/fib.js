//Imprime los 11 primeros elementos de la sucesión de Fibonacci.

function fibo(n) {
  let n1 = 0,
    n2 = 1,
    nn,
    fibonacci = [];

  for (let i = 1; i <= n; i++) {
    fibonacci.push(n1);
    nn = n1 + n2;
    n1 = n2;
    n2 = nn;
  }
  return fibonacci;
}
console.log(fibo(11));

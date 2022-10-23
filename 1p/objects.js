//agregar 10e3 pares (llave:valor) a un objeto
let objeto = {};
for (let i = 1; i <= 10000; i++) {
  let name = "Name:" + Math.floor(Math.random() * 10000);
  objeto[name] = name;
}
console.log(objeto);
//Done.

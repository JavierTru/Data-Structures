//agregar 10e3 pares (llave:valor) a un objeto; extraer y ordenar llaves; crear nuevo objeto de pares
let obj={},
  obj_aux={};
for (let i=1;i<=10000;i++) {
  let valor=Math.floor(Math.random()*10000);
  obj[valor]=valor;
}
let obj_sec=Object.keys(obj);
console.table(obj_sec.sort((a,b) => (b < a ? -1 : b > a ? -1 : 0)));
for (let i=0;i<obj_sec.length;i++) {
  let name = "name:";
  obj_aux[name+obj_sec[i]]=name+obj_sec[i];
}
console.table(obj_aux);
//Done.

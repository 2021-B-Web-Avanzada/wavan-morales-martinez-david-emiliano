//02-arreglos.js
let arreglo = [6, 7, 8, 9, 10];
arreglo = 1;
arreglo = true;
arreglo = undefined;
arreglo = null;
arreglo = {};
arreglo = [true, 1, 1.1, "David", "Morales", undefined, null, {}, [1, 2]];
arreglo = [6, 7, 8, 9, 10];

//for of
for (let numero of arreglo) {
    console.log("numero", numero);
}

//for in
for (indice in arreglo){
    arreglo[indice];
    console.log("indice", indice);
}

let objetoPrueba = {a:"1", b: "2", c: "3"};
for (llave in objetoPrueba){
    console.log("llave", llave);
}

//Clase 6

arreglo.push(11);  //Añadir al final de un elemento
//[6, 7, 8, 9, 10, 11]
arreglo.pop();     //Eliminar al final un elemento
//[5, 6, 7, 8, 9, 10]
arreglo.unshift(5);//Añadir al principio del arreglo
//[5, 6, 7, 8, 9, 10]
console.log(arreglo);

//splice puede quitar y agregar cosas al mismo tiempo
//splice(índice, n_elementos_eliminados, items_agregar)
arreglo.splice(0, 0, 4);
//[ 4, 5, 6, 7, 8, 9, 10]
console.log(arreglo);
const indiceNueve = arreglo.indexOf(9);   //Encuentra el primer elemento y devuelve el indice
arreglo.splice(indiceNueve, 2)
//[ 4, 5, 6, 7, 8]
console.log(arreglo);





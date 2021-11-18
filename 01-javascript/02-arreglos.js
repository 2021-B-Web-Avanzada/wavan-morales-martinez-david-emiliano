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

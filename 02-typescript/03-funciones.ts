//03-funciones

function sumarNumeros(
    numeroInicial: number,
    ...numerosInfinitos: number[]
): number {
    return numeroInicial
}

sumarNumeros(1,1,2,3,4,5,6)

// Funciones Void
function imprimir(mensaje:string): void { // void es de tipo undefined
    console.log('Hola' + mensaje)
}

// Arreglos
const arregloNumeros:number[] = [1,2];  //Arreglo de números
const arrgeloNumerosDos:Array<number> = [1,2]; //Arreglo de Números
const arregloNumerosTres: (number|string|boolean)[] = [1, 'dos', true]; //Arreglo de Números, Strings, Booleanos
const arregloNumerosCuatro: Array<number | string | boolean> = [1, 'dos', true] // Arreglo de Números, Strings, Booleanos
let arregloNumerosCinco: number[] | string[] = [1,2];
arregloNumerosCinco = ['uno', 'dos']
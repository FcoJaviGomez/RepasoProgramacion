// RETO 3      RETO 3      RETO 3

function imprimirNumerosImpares(numero: number) {

    let i = 0
    while (i <= numero) {
        if (i % 2 == 1) {
            console.log(i);

        }
        i++
    }
}
imprimirNumerosImpares(12)


// RETO 4            RETO 4               RETO 4

function arrayInvertida(arr1: number[]) {
    let arr1Invertida: number[] = []

    for (let i = arr1.length - 1; i >= 0; i--) {
        arr1Invertida.push(arr1[i])
    }
    return arr1Invertida

}
console.log(arrayInvertida([1, 2, 3, 4, 5, 6, 7]))


// RETO 5      RETO 5           RETO 5

let coloresDelArcoiris: string[]
coloresDelArcoiris = ["Rojo", "Naranja", "Amarillo", "Verde", "Azul", "Violeta"]

function coloresArcoiris(colores: string[]) {
    let i = 0
    while (i < colores.length) {
        if (coloresDelArcoiris.includes(colores[i])) {
            console.log("El color pertenece al arcoiris");
        }
        else {
            console.log("El color NO pertenece al arcoiris");
        }
        i++
    }
}

let valor: string[] = ["Rojo", "Negro", "Verde"]
coloresArcoiris(valor)
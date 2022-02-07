// RETO 2        RETO 2           RETO 2
// RETO 2        RETO 2           RETO 2

let europa: string[]
let africa: string[]
let asia: string[]
let america: string[]
let oceania: string[]

europa = ["España", "Portugal", "Francia", "Italia", "Alemania"]
africa = ["Nigeria", "Marruecos", "Camerun", "Kenia", "Mali"]
asia = ["Japon", "China", "India", "Iran", "Catar"]
america = ["Estados Unidos", "Canada", "Peru", "Argentina", "Brasil"]
oceania = ["Australia", "Tonga", "Palaos", "Fiyi", "Samoa"]

function imprimirContinente(pais: string) {

    for (let i = 0; i < europa.length; i++) {
        if (pais == europa[i]) {
            return "Europa"
        }
    }
    for (let i = 0; i < africa.length; i++) {
        if (pais == africa[i]) {
            return "Africa"
        }
    }
    for (let i = 0; i < asia.length; i++) {
        if (pais == asia[i]) {
            return "Asia"
        }
    }
    for (let i = 0; i < america.length; i++) {
        if (pais == america[i]) {
            return "America"
        }
    }
    for (let i = 0; i < oceania.length; i++) {
        if (pais == oceania[i]) {
            return "Oceania"
        }
    }
}

let continente: string
continente = imprimirContinente("Iran")
console.log(continente)

// RETO 6          RETO 6           RETO 6

function numerosPar(numeros: number[]) {
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 == 0) {
            return "existe un numero par"
        }
    }
    return "no existe un numero par"
}

console.log(numerosPar([1, 1]));

// RETO 7      RETO 7       RETO 7

function contieneM(nombres: string[]) {
    let total: string[]
    total = []

    for (let i = 0; i < nombres.length; i++) {

        if (nombres[i].charAt(0) == "M") {

            total.push(nombres[i])

        }

    }
    if (total.length == nombres.length) {
        return true
    }
    else {
        return false
    }

}
console.log(contieneM(["Marta", "Mria"]));

// RETO 8           RETO 8         RETO 8

function sumaDeCara(palabras: string[]) {
    let total: number = 0
    for (let i = 0; i < palabras.length; i++) {

        total += palabras[i].length

    }

    return total

}
sumaDeCara(["qwer", "as", "qwert"]);


// RETO 10         RETO 10          REO 10


let arr1: string[] = ["Casa", "Coche", "Ciudad", "Cesta"]
let arr2: string[] = ["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"]
let arr3: string[] = ["Venezuela", "Veneno", "Voltaje"]




function parOImpar(palabras: string[]) {
    let total: number = 0
    for (let i = 0; i < palabras.length; i++) {

        total += palabras[i].length

    }

    if (total % 2 == 0) {
        console.log("El numero es par");

    }
    else {
        console.log("El numero es impar");
    }
}

parOImpar(arr1)
parOImpar(arr2)
parOImpar(arr3)






// function sumaDeCara(palabras: string[]) {
//     let total: number = 0
//     for (let i = 0; i < palabras.length; i++) {

//         total += palabras[i].length

//     }

//     return total

// }

// function parImpar(numero: number) {

//     if (numero % 2 == 0) {
//         console.log("El numero es par");

//     }
//     else {
//         console.log("El numero es impar");
//     }
// }
// let resultado1: number
// resultado1 = sumaDeCara(arr1)
// console.log(sumaDeCara(arr1));
// parImpar(resultado1)

// let resultado2: number
// resultado2 = sumaDeCara(arr2)
// console.log(sumaDeCara(arr2));
// parImpar(resultado2)

// let resultado3: number
// resultado3 = sumaDeCara(arr3)
// console.log(sumaDeCara(arr3));
// parImpar(resultado3)

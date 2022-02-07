// RETO 1             RETO 1
// RETO 1             RETO 1
let mes: number;
let dia: number;

function signo(mes: number, dia: number) {

    if ((mes == 1 && dia <= 20) || (mes == 2 && dia >= 18)) {
        return "Tu simbolo del zodiaco es Acuario"
    }
    else if ((mes == 2 && dia <= 19) || (mes == 3 && dia >= 20)) {
        return "Tu simbolo del zodiaco es Piscis"
    }
    else if ((mes == 3 && dia <= 21) || (mes == 4 && dia >= 19)) {
        return "Tu simbolo del zodiaco es Aries"
    }
    else if ((mes == 4 && dia <= 20) || (mes == 5 && dia >= 20)) {
        return "Tu simbolo del zodiaco es Tauro"
    }
    else if ((mes == 5 && dia <= 20) || (mes == 6 && dia >= 18)) {
        return "Tu simbolo del zodiaco es Géminis"
    }
    else if ((mes == 6 && dia <= 21) || (mes == 7 && dia >= 22)) {
        return "Tu simbolo del zodiaco es Cáncer"
    }
    else if ((mes == 7 && dia <= 23) || (mes == 8 && dia >= 22)) {
        return "Tu simbolo del zodiaco es Leo"
    }
    else if ((mes == 8 && dia <= 23) || (mes == 9 && dia >= 22)) {
        return "Tu simbolo del zodiaco es Virgo"
    }
    else if ((mes == 9 && dia <= 23) || (mes == 10 && dia >= 22)) {
        return "Tu simbolo del zodiaco es Libra"
    }
    else if ((mes == 10 && dia <= 23) || (mes == 11 && dia >= 21)) {
        return "Tu simbolo del zodiaco es Escorpio"
    }
    else if ((mes == 11 && dia <= 22) || (mes == 12 && dia >= 19)) {
        return "Tu simbolo del zodiaco es Sagitario"
    }
    else {
        return "Tu simbolo del zodiaco es Capricornio"
    }
}
let zodiaco: string
zodiaco = signo(1, 1)
console.log(zodiaco);

// RETO 9       RETO 9       RETO 9

function parImpar(numero: number) {

    if (numero % 2 == 0) {
        console.log("El numero es par");

    }
    else {
        console.log("El numero es impar");
    }
}

parImpar(1)


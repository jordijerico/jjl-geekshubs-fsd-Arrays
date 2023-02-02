// // ARRAYS   

// let alumnos = ["Alvaro", "Alex", "Paula", "Fernando", "Felipe"];

// for (let i = 0; i < alumnos.length; i++) {
//     console.log(alumnos[i]);
// }

// let marcos = ["Marcos", 19, "Gimnasio", "Tenis", 1.83, ["1Nly","imagine dragons","lil peep"]];




// Proposición de ejercicio: Genera un programa que te pida 10 nombres y los guarde en un array, finalmente muestra los 10 nombres por consola.

// let nombre = "";
// let nombres = [];
// for (let index = 0; index < 10; index++) {
//     nombre = prompt("Dime un nombre");
//     nombres.push(nombre);
// }
// console.log(nombres);


/* 
Vamos a crear una función que valide que un
número de DNI y una letra son compatibles para
ello, necesitamos el siguiente algoritmo.
1. Realizar el módulo del número del DNI
entre 23.
2. El resultado de ese módulo es la posición
del siguiente array.
TRWAGMYFPDXBNJZSQVHLCKET
*/

// let numDni = parseInt(prompt("Dime tu numero de DNI"));
// let letraDni = prompt("Dime tu letra de DNI");
// let arrayDni = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E", "T"];

// let modulo = numDni % 23;

// let comprobante = (letraDni.toUpperCase() === arrayDni[modulo]) ? (
//     "El dni es correcto"
// ) : (
//     "El dnies incorrecto"
// )
// window.alert(comprobante);



//Ejemplo de Ilko
//INTERPOLACIÓN

// Genera una aplicación que te pida la edad y el pais donde vives, en base a eso te responderá si es legal por tu parte adquirir cerveza, además también te dirá si eres o no mayor de edad. Toma como referencias Estados Unidos (21) y Europa (18).
// // 
// // Declaramos como constantes as edades de mayoría de edad legal
// const adultAge_USA = 21;
// const adultAge_UE = 18;
// // Pedimos los datos de edad y país al usuario
// let userCountry = prompt("¿Cuál es tu país de residencia?: (USA, UE)");
// let userAge = parseInt(prompt("¿Qué edad tienes actualmente?: "));
// switch (userCountry) {
//     case "USA":
//         console.log (`Con tu edad de ${userAge} ${(userAge < adultAge_USA) ? "no es" : "es"} legal adquirir cerveza en ${userCountry}`);
//         break;
//     case "UE":
//         console.log (`Con tu edad de ${userAge} ${(userAge < adultAge_UE) ? "no es" : "es"} legal adquirir cerveza en ${userCountry}`);
//         break;
//     default:
//         console.log("Introduce un país correcto.");
// }




// let pais = prompt("dime tu pais");
// let edad = parseInt(prompt("dime tu edad"));

// if (pais.toLowerCase() === "ee.uu" || pais.toLowerCase() === "estados unidos") {
//     if (edad >= 21) {
//         console.log("puedes beber")
//     } else {
//         console.log("no puedes beber")
//     }
// }
// if (pais.toLowerCase() === "españa" || pais.toLowerCase() === "indianapolis" ) {
//     if (edad >= 18) {
//         console.log("puedes beber")
//     } else {
//         console.log("no puedes beber")
//     }
// }
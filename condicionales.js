/* Operaciones Logicas */

/* 
true && true // true
true && false // false
false && false // false

true || true // true
true || false // true
false || false // false

!true && !true // false
!true && !false // false
!false && !false // true

!true || !true // false
!true || !false // true
!false || !false // true 
*/

/* Condicionales */
/* 

if (condicion){
    // condigo
}

if (condicion){
    // codigo
} else {
    // codigo
}

if (condicion){
    // codigo
} else if (condicion){
    // codigo
} else {
    // codigo
}

*/

let a = 20;
let b = 10;
let c = 40;

if (a < b) {
    console.log("Verdadero")
}

if (a > b) {
    console.log("Verdadero")
} else {
    console.log("Falso")
}

if (a > b) {
    if (a > c) {
        console.log("A")
    } else {
        console.log("C")
    }
} else if (b > c) {
    console.log("B")
} else {
    console.log("C")
}

if (a > b && a > c) {
    console.log("A")
} else if (b > c) {
    console.log("B")
} else {
    console.log("C")
}
let option = 2;

switch (option) {
    case 1:
        console.log(1)
        break;
    case 2:
        console.log(2)
        break;
    case 3:
        console.log(3)
        break;
    default:
        console.log("Opcion no valida")
        break;
}

switch (option) {
    case 1:
    case 2:
    case 3:
        console.log("La opcion fue 1,2 o 3");
        break;

    case 4:
    case 5:
        console.log("La opcion fue 4 o 5");
        break;
    case 6:
        console.log("La opcion fue 6");
        break;
}

/* condicion ? true : false */

let mayor = a > b && a > c ? "A" : b > c ? "B" : "C";
console.log(mayor)

let edad = 17
let manejar = edad > 21 ? true : false

console.log("Terminando codigo")
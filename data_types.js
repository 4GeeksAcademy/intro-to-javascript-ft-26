/* Data Types */
/* 

String = "", '', ``
Number = -/+, -10, 10, 10.5, -10.5
Boolean = true, false
Undefined

Object:
    Array
    Literal Object
    Null

function

*/

/* var, let, const 
var variable = valor; 
*/
/* 
const PI = 3.1416;
var nombre = "Elliany";
let apellido = "Bello"; 
*/

/* String */
let nombre = "Anahi";
let apellido = 'Vera';
let nombre_completo = `Mi nombre es ${nombre} y mi apellido es ${apellido}`;
let nombre_apellido = "Mi nombre es " + nombre + " y mi apellido es " + apellido;


/* Number */
let age = 30;
let temp = -13;
let price = 10.5;
let salary = -10.1;

/* Boolean */
let open = true;
let active = false;

/* Undefined */
let address;

/* Object */
let users = null;

let notes = [1, "1", false]
/* Acceder a los valores */
notes[1]

let persona = {
    nombre: 'John',
    apellido: 'Doe',
    edad: 0,
    solter: false,
    direccion: {
        calle: '',
        ciudad: '',
    }
}
/* Acceder a los atributos */
persona.direccion.calle
persona["direccion"]["calle"]


/* 
function nombre_funcion(parametro1, parametro2, ...parametron) {
    return valor;
} 
*/

function sumar(a, b) {
    return a + b
}

let a = 14;
let b = 10;

sumar(10, 10) // 20
sumar(a, b)


let name = 'John';
let lastname = 'Doe'

function printName(name, lastname) {
    console.log(name + "" + lastname)
}

printName(name, lastname)

/* Operaciones Aritmeticas */
/* 
+
-
*
/
%
*/

/* Operaciones de Comparacion */
/* 
=== identico a 
== igual a 
!== distinto a 
!= diferente a
>= mayor o igual que
<= menor o igual que 
> mayor que
< menor que

*/

/* Operadores Logicos */
/* 
and = &&
or = ||
not = !
*/

let num1 = 5;
let num2 = 10;

let op = (num1 + num2) + (num1 * num2)

let num3 = '1';
let num4 = 10;

let op2 = num3 + num4
console.log(op2)

/* comparacion */

5 === '5' // false
5 == '5' // true
6 !== '6' // true
6 != '6' // false

6 >= 6 // true
6 > 6 // false

/* Operaciones Logicas */

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
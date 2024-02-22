
// Ejemplo
let litro = 5;
const litrosToCentilitros = litro * 100;

console.log("Texto cualquiera", litrosToCentilitros);


// EJERCICIOS EN JAVASCRIPT

// 1. Realizar el algoritmo que convierta litros en centilitros, decilitros, galones y onzas

let litros = 1;

const centilitros = litros * 100;
const decilitros = litros * 10;
const galones = litros * 0.264172;
const onzas = litros * 33.814;

console.log("Un litro a Centilitros es: ", centilitros);
console.log("Un litro a Decilitros es: ", decilitros);
console.log("Un litro a Galones es: ", galones);
console.log("Un litro a Onzas es: ", onzas);


// 2. Realizar el algoritmo que realice las 4 operaciones básicas para dos números de entrada

let num1 = prompt("Ingresa el primer numero");
let num2 = prompt("Ingresa el segundo numero");

const suma = num1 + num2;
const resta = num1 - num2;
const multiplicacion = num1 * num2;
const division = num1 / num2;

console.log("Suma: ", suma);
console.log("Resta: ", resta);
console.log("Multiplicación: ", multiplicacion);
console.log("División: ", division);


// 3. Realizar el algoritmo que convierta grados centígrados en Fahrenheit y viceversa

let grados = 100;
let temperatura = prompt("Ingrese la letra C para centigrados y F para Fahrenheit");

if (temperatura === "C" || temperatura === "c") {
    var resultado = grados * 9/5 + 32;
    var unidadIncial = "centígrados";
    var unidadFinal = "Fahrenheit";
} else if (temperatura === "F" || temperatura === "f") {
    var resultado = (grados - 32) * 5/9;
    var unidadInicial = "Fahrenheit";
    var unidadFinal = "centígrados";
}

console.log("La conversión de " + grados + " grados " + unidadInicial + " a " + unidadFinal + " es: " + resultado);


// 4. Realizar el algoritmo que calcule el valor a pagar por algunos galones de gasolina si sabemos que cada centilitro cuesta 25 pesos. Imprimir el valor a pagar y la cantidad de gasolina despachada en litros

var gasGalones = 10; 

var gasLitros = gasGalones * 3.78541;
var gasCentilitros = gasLitros * 100;
var costo = gasCentilitros * 25;

console.log("El costo de " + gasGalones + " galones de gasolina es: " + costo + " pesos");
console.log("La cantidad de gasolina despachada es: " + gasLitros + " litros");


// 5. Realizar un algoritmo que calcule el salario de un empleado según los siguientes parámetros:
// a.Si gana menos de 699.999, Descuento de pensión =2%, y más un Aux. de transporte = 6%
// b. Si gana entre 700.000 y 999.999, Descuento de pensión = 4%, Subsidio familiar = 12.000, sino le pagan el mismo salario
// c. Si gana más del millón Descuento de pensión = 6%


// 1. Realizar un programa que permita generar 100 números e imprimir solo los números pares

function numerosPares(){
    for (let i = 1; i <= 100; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

numerosPares();


// 2. Realizar un programa que permita sumar los 150 primeros números

function sumaNumeros(){
    const suma = (150 * (150 + 1)) / 2;
    return suma;
}

const sumatoria = sumaNumeros();
console.log('La suma de los primeros 150 números es: ' + sumatoria);


// 3. Leer 10 precios de productos y calcular cuánto cuestan los 10 productos

function calcularPedido() {
    let total = 0;

    for (let i = 1; i <= 10; i++) {
        const precio = parseFloat(prompt('Ingresa el precio del producto ' + i + ':'));
        total += precio;
    }

    return total;
}

const valorProductos = calcularPedido();
console.log('El valor total de los 10 productos que va ha comprar es: ' + valorProductos);


// 4. Leer 12 notas de estudiantes y determinar cuántas aprobó y cuantas reprobó, dado un rango 0 a 10, reprueba cuando la nota está entre 0 y 5

function contarNotas(notas) {
    let aprobadas = 0;
    let reprobadas = 0;

    for (let i = 0; i < notas.length; i++) {
        const nota = parseFloat(notas[i]);

        if (nota > 5) {
            aprobadas++;
        } else {
            reprobadas++;
        }
    }

    console.log('Estudiantes aprobados: ' + aprobadas);
    console.log('Estudiantes reprobados: ' + reprobadas);
}

const notasEstudiantes = [
    '7.5', '8', '4.2', '6.8', '9.3', '3.7',
    '5.1', '7.2', '2.9', '6', '1', '5'
];

contarNotas(notasEstudiantes);


// 5. Leer los primeros 50 números y contar cuantos múltiplos de 3 hay, imprimir la cantidad

function contarMultiplosDeTres() {
    let contador = 0;

    for (let i = 1; i <= 50; i++) {
        if (i % 3 === 0) {
            contador++;
        }
    }

    return contador;
}

const multiplos = contarMultiplosDeTres();
console.log('La cantidad de números múltiplos de 3 entre 1 y 50 es: ' + multiplos);


// 6. Leer n cantidad de notas de un estudiante e imprimir por pantalla

function leerNotas() {
    const cantidadNotas = parseInt(prompt("Ingresa la cantidad de notas que deseas leer:"));
    const notas = [];

    for (let i = 1; i <= cantidadNotas; i++) {
        const nota = parseFloat(prompt('Ingresa la nota ' + i + ':'));
        notas.push(nota);
    }

    console.log('Las notas ingresadas son:');
    for (let i = 0; i < notas.length; i++) {
        const posicion = i + 1
        console.log('Nota ' + posicion + ': ' + notas[i]);
    }
}

leerNotas();


// 7. Leer n cantidad números y determinar cantidad de impares, imprimir  cantidad de impares
  


// 8. Leer n cantidad de sueldos de empleados y determinar el sueldo más bajo, imprimir los sueldos y el sueldo más bajo



// 9. Realizar un programa que pida la base, el exponente y se ejecute el cálculo sin uso de bibliotecas



// 10. Llenar un arreglo de tamaño n, y estos elementos sean 1 y 0 alternado e imprimir por consola



// 11. Llenar un arreglo de tamaño n, este tamaño debe ser impar, y el contenido del arreglo deben ser los números pares partiendo de 2



//12. Llenar un arreglo con los primeros 100 números de la sucesión Fibonacci. 0,1,1,2,3,5,8,13……………



// 13. Llenar un arreglo con los primeros 100 números pares y muestre la suma de los elementos del arreglo



// 14. Llenar un arreglo de tamaño n que se llene con números ingresados por el usuario y determine cantidad de positivos y negativos


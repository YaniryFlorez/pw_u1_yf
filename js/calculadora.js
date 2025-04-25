function sumar(numero1, numero2) {
    return numero1 + numero2;

}
function restar(numero1, numero2) {
    return numero1 - numero2;
}
function multiplicar(numero1, numero2) {
    return numero1 * numero2;
}
function dividir(numero1, numero2) {
    if (numero2 === 0) {
        return "Error: División por cero no permitida.";
    }
    return numero1 / numero2;
}
function evaluarOperacion(tipo) {
    let num1 = parseFloat(document.getElementById('id_numero_1').value);
    let num2 = parseFloat(document.getElementById('id_numero_2').value);
    let resultado = 0;
    const Suma = '+', Resta = '-', Multiplicacion = '*', Division = '/';

    if (tipo === Suma) {
        resultado = sumar(num1, num2);
    }
    if (tipo === Resta) {
        resultado = restar(num1, num2);
    }
    if (tipo === Multiplicacion) {
        resultado = multiplicar(num1, num2);
    }
    if (tipo === Division) {
        resultado = dividir(num1, num2);
    }
    document.getElementById('id_resultado').innerText = document.getElementById('id_resultado').innerText + resultado.toString();

  
}
  /* tipos de variables
    var: variable global, se puede modificar en cualquier parte del código, es antiguo
    let: variable local, solo se puede modificar dentro del bloque de código donde se declara, recibe todo tipode dato   
    const: variable constante, no se puede modificar una vez declarada
    // let y const son más recomendables que var, ya que evitan errores de alcance y son más fáciles de depurar.
    */
    let nombre = 'Juan';
    let numero = 5;
    let arreglo = [1, 2, 3, 4, 5];

    const nombreP = 'Juan';
    console.log(nombreP); // Juan
    console.log(numero); // 5
    console.log(arreglo); // [1, 2, 3, 4, 5]    

/* Arreglos y objetos */

const diasLaborales = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
console.log(diasLaborales[0]); // Lunes
console.log(diasLaborales[1]); // Martes
console.log(diasLaborales[9]); // undefined
let valor = '';
console.log(valor); // undefined

diasLaborales.push('Sábado'); // Agrega un elemento al final del arreglo
diasLaborales.unshift('Domingo'); // Agrega un elemento al inicio del arreglo
console.log(diasLaborales); 

const numeroImpares = [1, 3, 5, 7, 9];
const numeroPares = [2, 4, 6, 8];
const numeros = numeroImpares.concat(numeroPares); // Concatena dos arreglos
console.log(numeros); 

/* sentencias de control*/
for(const dia of diasLaborales) {
    console.log(dia); 
    if (dia === 'Viernes') {
        console.log('Por fin Viernes');
    }else{
        console.log('Aun no es viernes');
    }

    if (dia !== 'Viernes') {
        console.log('dia normal');
    }else{
        console.log('Dia de Salida');
    }
}

/* Manejo de objetos */
const Profesor = {
    nombre: 'Yaniry',
    apellido: 'Florez',
    edad: 90,
    genero: 'Femenino',
    ciudad: 'Quito'
}
console.log(Profesor); 
console.log(Profesor.nombre); 

Profesor.apellido = 'Gonzalez'; //seteo de atributos
console.log(Profesor.apellido);

if (Profesor.ciudad === 'Quito') {
    console.log('Es de la capital');

}
/*un arreglo de 3 estudiantes*/
const estudiantes = [
    {
        nombre: 'Juan',
        apellido: 'Pérez',
        edad: 21,
        ciudad: 'Quito'
    },
    {
        nombre: 'María',
        apellido: 'González',
        edad: 22,
        ciudad: 'Guayaquil'
    },
    {
        nombre: 'Pedro',
        apellido: 'Sánchez',
        edad: 23,
        ciudad: 'Cuenca'
    }
];
console.log(estudiantes);
console.log(estudiantes[0].nombre); 
console.table(estudiantes); // Muestra el objeto en una tabla

/* funciones Lambda */

const fundamentos = () => {
    console.log("Fundamentos de JavaScript");

}


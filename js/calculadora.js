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
    const num1 = parseFloat(document.getElementById('id_numero_1').value);
    const num2 = parseFloat(document.getElementById('id_numero_2').value);
    let resultado = 0;

    switch (tipo) {
        case '+':
            resultado = sumar(num1, num2);
            break;
        case '-':
            resultado = restar(num1, num2);
            break;
        case '*':
            resultado = multiplicar(num1, num2);
            break;
        case '/':
            resultado = dividir(num1, num2);
            break;
        default:
            resultado = "Operación no válida";
    }

    document.getElementById('id_resultado').innerText += resultado.toString();
}

// Variables y constantes
const nombre = 'Juan';
const numero = 5;
const arreglo = [1, 2, 3, 4, 5];

const nombreP = 'Juan';
console.log(nombreP); // Juan
console.log(numero); // 5
console.log(arreglo); // [1, 2, 3, 4, 5]

// Arreglos y objetos
const diasLaborales = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
console.log(diasLaborales[0]); // Lunes
console.log(diasLaborales[1]); // Martes
console.log(diasLaborales[9]); // undefined

diasLaborales.push('Sábado'); // Agrega un elemento al final del arreglo
diasLaborales.unshift('Domingo'); // Agrega un elemento al inicio del arreglo
console.log(diasLaborales);

const numeroImpares = [1, 3, 5, 7, 9];
const numeroPares = [2, 4, 6, 8];
const numeros = numeroImpares.concat(numeroPares); // Concatena dos arreglos
console.log(numeros);

// Sentencias de control
for (const dia of diasLaborales) {
    console.log(dia);
    if (dia === 'Viernes') {
        console.log('Por fin Viernes');
    } else {
        console.log('Aún no es viernes');
    }

    console.log(dia !== 'Viernes' ? 'Día normal' : 'Día de Salida');
}

// Manejo de objetos
const Profesor = {
    nombre: 'Yaniry',
    apellido: 'Florez',
    edad: 90,
    genero: 'Femenino',
    ciudad: 'Quito'
};
console.log(Profesor);
console.log(Profesor.nombre);

Profesor.apellido = 'Gonzalez'; // Seteo de atributos
console.log(Profesor.apellido);

if (Profesor.ciudad === 'Quito') {
    console.log('Es de la capital');
}

// Arreglo de 3 estudiantes
const estudiantes = [
    { nombre: 'Juan', apellido: 'Pérez', edad: 21, ciudad: 'Quito' },
    { nombre: 'María', apellido: 'González', edad: 22, ciudad: 'Guayaquil' },
    { nombre: 'Pedro', apellido: 'Sánchez', edad: 23, ciudad: 'Cuenca' }
];
console.log(estudiantes);
console.log(estudiantes[0].nombre);
console.table(estudiantes);


function fundamentosJS() {
    const ciudadano = {
        nombre: 'Pepito',
        apellido: 'Perez',
        direccion: {
            callePrincipal: 'Av Siempre Viva',
            calleSecundaria: 'Av Francisco de Orellana',
            numeracion: '5620',
            barrio: {
                referencia: 'frente al tuti'
            }
        }
    };

    console.log(ciudadano);
    console.log(ciudadano.nombre);
    console.log(ciudadano.direccion);
    console.log(ciudadano.direccion.callePrincipal);
    ciudadano.direccion.callePrincipal = 'Av. Amazonas';
    console.log(ciudadano);

    const est1 = { nombre: 'juan' };
    const est2 = { nombre: 'Jhon' };

    const arregloEstudiantes = [est1, est2];
    console.log(arregloEstudiantes);

    const arregloEstudiantes2 = [
        { nombre: 'Carla', apellido: 'Castillo' },
        { nombre: 'Fatima', apellido: 'Paez' }
    ];
    console.log(arregloEstudiantes2);
    console.log(arregloEstudiantes2[1].apellido);

    // Desestructuración de objetos
    const colores = ['Amarillo', 'Rojo', 'Verde', 'Azul'];
    const [c1, c2, c3, c4] = colores; // Desestructuración de arreglos
    console.log(c1); // Amarillo
    console.log(c4); // Azul

    const [cuno, cdos] = colores; // Desestructuración de arreglos
    console.log(cuno); // Amarillo  
    console.log(cdos); // Rojo

    const [, , ctres] = colores
    console.log(ctres); // Verde

    const [c01, c02] = ['Rojo', 'Verde', 'Azul', 'Naranja'];
    DesestructuraciónArreglo(colores);

    const [, p2, p3] = DesestructuraciónArreglo2();
    console.log(p2);
    console.log(p3);
    //console.log(p10);

}

function DesestructuraciónArreglo([c1, c2, c3, c4]) {
    console.log(c1);
    console.log(c2);
    console.log(c3);

    /* Desectructuracion por operacion rest*/

    console.log('desectructuracion por operacion rest');
    const [p1, ...resto] = DesestructuraciónArreglo2();
    console.log(p1); // Gris
    console.log(resto);



    /*Desestructuración de objetos*/
    const auto = {
        marca: 'Toyota',
        modelo: 'Corolla',
        anio: 2020,
        color: 'Amarillo'
    };


    console.log(auto.color);
    desestructuracionObjeto(auto);

    const Universidad = {
        nombre: 'Universidad Cental',
        direccion: 'America',
        rector: {
            nombre: 'Daniel',
            apellido: 'Pérez',

        }
    };
    const { rector, nombre } = Universidad
    console.log(rector);
    const { apellido } = rector;
    console.log(apellido);


    const Universidad2 = {
        nombre2: 'Universidad Central',
        direccion2: 'America',
        rector2: {
            nombreR2: 'Daniel',
            apellidoR2: 'Pérez',

        }
    };

    const { nombre2, rector2: { nombreR2 } } = Universidad2;
    console.log(nombreR2);
    /*  desestructuracion por Rest*/
    const autoR = {
        marcaR: 'Toyota',
        modeloR: 'prius',
        anioR: 2020,
        colorR: 'Amarillo'
    };

    const { marcaR, ...restoR } = autoR;
    console.log(marcaR); // Toyota
    console.log(restoR); // { modeloR: 'prius', anioR: 2020, colorR: 'Amarillo' }



}

function DesestructuraciónArreglo2() {
    const colores = ['Gris', 'Negro', 'Blanco', 'Marron'];
    return colores;
}

function desestructuracionObjeto({ marca, color }) {

    console.log(marca);
}



//variables

//Let
let edadUsuario = 25;
//console.log("let", edadUsuario)
edadUsuario = 26;
//console.log("let", edadUsuario)

//Const
const nombreUsuario = "Maria";
//console.log("nombre: ", nombreUsuario)

//Condicionales
const edadMinima = 18;
const usuario = { nombre: "Maria", edad: 20 };
if (usuario.edad >= edadMinima) {
  console.log("Puedes entrar a la discoteca! :)");
}
if (usuario.nombre === "Maria") {
  console.log("Puedes entrar a la discoteca! :)");
} else {
  console.log("No Puedes entrar a la discoteca! :(");
}

//const numero = 2;
const numeroStr = "2";
//console.log(numero == numeroStr)
//console.log(numero === numeroStr)

//Operador Ternario
const bandera = true;
const pais = "Colombia";
//const pais = 'Ecuador'
const comida = "Bandeja paisa";

//bandera && pais === 'Colombia' ? console.log('viva colombia') : console.log('ya no viva Colombia')

//bandera || pais === 'Colombia' ? console.log('viva colombia') : console.log('ya no viva Colombia')

//' ? console.log('viva colombia') : console.log('ya no viva Colombia')

let name = null;
const usuario1 = name ?? "Defecto";
//console.log(usuario1)

//For//

let totalPares = 0;
let totalImpares = 0;

const inicio = 1;
const fin = 20;

for (let i = inicio; i <= final; i++) {
  if (i % 2 === 0) {
    totalPares++;
    //console.log(`El numero ${i} es Par`)
  } else {
    totalImpares++;
    //console.log(`El numero ${i} es Impar`)
  }
}

//console.log(`Total numeros Pares: ${totalPares}`)
//console.log(`Total numeros Impares: ${totalImpares}`)

//While//
const limite = 100;

let suma = 0;
let numero = 1;

while (suma < limite) {
    suma += numero
    //console.log(`Numero ${numero}, suma acumulada: ${suma}`)
    numero++
}

//console.log(`La suma supero el limite de ${limite}`)
//console.log(`El ultimo numero sumado fue: ${numero - 1}`)

//Functions//

const calcularAreaCirculo = (radio) => {
    const area = Math.PI * Math.pow(radio, 2)
    return area
}

const radio = 5

const respuesta = calcularAreaCirculo(radio)
//console.log(respuesta)

const sumas = (a, b) => {
    const suma = a + b
    return suma
}

const respuestaSuma = sumas (5, 5)
//console.log(respuestaSuma)


//Arrays//

let tareas = ["Lavar ropa", "Hacer la compra", "Estudiar JavaScript"];
console.log('1', tareas)
tareas.push("llamar a mi mama")
console.log('2', tareas)
tareas.shift()
console.log('3', tareas)

const indice = tareas.indexOf("Hacer la compra")
if (indice !== -1) {
    tareas.splice(indice, 1)
}
console.log('4', tareas)

tareas.map((tarea) => {
    console.log(tarea)
})

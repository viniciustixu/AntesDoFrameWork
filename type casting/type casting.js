/*Em JavaScript, o type casting (conversão de tipo) pode ser feito de várias maneiras. Vou mostrar alguns exemplos de como realizar type casting em JavaScript:

Conversão para String:

Utilize o método toString() para converter um valor em uma string:*/

let numero = 10;
let numeroString = numero.toString();
console.log(typeof numeroString); // string

//Utilize o operador de concatenação (+) para concatenar um valor com uma string vazia:

let numero2 = 10;
let numeroString4 = '' + numero2;
console.log(typeof numeroString4); // string

//Conversão para Número:
//Utilize a função Number() para converter um valor para um número:

let numeroString2 = "10";
let numero3 = Number(numeroString2);
console.log(typeof numero3); // number

//Utilize o operador unário + para converter um valor em um número:


let numeroString3 = "10";
let numero4 = +numeroString3;
console.log(typeof numero4); // number

//Conversão para Booleano:
//Utilize a função Boolean() para converter um valor para um booleano:


let numero5 = 10;
let booleano = Boolean(numero5);
console.log(typeof booleano); // boolean
//A conversão implícita para booleano pode ser feita usando o operador lógico !!:


let numero6 = 10;
let booleano2 = !!numero6;
console.log(typeof booleano2); // boolean

/* Essas são algumas formas comuns de realizar type casting em JavaScript. No entanto, é importante lembrar que o JavaScript possui uma conversão automática de tipos, então,
em muitos casos, o type casting explícito pode não ser necessário. */
/* Operadores unários são aqueles que operam em um único operando, realizando uma operação específica. No JavaScript, existem vários operadores unários disponíveis. Abaixo estão
alguns dos operadores unários mais comuns em JavaScript:

Operador de incremento (++): O operador de incremento aumenta o valor de uma variável em 1. Ele pode ser usado tanto como um operador pré-fixo (++x) quanto como um operador
pós-fixo (x++). Por exemplo: */

    let x = 5;
    console.log(++x); // Output: 6
    console.log(x++); // Output: 6
    console.log(x);   // Output: 7

//Operador de decremento (--): O operador de decremento diminui o valor de uma variável em 1. Ele também pode ser usado como um operador pré-fixo (--x) ou pós-fixo (x--). Veja o exemplo:

    let y = 10;
    console.log(--y); // Output: 9
    console.log(y--); // Output: 9
    console.log(y);   // Output: 8

//Operador de negação (!): O operador de negação inverte o valor de uma expressão booleana. Se o valor for verdadeiro, o operador o tornará falso e vice-versa. Por exemplo:

    let isTrue = true;
    console.log(!isTrue); // Output: false

//Operador de negação numérica (-): O operador de negação numérica inverte o sinal de um valor numérico. Por exemplo:

    let number = 42;
    console.log(-number); // Output: -42

// Operador typeof: O operador typeof retorna uma string que indica o tipo de um operando. Por exemplo:

    console.log(typeof 42);          // Output: "number"
    console.log(typeof "hello");     // Output: "string"
    console.log(typeof true);        // Output: "boolean"
    console.log(typeof undefined);   // Output: "undefined"
    console.log(typeof null);        // Output: "object" (isso é um erro conhecido do JavaScript)
    console.log(typeof [1, 2, 3]);   // Output: "object"
    console.log(typeof { name: "John", age: 30 }); // Output: "object"

// Esses são apenas alguns exemplos dos operadores unários disponíveis no JavaScript. É importante entender seus comportamentos e aplicá-los corretamente em seu código.

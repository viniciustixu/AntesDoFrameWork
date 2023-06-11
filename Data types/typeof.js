/*O operador typeof em JavaScript é usado para determinar o tipo de um valor ou expressão. É um operador unário que recebe um único operando e retorna uma string indicando o tipo
desse operando.*/

// Aqui está a sintaxe para usar o operador typeof:

typeof operando

/* O operando pode ser qualquer valor ou expressão em JavaScript. O operador typeof retorna uma string que representa o tipo do operando. Os possíveis valores de retorno são os
seguintes: 

"undefined": Se o operando for um valor indefinido.
"boolean": Se o operando for um valor booleano.
"number": Se o operando for um número, incluindo inteiros, números de ponto flutuante e NaN (Not-a-Number).
"string": Se o operando for um valor de string.
"bigint": Se o operando for um valor BigInt.
"symbol": Se o operando for um valor de símbolo.
"object": Se o operando for um objeto (incluindo arrays, null e outros tipos não primitivos).
"function": Se o operando for uma função.

Aqui estão alguns exemplos de uso do operador typeof: */

typeof 42; // "number"
typeof "Olá"; // "string"
typeof true; // "boolean"
typeof undefined; // "undefined"
typeof null; // "object" (isso é considerado um erro em JavaScript, mas é um detalhe histórico)
typeof {}; // "object"
typeof []; // "object"
typeof function() {}; // "function"
typeof Symbol("foo"); // "symbol"
typeof BigInt(10); // "bigint"

/* É importante observar que o operador typeof tem algumas limitações e pode não fornecer resultados precisos, especialmente ao lidar com objetos complexos ou arrays.
Nesses casos, outras técnicas como instanceof ou verificação de propriedades específicas podem ser mais apropriadas. */
/* Em JavaScript, existem seis tipos primitivos, que são os tipos de dados básicos da linguagem. Aqui está um resumo de cada um deles:

Number (Número): Representa números inteiros e de ponto flutuante. Por exemplo, 3, 3.14, -10 são todos do tipo Number.

String (Texto): Representa uma sequência de caracteres. É delimitado por aspas simples ('') ou aspas duplas (""). Por exemplo, "Olá, mundo!" é uma String.

Boolean (Booleano): Representa um valor lógico, que pode ser verdadeiro (true) ou falso (false). É usado para tomar decisões em lógica condicional. Por exemplo, 2 > 1 retorna true.

Undefined (Indefinido): Representa uma variável que foi declarada, mas não possui um valor atribuído a ela. Seu valor é undefined. Por exemplo, var x; cria uma variável x indefinida.

Null (Nulo): Representa a ausência intencional de qualquer objeto ou valor. É frequentemente usado para indicar que uma variável não tem valor ou não aponta para nenhum objeto válido.

Symbol (Símbolo): É um tipo de dado novo introduzido no ECMAScript 6. Representa um valor único e imutável, que pode ser usado como identificador para propriedades de objetos. Cada
Symbol é único e não igual a nenhum outro Symbol.

BigInt: O BigInt é usado para representar números inteiros de tamanho arbitrariamente grande. Ele permite a manipulação de números inteiros maiores que o limite máximo suportado
pelo tipo Number. Para criar um valor BigInt, você pode adicionar um "n" ao final de um número inteiro ou usar a função global BigInt().
Aqui está um exemplo de uso do BigInt:

const bigNumber = 1234567890123456789012345678901234567890n;
console.log(bigNumber); // 1234567890123456789012345678901234567890n

O tipo BigInt é útil quando você precisa lidar com números muito grandes, como ao lidar com criptografia, cálculos matemáticos precisos ou operações que requerem uma precisão
significativa.


Esses são os tipos primitivos em JavaScript. Além deles, JavaScript também possui objetos, arrays e funções, que são tipos de dados mais complexos e não primitivos. */
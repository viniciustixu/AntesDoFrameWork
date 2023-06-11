/* Em JavaScript, existem duas formas de realizar conversão de tipos de dados: conversão explícita (também conhecida como type casting) e coerção implícita (ou type coercion). Ambas
as abordagens permitem transformar um tipo de dado em outro, mas possuem diferenças sutis.

A conversão explícita ocorre quando você especificamente solicita a conversão de um tipo de dado para outro. Isso é feito através de funções ou operadores específicos fornecidos pela
linguagem. Alguns exemplos comuns de conversão explícita em JavaScript incluem o uso das funções Number(), String(), Boolean(), entre outras.

Aqui está um exemplo de conversão explícita de um número para uma string em JavaScript: */

let numero = 42;
let texto = String(numero);

console.log(typeof texto);  // Output: string



/* No exemplo acima, a função String() é usada para converter o número 42 em uma string. O resultado é atribuído à variável texto, que agora contém a representação em string do número.

Por outro lado, a coerção implícita, também conhecida como type coercion, ocorre quando o JavaScript realiza automaticamente a conversão de tipos de dados durante uma operação.
Ocasionalmente, isso pode levar a resultados inesperados, pois o JavaScript tenta realizar a coerção para concluir a operação. Por exemplo: */

let numero2 = 42;
let texto2 = "O número é " + numero2;

console.log(texto2);  // Output: O número é 42



/* No exemplo acima, a variável numero é concatenada com a string "O número é" usando o operador +. O JavaScript, por meio da coerção implícita, converte automaticamente o número em
uma string para realizar a concatenação.

É importante ter cuidado com a coerção implícita, pois pode levar a resultados inesperados ou difíceis de depurar. Em alguns casos, pode ser útil usar a conversão explícita para
garantir que o tipo de dado seja manipulado corretamente.

Em resumo, a conversão explícita envolve a solicitação explícita de conversão de tipo, enquanto a coerção implícita ocorre automaticamente pelo JavaScript durante uma operação.
Ambas as abordagens têm seu lugar na linguagem, mas é importante estar ciente das diferenças e usar a abordagem correta dependendo da situação. */
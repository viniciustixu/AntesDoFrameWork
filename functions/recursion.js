/* Recursão é um conceito em programação em que uma função chama a si mesma para resolver um problema. Em JavaScript, você pode usar a recursão para resolver problemas que podem
ser divididos em subproblemas menores e semelhantes.

Para entender melhor a recursão, vamos ver um exemplo clássico: a função de cálculo do fatorial.

O fatorial de um número inteiro positivo N é o produto de todos os números inteiros positivos de 1 a N. Podemos definir o fatorial de forma recursiva da seguinte maneira: */

function fatorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * fatorial(n - 1);
  }
}

console.log(fatorial(5)); // Saída: 120

/* Neste exemplo, a função fatorial é definida de forma recursiva. Se o valor de n for igual a 0, a função retorna 1, pois o fatorial de 0 é definido como 1. Caso contrário, a função
chama a si mesma com o argumento n - 1 e multiplica o resultado por n. Isso cria uma sequência de chamadas recursivas até que o valor de n seja 0, momento em que a recursão termina
e o resultado é retornado.

É importante ter cuidado ao usar a recursão, pois uma implementação incorreta pode levar a um loop infinito e causar um estouro de pilha (stack overflow). Para garantir que a
recursão termine corretamente, você precisa ter uma condição de parada clara e garantir que cada chamada recursiva se aproxime dessa condição de parada.

A recursão pode ser uma técnica poderosa para resolver certos tipos de problemas, como percorrer estruturas de dados complexas, como árvores e grafos, ou para gerar sequências
recursivas. No entanto, em alguns casos, pode ser menos eficiente do que abordagens iterativas, especialmente quando o número de chamadas recursivas é grande.

Ao usar a recursão, é importante entender como o mecanismo de recursão funciona e garantir que você tenha uma estratégia sólida para resolver o problema em questão. */

/* O loop for...of em JavaScript é usado para iterar sobre objetos iteráveis, como arrays, strings, mapas, sets, etc. Ele fornece uma maneira fácil e concisa de percorrer os
elementos de uma coleção sem a necessidade de uma variável de índice ou acessar os elementos pelo índice.

Aqui está a sintaxe básica do loop for...of: */

    for (variável of iterável) {
    // código a ser executado para cada elemento
    }

/* Em cada iteração, a variável representa o elemento atual do objeto iterável. Você pode escolher qualquer nome de variável válido para representar os elementos. O iterável é um
objeto que pode ser percorrido.

Vamos ver alguns exemplos:

Iterando sobre um array: */

    const números = [1, 2, 3, 4, 5];

    for (const número of números) {
    console.log(número);
    }

// Saída:

    1
    2
    3
    4
    5

// Iterando sobre uma string:

    const mensagem = "Olá";

    for (const caractere of mensagem) {
    console.log(caractere);
    }

// Saída:

    O
    l
    á

// Iterando sobre um mapa:

    const mapa = new Map();
    mapa.set(1, "um");
    mapa.set(2, "dois");
    mapa.set(3, "três");

    for (const entrada of mapa) {
    console.log(entrada);
    }

// Saída:

    [1, "um"]
    [2, "dois"]
    [3, "três"]

/* Observe que, ao iterar sobre um mapa, a variável entrada representa um array com dois elementos: a chave e o valor.

O loop for...of fornece uma maneira conveniente de iterar sobre objetos iteráveis, simplificando o código e tornando-o mais legível em comparação com os loops for tradicionais
ou loops while com variáveis de índice. */

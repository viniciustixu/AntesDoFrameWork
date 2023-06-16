/* A declaração "while" em JavaScript é usada para criar um loop que executa um bloco de código repetidamente, desde que uma determinada condição seja verdadeira. Aqui está a sintaxe
básica do "while" em JavaScript: */

    while (condição) {
    // código a ser executado enquanto a condição for verdadeira
    }

/* A condição é uma expressão que é avaliada antes de cada iteração do loop. Se a condição for verdadeira, o bloco de código dentro do "while" será executado. Se a condição for falsa,
o loop será interrompido e a execução do programa continuará com a próxima instrução após o "while". 

Aqui está um exemplo simples que usa o "while" para exibir os números de 1 a 5: */

    var i = 1;

    while (i <= 5) {
    console.log(i);
    i++;
    }

/* Neste exemplo, a variável "i" é inicializada com o valor 1. A condição do "while" verifica se "i" é menor ou igual a 5. Enquanto a condição for verdadeira, o código dentro do loop será executado. O número atual é exibido no console e a variável "i" é incrementada em 1 a cada iteração do loop.

A saída desse código será: */

    1
    2
    3
    4
    5

/* Certifique-se de ter cuidado ao usar um "while" para evitar loops infinitos. É importante garantir que a condição eventualmente se torne falsa para que o loop possa ser
interrompido. Caso contrário, seu programa ficará preso em um loop contínuo. */

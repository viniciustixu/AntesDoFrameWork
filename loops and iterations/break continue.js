/* Em JavaScript, as palavras-chave "break" e "continue" são usadas para controlar o fluxo de execução em loops, como "for", "while" e "do-while".

A palavra-chave "break" é usada para interromper a execução de um loop imediatamente e sair dele. Quando o JavaScript encontra a instrução "break", ele pula para fora do loop e
continua executando o código após o loop. Isso é útil quando você deseja interromper um loop antes que a condição normal de término seja atingida. Aqui está um exemplo de como usar
o "break" em um loop "for": */


    for (var i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
    }

/* Neste exemplo, o loop "for" será executado até que o valor de "i" seja igual a 5. Quando isso acontecer, a instrução "break" é acionada, e o loop é interrompido. Portanto, apenas
os valores de 0 a 4 serão exibidos no console.

Por outro lado, a palavra-chave "continue" é usada para pular uma iteração do loop e continuar para a próxima iteração. Quando o JavaScript encontra a instrução "continue" dentro de
um loop, ele ignora o código restante dentro do loop para a iteração atual e passa para a próxima iteração. Isso é útil quando você deseja pular uma parte específica do código em
uma iteração. Veja um exemplo: */


    for (var i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
    }

/* Neste exemplo, quando o valor de "i" é igual a 5, a instrução "continue" é acionada. Portanto, a iteração é pulada e o loop continua com a próxima iteração. Os valores de 0 a 9
serão exibidos no console, exceto o número 5.

Essas palavras-chave são úteis para controlar o fluxo de execução dentro dos loops em JavaScript, permitindo que você interrompa ou pule partes específicas do código com base em
determinadas condições. */

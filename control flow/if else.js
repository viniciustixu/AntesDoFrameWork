/* Em JavaScript, o comando "if-else" é usado para tomar decisões com base em certas condições. Ele permite executar diferentes blocos de código dependendo se uma condição é
verdadeira ou falsa. A sintaxe básica do comando "if-else" é a seguinte: */

    if (condição) {
    // código a ser executado se a condição for verdadeira
    } else {
    // código a ser executado se a condição for falsa
    }

// Aqui está um exemplo que demonstra o uso do comando "if-else":

    var idade = 18;

    if (idade >= 18) {
    console.log("Você está apto(a) para votar.");
    } else {
    console.log("Você não está apto(a) para votar.");
    }

/* Neste exemplo, se a variável idade for maior ou igual a 18, a mensagem "Você está apto(a) para votar" será exibida. Caso contrário, a mensagem "Você não está apto(a) para votar"
será exibida.

Você também pode encadear vários comandos "if-else" usando a palavra-chave "else if" para testar múltiplas condições. Aqui está um exemplo: */

    var num = 0;

    if (num > 0) {
    console.log("O número é positivo");
    } else if (num < 0) {
    console.log("O número é negativo");
    } else {
    console.log("O número é zero");
    }

/* Neste exemplo, dependendo do valor da variável num, a mensagem apropriada será exibida: "O número é positivo" se num for maior que 0, "O número é negativo" se num for menor que 0 e
"O número é zero" se num for igual a 0. */
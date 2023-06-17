/* O switch é uma estrutura de controle que permite realizar múltiplas comparações em uma expressão e executar diferentes blocos de código com base nos valores correspondentes. Aqui
está um exemplo básico de como usar o switch em JavaScript: */

    var diaDaSemana = 3;
    var mensagem;

    switch (diaDaSemana) {
    case 1:
        mensagem = "Hoje é segunda-feira";
        break;
    case 2:
        mensagem = "Hoje é terça-feira";
        break;
    case 3:
        mensagem = "Hoje é quarta-feira";
        break;
    case 4:
        mensagem = "Hoje é quinta-feira";
        break;
    case 5:
        mensagem = "Hoje é sexta-feira";
        break;
    default:
        mensagem = "Fim de semana!";
    }

    console.log(mensagem);

/* Neste exemplo, a variável diaDaSemana é definida como 3. O switch verifica o valor de diaDaSemana e executa o bloco de código correspondente ao valor encontrado. No caso, como
diaDaSemana é 3, a mensagem "Hoje é quarta-feira" será exibida no console.

Observe que cada bloco de código dentro do switch é marcado com a palavra-chave case seguida do valor a ser comparado. O bloco de código correspondente ao valor encontrado é executado,
e a declaração break é usada para sair do switch após a execução do bloco. O bloco default é opcional e é executado quando nenhum dos valores correspondentes é encontrado.

Espero que isso esclareça o uso do switch em JavaScript. Se você tiver alguma dúvida adicional, por favor, me avise! */

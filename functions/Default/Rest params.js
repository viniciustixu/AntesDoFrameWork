/* Parâmetros Padrão (Default Params):
Os parâmetros padrão permitem que você atribua valores padrão aos parâmetros de uma função, caso nenhum valor seja fornecido ou se o valor fornecido for undefined. Isso é
especialmente útil quando você deseja que uma função tenha um comportamento predefinido quando alguns argumentos são omitidos.

Aqui está um exemplo de como usar parâmetros padrão em uma função: */

    function saudacao(nome = "Visitante") {
    console.log(`Olá, ${nome}!`);
    }

    saudacao(); // Saída: Olá, Visitante!
    saudacao("João"); // Saída: Olá, João!

/* No exemplo acima, a função saudacao possui um parâmetro chamado nome com um valor padrão definido como "Visitante". Se nenhum argumento for passado para a função, o valor padrão será
utilizado.

Parâmetros Rest (Rest Params):
Os parâmetros rest permitem que você declare uma função com um número indefinido de argumentos, que serão agrupados em um array. Isso é útil quando você não sabe quantos argumentos
serão passados para a função ou quando deseja trabalhar com um conjunto variável de valores.

Aqui está um exemplo de como usar parâmetros rest em uma função: */

    function somar(...numeros) {
    let resultado = 0;
    for (let numero of numeros) {
        resultado += numero;
    }
    return resultado;
    }

    console.log(somar(1, 2, 3)); // Saída: 6
    console.log(somar(4, 5, 6, 7, 8)); // Saída: 30

/* No exemplo acima, a função somar utiliza o operador ... antes do parâmetro numeros. Isso indica que a função pode receber um número arbitrário de argumentos, que serão agrupados em
um array chamado numeros. Em seguida, a função percorre esse array e calcula a soma de todos os números.

Com os parâmetros rest, você pode passar quantos argumentos quiser para a função, e eles serão tratados como um array dentro da função. */

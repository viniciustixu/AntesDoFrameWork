/* A manipulação de exceções (ou "exception handling") em JavaScript permite que você lide com erros e exceções que podem ocorrer durante a execução de um programa. É uma técnica
essencial para lidar com situações inesperadas e manter o seu código funcionando corretamente.

Em JavaScript, você pode usar os blocos "try", "catch" e "finally" para manipular exceções. Aqui está um exemplo de como usar esses blocos: */

    try {
    // Bloco de código que pode gerar uma exceção
    // Coloque o código aqui que você deseja monitorar em busca de erros
    } catch (erro) {
    // Bloco de código que é executado se uma exceção for lançada
    // Você pode tratar o erro aqui ou exibir uma mensagem de erro
    console.log('Ocorreu um erro: ' + erro.message);
    } finally {
    // Bloco de código opcional que é executado independentemente se ocorrer uma exceção ou não
    // Você pode colocar aqui código que precisa ser executado, independentemente de exceções
    }

/* No bloco "try", você coloca o código que pode gerar uma exceção. Se uma exceção for lançada nesse bloco, o fluxo do programa será interrompido e o controle será transferido para o
bloco "catch". O objeto de erro associado à exceção é passado para o bloco "catch" como um parâmetro. Nesse exemplo, estamos simplesmente imprimindo a mensagem de erro no console.

O bloco "finally" é opcional e é executado independentemente se ocorrer uma exceção ou não. Ele é usado para colocar código que precisa ser executado, independentemente de exceções,
como a limpeza de recursos ou fechamento de conexões.

Você também pode lançar exceções manualmente usando a instrução "throw". Isso permite que você crie seus próprios erros personalizados. Aqui está um exemplo: */

    function dividir(a, b) {
    if (b === 0) {
        throw new Error('Não é possível dividir por zero');
    }

    return a / b;
    }

    try {
    var resultado = dividir(10, 0);
    console.log('O resultado da divisão é: ' + resultado);
    } catch (erro) {
    console.log('Ocorreu um erro: ' + erro.message);
    }

/* Nesse exemplo, a função dividir verifica se o divisor b é zero e, nesse caso, lança uma exceção com uma mensagem de erro personalizada. No bloco "try", chamamos a função dividir com
os argumentos 10 e 0, o que causa uma exceção. O controle é transferido para o bloco "catch" e exibimos a mensagem de erro no console.

A manipulação de exceções em JavaScript é uma técnica poderosa para lidar com erros e garantir que seu código seja robusto. É importante identificar quais partes do seu código podem
gerar exceções e implementar o tratamento adequado para lidar com essas situações. */

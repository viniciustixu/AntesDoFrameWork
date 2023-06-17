/* IIFE (Immediately Invoked Function Expression), ou Expressão de Função Imediatamente Invocada em português, é um padrão comum em JavaScript usado para envolver uma função em um
escopo próprio e executá-la imediatamente.

A ideia principal de uma IIFE é criar um escopo isolado para a função, evitando a poluição do escopo global e mantendo as variáveis e declarações da função encapsuladas. Isso é útil
quando você precisa definir variáveis ou funções auxiliares que não precisam estar acessíveis fora do contexto da IIFE.

Aqui está um exemplo de como uma IIFE é escrita:*/

    (function() {
    // código da IIFE
    })();

/* Neste exemplo, temos uma função anônima envolvida em parênteses externos. Em seguida, adicionamos parênteses vazios () ao final para invocar imediatamente a função recém-definida.
Qualquer código dentro da IIFE será executado assim que o script for carregado.

Além disso, você também pode passar argumentos para uma IIFE da seguinte forma: */

    (function(arg1, arg2) {
    // código da IIFE que usa os argumentos
    })(valor1, valor2);

/* Dessa forma, você pode fornecer valores específicos para os argumentos da função dentro dos parênteses finais.

O uso de IIFEs é comum em situações em que você deseja criar um escopo privado para evitar conflitos de variáveis e manter seu código organizado. Também pode ser útil para criar
módulos ou bibliotecas independentes.

Com o advento do ECMAScript 6 (ES6) e a introdução de escopo de bloco com let e const, o uso de IIFEs se tornou menos necessário em alguns casos. No entanto, eles ainda são úteis em
determinadas situações e são amplamente utilizados em códigos legados. */

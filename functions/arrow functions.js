/* As arrow functions, também conhecidas como funções de seta, são uma sintaxe compacta e concisa para escrever funções em JavaScript. Elas foram introduzidas no ECMAScript 6 (ES6)
e são uma forma alternativa de declarar funções em comparação com a sintaxe tradicional.

Aqui está um exemplo de uma função escrita de forma tradicional: */

function soma(a, b) {
  return a + b;
}

//E aqui está o equivalente usando arrow functions:

const soma = (a, b) => a + b;

/* As arrow functions têm algumas características notáveis:

Sintaxe concisa: A estrutura é simplificada e pode ser escrita em uma única linha, se desejado. Elas são ideais para funções curtas e simples.

Sem binding do this: Nas arrow functions, o valor de this é herdado do contexto externo em que a função é definida. Isso é diferente das funções tradicionais, onde o this é
determinado pelo contexto de execução.

Não possuem as palavras-chave function e return: Em arrow functions de uma única linha, você pode omitir explicitamente a palavra-chave return, e a expressão após a => será
automaticamente retornada.

Não podem ser usadas como construtoras: As arrow functions não podem ser utilizadas com o operador new para criar objetos. Elas não têm o protótipo [[Construct]], o que significa que
não podem ser instanciadas.

Não possuem arguments: Diferente das funções tradicionais, as arrow functions não possuem o objeto arguments. Se você precisar acessar os argumentos passados para a função, é
necessário utilizar as funções tradicionais.

É importante lembrar que as arrow functions não são uma substituição completa para as funções tradicionais. Elas têm suas próprias limitações e são mais adequadas para certos cenários,
especialmente quando a concisão e a clareza do código são prioridades.

Espero que isso tenha esclarecido o conceito das arrow functions em JavaScript! */

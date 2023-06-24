/* O modo estrito (strict mode) em JavaScript é uma funcionalidade que permite que você escreva um código mais seguro e com melhor qualidade. Quando o modo estrito está habilitado,
certas práticas de programação são proibidas e erros que normalmente seriam silenciosos são transformados em exceções.

Para habilitar o modo estrito em seu código JavaScript, você pode adicionar a seguinte declaração no início do seu arquivo ou função: */


    "use strict";


/* Aqui estão algumas características e benefícios do modo estrito:

1. Prevenção de variáveis globais implícitas: Em JavaScript padrão, se você declarar uma variável sem a palavra-chave "var", "let" ou "const", ela será automaticamente atribuída ao
escopo global. No entanto, no modo estrito, isso não é permitido e resultará em um erro.

2. Proibição de atribuição a propriedades somente leitura: No modo estrito, você não pode atribuir valores a propriedades somente leitura de um objeto. Isso ajuda a evitar alterações
acidentais em objetos que devem ser imutáveis.

3. Erros para uso de variáveis não declaradas: No modo estrito, usar uma variável que não foi declarada resultará em um erro. Em JavaScript padrão, isso criaria uma nova variável
global implícita.

4. Impede a exclusão de variáveis e funções: No modo estrito, a exclusão de variáveis, funções ou funções nomeadas não é permitida. Isso ajuda a evitar que partes do código sejam
acidentalmente excluídas.

5. Palavras-chave restritas: O modo estrito introduz uma lista ampliada de palavras-chave restritas. Por exemplo, "eval" e "arguments" não podem ser usadas como identificadores de
variáveis.

6. Parâmetros de função duplicados: No modo estrito, definir múltiplos parâmetros com o mesmo nome em uma função resultará em um erro.

7. Restringe o uso do "this" em contexto global: No modo estrito, quando o código é executado no contexto global, o valor de "this" é indefinido, em vez de se referir ao objeto
global (como "window" no navegador).

Essas são apenas algumas das características do modo estrito em JavaScript. Usar o modo estrito é uma boa prática, pois ajuda a evitar erros comuns e torna o código mais robusto.
Recomenda-se habilitar o modo estrito em todos os seus arquivos JavaScript para aproveitar esses benefícios. */

/* Em JavaScript, `async` e `await` são palavras-chave que permitem trabalhar com operações assíncronas de maneira mais síncrona e legível. Eles foram introduzidos no ECMAScript 2017
(ES8) e se tornaram amplamente utilizados no desenvolvimento moderno de JavaScript.

Aqui está uma breve explicação sobre `async` e `await`:

1. `async`: A palavra-chave `async` é usada para declarar uma função assíncrona. Uma função assíncrona é uma função que opera de forma assíncrona, o que significa que ela pode
realizar tarefas sem bloquear a execução de outros códigos. Ela sempre retorna uma promessa (Promise).

   Exemplo: */
   async function minhaFuncaoAssincrona() {
     // Código assíncrono aqui
     return resultado; // Retorna uma promessa
   }


/* 2. `await`: A palavra-chave `await` é usada para pausar a execução de uma função assíncrona até que uma promessa seja resolvida (ou rejeitada) e retornar o resultado da promessa.
Ela só pode ser usada dentro de uma função assíncrona.

   Exemplo: */

   async function minhaFuncaoAssincrona() {
     // Código assíncrono aqui
     const resultado = await minhaPromessa; // Aguarda a resolução da promessa
     return resultado;
   }


   /* O `await` faz com que a execução da função assíncrona seja pausada até que a promessa seja resolvida. Enquanto isso, o controle é devolvido à linha de chamada da função
   assíncrona, permitindo que outros códigos sejam executados. Quando a promessa for resolvida, o valor resultante será atribuído à variável e a execução da função assíncrona
   continuará.

Essas construções `async/await` são úteis para lidar com código assíncrono de forma mais concisa e legível, evitando o aninhamento excessivo de callbacks ou o uso de Promises
encadeadas. */
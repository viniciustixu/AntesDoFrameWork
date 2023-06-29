/* O "callback hell" é um termo utilizado para descrever a situação em que o código JavaScript se torna difícil de ler e dar manutenção devido a múltiplos callbacks aninhados.
Isso ocorre quando você precisa realizar uma sequência de operações assíncronas e, em vez de esperar que uma operação termine para iniciar a próxima, você acaba aninhando uma série
de callbacks um dentro do outro.

Embora o callback seja uma forma comum de lidar com operações assíncronas em JavaScript, o aninhamento excessivo de callbacks pode levar a um código confuso, difícil de entender e
depurar. A estrutura visual do código fica comprometida, com um grande número de chaves fechando e abrindo, dificultando o acompanhamento do fluxo de execução.

Felizmente, com o avanço das versões do JavaScript, surgiram novos recursos para lidar com operações assíncronas de forma mais elegante. A partir do ECMAScript 6, foram introduzidas
Promises, e posteriormente, no ECMAScript 2017, a funcionalidade async/await.

As Promises permitem que você encadeie operações assíncronas de maneira mais legível, evitando o aninhamento excessivo de callbacks. Com as Promises, é possível utilizar os métodos
`then` e `catch` para manipular os resultados e erros das operações assíncronas, respectivamente.

Já o async/await é um recurso do JavaScript que permite escrever código assíncrono de forma síncrona, sem o uso explícito de callbacks ou Promises. Com o async/await, você pode criar
funções assíncronas que pausam a execução até que uma Promise seja resolvida e retornam seu resultado.

Aqui está um exemplo de como o código pode ficar mais legível utilizando Promises e async/await: */

    // Exemplo com Promises
    fazerAlgo()
    .then(resultado1 => {
        return fazerAlgoMais(resultado1);
    })
    .then(resultado2 => {
        return fazerOutraCoisa(resultado2);
    })
    .then(resultadoFinal => {
        console.log(resultadoFinal);
    })
    .catch(erro => {
        console.error(erro);
    });

    // Exemplo com async/await
    async function meuCodigo() {
    try {
        const resultado1 = await fazerAlgo();
        const resultado2 = await fazerAlgoMais(resultado1);
        const resultadoFinal = await fazerOutraCoisa(resultado2);
        console.log(resultadoFinal);
    } catch (erro) {
        console.error(erro);
    }
    }

    meuCodigo();

// Esses exemplos ilustram como Promises e async/await podem simplificar a estrutura do código e torná-lo mais legível, evitando o callback hell. 

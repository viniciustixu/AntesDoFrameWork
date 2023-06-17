/* A stack de chamadas de função, também conhecida como call stack em inglês, é uma estrutura de dados usada pelo mecanismo de execução do JavaScript para rastrear a ordem das
chamadas de função em um programa.

Quando uma função é chamada, uma nova entrada é adicionada ao topo da stack de chamadas. Essa entrada contém informações sobre a função chamada e o contexto em que ela é executada.
O mecanismo de execução do JavaScript trabalha de forma síncrona, executando uma função de cada vez, e a stack de chamadas mantém o controle sobre a execução das funções.

Aqui está um exemplo que ilustra o funcionamento da stack de chamadas: */

    function funcaoA() {
    console.log('Início da função A');
    funcaoB();
    console.log('Fim da função A');
    }

    function funcaoB() {
    console.log('Início da função B');
    // Alguma lógica aqui
    console.log('Fim da função B');
    }

    funcaoA();

/* Neste exemplo, quando funcaoA() é chamada, uma nova entrada é adicionada ao topo da stack de chamadas. Em seguida, dentro de funcaoA(), funcaoB() é chamada, adicionando outra entrada
à stack. A execução continua dessa forma até que todas as funções tenham sido chamadas e executadas.

À medida que cada função é concluída, sua entrada correspondente é removida da stack de chamadas. Isso ocorre em ordem reversa, ou seja, a última função chamada é a primeira a ser
concluída e removida da stack.

A stack de chamadas é uma estrutura de dados fundamental para o funcionamento da execução do JavaScript. Ela garante que as chamadas de função sejam tratadas de forma ordenada e
controlada, evitando problemas como recursão infinita ou estouro de pilha (stack overflow).

É importante ter em mente que a stack de chamadas tem um tamanho limitado. Se um programa chamar funções recursivamente de forma excessiva ou tiver um número muito grande de chamadas
aninhadas, isso pode levar a um estouro de pilha. */

/* Em JavaScript, um "Set" é uma estrutura de dados que permite armazenar coleções de valores únicos. Isso significa que cada valor em um conjunto (Set) ocorre apenas uma vez,
eliminando automaticamente duplicatas. O objeto Set é um tipo nativo do JavaScript introduzido no ECMAScript 2015 (ES6).

Aqui está um exemplo básico de como criar e usar um Set em JavaScript: */

    // Criar um novo Set
    const meuSet = new Set();

    // Adicionar valores ao Set
    meuSet.add(1);
    meuSet.add(2);
    meuSet.add(3);
    meuSet.add(2); // Não adicionará duplicatas

    console.log(meuSet); // Saída: Set { 1, 2, 3 }

    // Verificar se um valor existe no Set
    console.log(meuSet.has(2)); // Saída: true

    // Obter o tamanho do Set
    console.log(meuSet.size); // Saída: 3

    // Remover um valor do Set
    meuSet.delete(2);

    console.log(meuSet); // Saída: Set { 1, 3 }

    // Iterar sobre os valores do Set
    meuSet.forEach((valor) => {
    console.log(valor);
    });

/* O objeto Set oferece métodos para adicionar valores (.add()), verificar se um valor existe (.has()), remover valores (.delete()), obter o tamanho do Set (.size), e também permite
iterar sobre seus valores usando o método .forEach(). */

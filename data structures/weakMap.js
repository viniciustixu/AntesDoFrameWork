/* Em JavaScript, um WeakMap é uma estrutura de dados incorporada que permite associar pares de chave-valor, onde as chaves devem ser objetos e os valores podem ser qualquer tipo.
A principal característica de um WeakMap é que ele mantém referências fracas (weak references) para as chaves, o que significa que se não houver outras referências para um objeto
chave, ele pode ser coletado pelo coletor de lixo.

Aqui está como você pode usar um WeakMap: */

// 1. Criando um weakMap:

    const weakMap = new WeakMap();

//2. Adicionando pares de chave-valor:

    const objChave1 = {}; // objeto chave 1
    const objChave2 = {}; // objeto chave 2

    weakMap.set(objChave1, 'valor1');
    weakMap.set(objChave2, 'valor2');

//3. Recuperando valores usando as chaves:

    console.log(weakMap.get(objChave1)); // 'valor1'
    console.log(weakMap.get(objChave2)); // 'valor2'

//4. Verificando a existência de uma chave:

    console.log(weakMap.has(objChave1)); // true
    console.log(weakMap.has(objChave3)); // false

//5. Removendo um par chave-valor:

    weakMap.delete(objChave1);
    console.log(weakMap.has(objChave1)); // false

/* Lembre-se de que as chaves em um WeakMap devem ser objetos e não é possível iterar diretamente sobre as chaves ou obter o tamanho do mapa. O WeakMap é útil em casos em que você
deseja associar dados a objetos e permitir que os objetos sejam coletados pelo coletor de lixo quando não estão mais em uso. */

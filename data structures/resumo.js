/* JavaScript possui várias estruturas de dados embutidas que podem ser utilizadas para armazenar e manipular informações. A seguir, vou apresentar algumas das principais estruturas
de dados em JavaScript:

    1.Array (Matriz):
    Um array é uma estrutura de dados que armazena elementos em uma sequência ordenada. Os elementos podem ser de qualquer tipo de dado, incluindo números, strings, objetos e até
    mesmo outros arrays. Você pode acessar os elementos de um array usando um índice numérico, começando em 0.

    Exemplo: */

        const meuArray = [1, 2, 3, 4, 5];
        console.log(meuArray[0]); // Saída: 1

    /*2.Object (Objeto):
    Um objeto é uma estrutura de dados que armazena pares de chave-valor. As chaves são strings e os valores podem ser de qualquer tipo de dado. Os objetos permitem acessar os valores
    usando as chaves correspondentes. 

    Exemplo: */

        const meuObjeto = { nome: "João", idade: 25 };
        console.log(meuObjeto.nome); // Saída: "João"
    
    /*3.Set (Conjunto):
    Um conjunto é uma coleção de elementos únicos, ou seja, não permite elementos duplicados. Você pode adicionar, remover e verificar a existência de elementos em um conjunto.

    Exemplo: */

        const meuConjunto = new Set();
        meuConjunto.add(1);
        meuConjunto.add(2);
        meuConjunto.add(3);
        console.log(meuConjunto.has(2)); // Saída: true

    /*4.Map (Mapa):
    Um mapa é uma coleção de pares de chave-valor, semelhante a um objeto. A diferença é que as chaves em um mapa podem ser de qualquer tipo, incluindo objetos, enquanto em um objeto
    as chaves são sempre strings.

    Exemplo: */

        const meuMapa = new Map();
        const chave1 = { id: 1 };
        const chave2 = { id: 2 };
        meuMapa.set(chave1, "Valor 1");
        meuMapa.set(chave2, "Valor 2");
        console.log(meuMapa.get(chave1)); // Saída: "Valor 1"

/* Essas são apenas algumas das estruturas de dados disponíveis em JavaScript. Existem também outras, como Pilha (Stack), Fila (Queue), Lista Encadeada (Linked List), Árvore (Tree)
e assim por diante. Dependendo do caso de uso específico, você pode optar por usar a estrutura de dados mais adequada. */

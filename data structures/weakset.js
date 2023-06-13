/* Em JavaScript, também existe uma estrutura de dados chamada "WeakSet" (conjunto fraco). O WeakSet é semelhante a um Set normal, mas só pode conter objetos e não possui referências
fortes aos objetos que estão em seu interior. Isso significa que, se um objeto não tiver mais nenhuma outra referência além do WeakSet, ele poderá ser automaticamente removido pelo
coletor de lixo do JavaScript.

Aqui está um exemplo de como usar um WeakSet em JavaScript: */

    // Criar um novo WeakSet
    const meuWeakSet = new WeakSet();

    // Criar alguns objetos
    const objeto1 = { nome: 'Objeto 1' };
    const objeto2 = { nome: 'Objeto 2' };

    // Adicionar objetos ao WeakSet
    meuWeakSet.add(objeto1);
    meuWeakSet.add(objeto2);

    console.log(meuWeakSet); // Saída: WeakSet { { nome: 'Objeto 1' }, { nome: 'Objeto 2' } }

    // Verificar se um objeto está no WeakSet
    console.log(meuWeakSet.has(objeto1)); // Saída: true

    // Remover um objeto do WeakSet
    meuWeakSet.delete(objeto2);

    console.log(meuWeakSet); // Saída: WeakSet { { nome: 'Objeto 1' } }

/* É importante observar que um WeakSet não possui os mesmos métodos disponíveis em um Set padrão. Por exemplo, não é possível iterar diretamente sobre os valores de um WeakSet ou
obter seu tamanho. Além disso, um WeakSet não é uma estrutura iterável. Portanto, ele não possui os métodos .forEach() ou .entries().

O WeakSet é especialmente útil quando você deseja armazenar objetos temporários ou quando precisa associar dados a um objeto específico, mas não deseja impedir que o objeto seja
coletado pelo coletor de lixo quando não for mais necessário. */
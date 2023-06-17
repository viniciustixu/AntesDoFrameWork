/* O objeto arguments em JavaScript é uma variável interna disponível em todas as funções. Ele contém uma lista dos argumentos passados para a função durante a chamada.

Aqui estão algumas características importantes do objeto arguments:

Acesso aos argumentos: O objeto arguments pode ser usado para acessar os argumentos passados para uma função, independentemente do número de parâmetros definidos na função.
Ele age como um array-like object (objeto semelhante a um array), o que significa que você pode acessar seus elementos usando índices numéricos, como arguments[0], arguments[1], e assim por diante.

Tamanho variável: O objeto arguments se ajusta automaticamente ao número de argumentos passados para a função. Ele reflete o número real de argumentos fornecidos durante a chamada da
função.

Alterações afetam o objeto arguments: Se você alterar um valor de um argumento dentro da função, essa alteração será refletida no objeto arguments. Da mesma forma, se você alterar
um valor no objeto arguments, o valor correspondente do argumento também será atualizado.

Não é um array real: Embora o objeto arguments seja semelhante a um array, ele não é um array real. Ele não possui todos os métodos de array, como map(), forEach(), etc. No entanto,
você pode convertê-lo em um array usando técnicas como o Array.from(arguments) ou o operador spread ...arguments.

Aqui está um exemplo de como usar o objeto arguments: */

    function soma() {
    let resultado = 0;
    for (let i = 0; i < arguments.length; i++) {
        resultado += arguments[i];
    }
    return resultado;
    }

    console.log(soma(1, 2, 3)); // Saída: 6
    console.log(soma(4, 5, 6, 7, 8)); // Saída: 30

/* No exemplo acima, a função soma não possui parâmetros definidos, mas pode receber qualquer número de argumentos. Usamos o objeto arguments dentro da função para percorrer e somar
todos os argumentos passados para a função.

No entanto, é importante observar que o objeto arguments possui algumas limitações. Por exemplo, ele não funciona em funções arrow (funções de seta) do ES6, pois essas funções não
possuem seu próprio objeto arguments. Além disso, o objeto arguments não é um recurso recomendado para o desenvolvimento moderno, já que o uso de parâmetros rest (rest parameters) ou
argumentos padr */

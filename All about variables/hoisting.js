/* O hoisting em JavaScript é um comportamento específico de como o código é processado durante a fase de compilação e execução. Em termos simples,
o hoisting permite que as declarações de variáveis e funções sejam movidas para o topo do seu escopo antes que o código seja executado.

Quando um bloco de código JavaScript é executado, uma etapa de compilação é realizada, na qual todas as variáveis e funções declaradas dentro desse
bloco são registradas. Durante essa etapa, as declarações de variáveis são "elevadas" (hoisting) para o topo do seu escopo atual, mas não suas atribuições.
Isso significa que você pode usar uma variável antes de declará-la no código, e o JavaScript não lançará um erro. */

//Por exemplo:

console.log(x); // undefined
var x = 5;

/* No exemplo acima, mesmo que a variável x seja declarada após a tentativa de imprimi-la, o JavaScript não lança um erro. Isso ocorre porque, na verdade,
o código está sendo interpretado como se fosse: */

var x;
console.log(x); // undefined
x = 5;

/* Como podemos ver, a declaração da variável x é "elevada" para o topo do escopo, e sua atribuição ocorre onde foi originalmente definida.

O mesmo conceito se aplica a funções. As declarações de funções também são "elevadas" para o topo do escopo, o que significa que você pode chamar
uma função antes de declará-la no código.

No entanto, é importante notar que apenas as declarações são hoistadas, não as inicializações. Portanto, é uma boa prática declarar todas as
variáveis ​​no início do escopo para evitar confusões e erros potenciais. */
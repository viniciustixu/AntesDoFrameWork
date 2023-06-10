/* O escopo de uma função se refere às variáveis, parâmetros e instruções que estão acessíveis dentro do corpo da função. Em outras palavras, o escopo determina quais partes do código
podem acessar determinadas variáveis e como essas variáveis se relacionam com o resto do programa.

Quando você define uma função, está criando um bloco isolado de código que pode ser executado quando chamado. O escopo dessa função é delimitado pelas chaves ({}) que envolvem o seu
corpo.

Dentro do escopo de uma função, você pode ter variáveis locais, que são definidas dentro da função e só podem ser acessadas a partir dela. Essas variáveis existem apenas durante
a execução da função e são excluídas da memória quando a função é concluída. Variáveis locais têm um escopo limitado à função em que são definidas.

Além das variáveis locais, uma função também pode acessar variáveis globais, que são definidas fora da função e estão disponíveis em todo o programa. No entanto, dentro de uma função,
se você declarar uma variável com o mesmo nome de uma variável global, a variável local terá precedência sobre a global dentro do escopo da função.

O escopo de uma função também abrange os parâmetros, que são os valores fornecidos à função quando ela é chamada. Os parâmetros são tratados como variáveis locais dentro do escopo da
função e podem ser usados ​​em seu corpo.

Em resumo, o escopo de uma função define quais variáveis e parâmetros são visíveis e acessíveis dentro do corpo da função. Isso ajuda a organizar e modularizar o código, evitando
conflitos de nomes e garantindo que as variáveis sejam utilizadas apenas onde são necessárias. */

//  temos as seguintes linhas:

    let x = 1;

    x = (x++, x);

    console.log(x); // Saída esperada: 2

    x = (2, 3);

    console.log(x); // Saída esperada: 3

/* Vamos analisar linha por linha:

let x = 1;: Declara uma variável x e atribui o valor 1 a ela.

x = (x++, x);: Nesta linha, estamos utilizando a expressão (x++, x). O operador vírgula (,) é usado para avaliar múltiplas expressões e retornar o valor da última expressão. No caso,
(x++, x) primeiro executa a expressão x++, que incrementa o valor de x em 1 (tornando-o 2), e então avalia a expressão x, que retorna o novo valor de x. Assim, o valor 2 é atribuído de volta à variável x.

console.log(x);: Imprime o valor de x no console. Nesse ponto, o valor de x é 2.

x = (2, 3);: Novamente, estamos utilizando a expressão (2, 3). Aqui, o operador vírgula avalia a expressão 2 e depois a expressão 3, retornando o valor da última expressão, que é 3.
Assim, o valor 3 é atribuído à variável x, substituindo o valor anterior.

console.log(x);: Imprime o novo valor de x no console. Agora, o valor de x é 3.

Resumindo, a expressão (x++, x) é usada para incrementar o valor de x em 1 e, em seguida, atribuir o novo valor de volta à variável x. Já a expressão (2, 3) é usada para simplesmente
retornar o valor 3, que é então atribuído à variável x. */

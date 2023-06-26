/* A função de "borrowing" em JavaScript permite que você use métodos de um objeto em outro objeto sem ter que copiar ou herdar diretamente esses métodos. Em vez disso, você
"empresta" a função de um objeto e a aplica a outro objeto. Isso é útil quando você tem objetos diferentes que possuem métodos semelhantes, mas não desejam criar uma relação de
herança entre eles.

Existem algumas maneiras de implementar o "borrowing" em JavaScript. Vou mostrar um exemplo simples usando o método call() ou apply() para emprestar uma função de um objeto para
outro: */

const objeto1 = {
  nome: 'Objeto 1',
  saudacao: function() {
    console.log(`Olá, eu sou ${this.nome}.`);
  }
};

const objeto2 = {
  nome: 'Objeto 2'
};

// Empréstimo da função saudacao de objeto1 para objeto2
objeto1.saudacao.call(objeto2);
// ou objeto1.saudacao.apply(objeto2);

// Saída: Olá, eu sou Objeto 2.

/* Neste exemplo, temos dois objetos objeto1 e objeto2. O objeto1 possui um método saudacao() que imprime uma saudação com base no valor de this.nome. Usando call() ou apply(),
podemos emprestar essa função para o objeto2. Ao fazer isso, this dentro da função se refere ao objeto2, permitindo que a saudação seja impressa corretamente.

A diferença entre call() e apply() é a maneira como os argumentos são passados. Com call(), você passa os argumentos separadamente, enquanto com apply(), você passa um array de
argumentos. No exemplo acima, não há argumentos sendo passados, então você pode usar qualquer um dos métodos.

Essa é apenas uma maneira de implementar o "borrowing" em JavaScript. Existem outras técnicas, como a utilização de bind(), que também podem ser úteis dependendo do contexto. */

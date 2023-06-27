/* Em JavaScript, as funções call, apply e bind são métodos utilizados para manipular o contexto de execução de uma função. Vou explicar cada um deles separadamente:

call: O método call é utilizado para chamar uma função, especificando o contexto (this) e os argumentos individualmente. Ele permite que você execute uma função imediatamente,
definindo o valor de this dentro dela.
Exemplo: */

function saudacao() {
  console.log(`Olá, ${this.nome}!`);
}

const pessoa = { nome: 'João' };

saudacao.call(pessoa); // Saída: Olá, João!

/* apply: O método apply é similar ao call, mas permite passar os argumentos como um array. Ele também define o valor de this para o contexto especificado.
Exemplo: */

function saudacao(cumprimento) {
  console.log(`${cumprimento}, ${this.nome}!`);
}

const pessoa = { nome: 'Maria' };

saudacao.apply(pessoa, ['Bom dia']); // Saída: Bom dia, Maria!

/* bind: O método bind cria uma nova função com o contexto (this) vinculado ao objeto especificado. Diferentemente de call e apply, o bind não executa a função imediatamente, mas
retorna uma nova função que pode ser chamada posteriormente.
Exemplo: */

function saudacao() {
  console.log(`Olá, ${this.nome}!`);
}

const pessoa = { nome: 'Ana' };

const saudarPessoa = saudacao.bind(pessoa);
saudarPessoa(); // Saída: Olá, Ana!

/* Esses métodos são úteis quando você precisa controlar o contexto de execução de uma função, permitindo que você altere temporariamente o valor de this ou forneça argumentos de
maneiras diferentes. */

/* 
Em JavaScript, o conceito de protótipos é fundamental para a programação orientada a objetos. Ele permite que você crie objetos baseados em outros objetos existentes,
herde propriedades e métodos e compartilhe funcionalidades entre diferentes instâncias.

Vou fornecer um exemplo básico de como criar objetos usando protótipos em JavaScript: */



// Definindo o protótipo de um objeto Pessoa
var Pessoa = function(nome, idade) {
    this.nome = nome;
    this.idade = idade;
};
  
// Adicionando um método ao protótipo
Pessoa.prototype.dizerOla = function() {
    console.log("Olá, meu nome é " + this.nome);
};
  
// Criando uma instância de Pessoa
var pessoa1 = new Pessoa("João", 25);

// Chamando o método dizerOla da instância
pessoa1.dizerOla(); // Saída: Olá, meu nome é João



/* Neste exemplo, definimos um construtor de objeto chamado Pessoa que aceita os parâmetros nome e idade. Em seguida, adicionamos um método chamado dizerOla ao protótipo do objeto
Pessoa. Por fim, criamos uma instância pessoa1 usando o operador new e chamamos o método dizerOla da instância.

O conceito de protótipos em JavaScript permite que você adicione propriedades e métodos a um objeto ou a todos os objetos criados a partir de um determinado construtor. Isso oferece
flexibilidade e reutilização de código, permitindo que você crie hierarquias de objetos e herde funcionalidades de protótipos superiores.

Lembre-se de que esse exemplo é apenas uma introdução básica ao uso de protótipos em JavaScript. Há muito mais a explorar sobre esse conceito poderoso, como herança de protótipos,
manipulação de protótipos dinamicamente e muito mais. */

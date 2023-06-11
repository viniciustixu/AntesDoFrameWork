/* Em JavaScript, um objeto é uma entidade que armazena propriedades e métodos. Ele é uma estrutura de dados fundamental na linguagem e é usado para representar entidades do mundo
real ou abstratas.

Um objeto JavaScript é definido usando a sintaxe de literal de objeto, que consiste em uma lista de pares de chave-valor, onde cada chave é uma string que identifica a propriedade
e cada valor é o valor atribuído a essa propriedade. Aqui está um exemplo básico de como criar um objeto em JavaScript: */

var pessoa = {
    nome: "João",
    idade: 25,
    profissao: "Engenheiro"
  };

/* Neste exemplo, criamos um objeto chamado "pessoa" com três propriedades: "nome", "idade" e "profissao". Cada propriedade é seguida por dois pontos e seu valor correspondente.

Você também pode acessar e modificar as propriedades de um objeto usando a notação de ponto ou colchetes. Aqui estão exemplos: */

console.log(pessoa.nome); // Saída: "João"
console.log(pessoa["idade"]); // Saída: 25

pessoa.profissao = "Desenvolvedor";
console.log(pessoa.profissao); // Saída: "Desenvolvedor"

// Você também pode adicionar novas propriedades a um objeto em tempo de execução:

pessoa.email = "joao@example.com";
console.log(pessoa.email); // Saída: "joao@example.com"

// Além disso, os objetos em JavaScript podem conter métodos, que são funções associadas a um objeto. Aqui está um exemplo:

var carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2021,
    acelerar: function() {
      console.log("Acelerando o carro " + this.marca + " " + this.modelo);
    }
  };
  
  carro.acelerar(); // Saída: "Acelerando o carro Toyota Corolla"

  /* Neste exemplo, o objeto "carro" possui um método chamado "acelerar" que imprime uma mensagem com base nas propriedades do objeto.

Esses são apenas exemplos básicos de objetos em JavaScript. A linguagem oferece muitos recursos e funcionalidades avançadas para trabalhar com objetos,
como herança de protótipo, construtores de objetos, entre outros. */
/* A herança prototípica em JavaScript é um conceito fundamental que permite que um objeto herde propriedades e métodos de outro objeto. Em vez de usar classes como em linguagens de
programação orientadas a objetos tradicionais, o JavaScript utiliza um modelo de herança baseado em protótipos.

Em JavaScript, cada objeto tem um protótipo interno que é outro objeto. Quando você tenta acessar uma propriedade ou método de um objeto, o JavaScript primeiro verifica se o objeto
possui essa propriedade. Se não, ele verifica no protótipo do objeto e continua subindo na cadeia de protótipos até encontrar a propriedade ou chegar ao topo da cadeia.

Aqui está um exemplo básico de como criar uma herança prototípica em JavaScript: */



// Definindo um objeto pai
var Pai = {
    nome: "João",
    saudacao: function() {
      console.log("Olá, eu sou o " + this.nome);
    }
  };
  
  // Criando um objeto filho que herda do objeto Pai
  var Filho = Object.create(Pai);
  
  // Modificando uma propriedade no objeto filho
  Filho.nome = "Pedro";
  
  // Chamando um método do objeto pai através do objeto filho
  Filho.saudacao(); // Saída: "Olá, eu sou o Pedro"



  /* Neste exemplo, temos um objeto Pai que possui uma propriedade nome e um método saudacao(). Em seguida, criamos um objeto Filho usando Object.create(Pai), o que faz com que Filho
herde todas as propriedades e métodos do objeto Pai. No entanto, podemos modificar a propriedade nome no objeto Filho sem afetar o objeto Pai. Ao chamar o método saudacao() no objeto
Filho, ele imprime a saudação com o nome do objeto Filho.

A herança prototípica em JavaScript é uma abordagem poderosa que permite criar uma hierarquia de objetos e reutilizar código de forma eficiente. É importante entender esse conceito
para trabalhar com JavaScript de maneira eficaz. */

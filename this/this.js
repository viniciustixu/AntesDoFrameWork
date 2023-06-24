/* Em JavaScript, a palavra-chave "this" refere-se ao objeto atual em contexto. O valor de "this" depende de como uma função é chamada e onde ela é declarada. Aqui estão algumas
informações importantes sobre o uso de "this" em JavaScript:

1. Funções regulares: Quando "this" é usado dentro de uma função regular, o valor de "this" é determinado pela forma como a função é chamada. Por exemplo: */

function exemplo() {
  console.log(this);
}

exemplo(); // "this" refere-se ao objeto global (geralmente é o objeto "window" em navegadores)

/* 2. Métodos de objeto: Quando uma função é um método de um objeto, o valor de "this" é definido como o próprio objeto no qual o método está sendo chamado. Por exemplo: */

const objeto = {
  nome: "Exemplo",
  imprimirNome() {
    console.log(this.nome);
  }
};

objeto.imprimirNome(); // "this" refere-se ao objeto "objeto" e imprime "Exemplo"

// 3. Funções de evento: Em manipuladores de eventos, como um evento de clique, o valor de "this" é definido como o elemento HTML que disparou o evento. Por exemplo:

    const botao = document.querySelector("button");

    botao.addEventListener("click", function() {
    console.log(this); // "this" refere-se ao elemento HTML do botão
    });


//4. Funções de construtor: Dentro de uma função de construtor, "this" refere-se ao objeto sendo criado. É usado para definir propriedades no objeto. Por exemplo:


    function Pessoa(nome) {
    this.nome = nome;
    }

    const pessoa1 = new Pessoa("Alice");
    console.log(pessoa1.nome); // "Alice"


//Lembrando que esses são apenas exemplos básicos de como "this" pode ser usado em JavaScript. O comportamento exato de "this" pode variar dependendo do contexto em que é utilizado.

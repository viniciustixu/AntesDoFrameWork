/* Closures, ou fechamentos, são um recurso poderoso em JavaScript que permite que uma função preserve o acesso às variáveis de seu escopo externo, mesmo depois que a função externa
tenha retornado. Em outras palavras, um closure é uma função juntamente com as referências às variáveis no escopo léxico em que ela foi definida.

Para entender melhor os closures, vamos ver um exemplo: */

    function saudacao(nome) {
    var mensagem = 'Olá, ' + nome + '!';

    function exibirMensagem() {
        console.log(mensagem);
    }

    return exibirMensagem;
    }

    var saudacaoJoao = saudacao('João');
    saudacaoJoao(); // Saída: Olá, João!

/* Neste exemplo, a função saudacao cria uma função interna chamada exibirMensagem, que tem acesso à variável mensagem definida no escopo de saudacao. A função saudacao retorna a função
exibirMensagem como resultado.

Ao chamar saudacao('João'), é criada uma instância da função exibirMensagem e atribuída à variável saudacaoJoao. Agora, quando chamamos saudacaoJoao(), ela exibe a mensagem "Olá,
João!", mesmo que a função saudacao já tenha retornado.

Isso acontece porque o closure retém uma referência à variável mensagem no escopo léxico em que foi definido. Mesmo após a execução de saudacao ter sido concluída, a função
exibirMensagem ainda tem acesso à variável mensagem.

Os closures são úteis em várias situações, como no encapsulamento de dados, na criação de funções de fábrica e no gerenciamento de estado privado. Eles permitem que você crie funções
que lembram e mantenham acesso a variáveis específicas, mesmo quando são executadas em um contexto diferente.

É importante ter em mente que closures podem levar ao consumo excessivo de memória se as variáveis retidas por eles forem muito grandes. Nesses casos, é necessário ter cuidado para
liberar as referências apropriadas e evitar vazamentos de memória.

Os closures são uma parte poderosa e avançada do JavaScript, e seu entendimento pode ajudar a escrever código mais flexível e modular. */

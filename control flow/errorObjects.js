/* Em JavaScript, objetos de erro são usados para representar e lidar com erros em tempo de execução ou condições excepcionais que podem ocorrer durante a execução do seu código.
Objetos de erro são instâncias do construtor embutido Error ou seus construtores derivados, como TypeError, SyntaxError, ReferenceError, e assim por diante.

Aqui está um exemplo de como utilizar objetos de erro em JavaScript: */


    try {
    // Código que pode lançar um erro
    if (algumaCondicao) {
        throw new Error('Algo deu errado.'); // Lançando um erro genérico
    } else {
        throw new TypeError('Tipo inválido.'); // Lançando um erro específico
    }
    } catch (erro) {
    // Capturando e lidando com o erro
    console.error(erro.message); // Exibindo a mensagem de erro
    console.error(erro.stack); // Exibindo a pilha de chamadas (se disponível)
    }

/* No trecho de código acima, o bloco try contém o código que pode potencialmente lançar um erro. Você pode usar a instrução throw para lançar explicitamente um erro. Neste exemplo,
lançamos um objeto de erro genérico Error e um objeto de erro específico TypeError com base em uma condição.

O bloco catch é usado para capturar e lidar com o erro lançado. A variável erro representa o objeto de erro capturado. Você pode acessar a mensagem de erro usando erro.message e a
pilha de chamadas (se disponível) usando erro.stack. Neste exemplo, exibimos a mensagem de erro e a pilha de chamadas no console.

Você também pode criar tipos de erros personalizados estendendo o construtor Error. Isso permite que você defina suas próprias classes de erro com propriedades e métodos específicos.
Aqui está um exemplo: */

    class MeuErroCustomizado extends Error {
    constructor(mensagem) {
        super(mensagem);
        this.name = 'MeuErroCustomizado';
    }

    // Adicione métodos personalizados conforme necessário
    logDetalhes() {
        console.log(`Erro ocorrido: ${this.message}`);
        console.log(`Nome do erro: ${this.name}`);
    }
    }

    try {
    throw new MeuErroCustomizado('Este é um erro personalizado.');
    } catch (erro) {
    if (erro instanceof MeuErroCustomizado) {
        erro.logDetalhes();
    } else {
        console.error(erro.message);
    }
    }

/* Neste exemplo, definimos uma classe de erro personalizada MeuErroCustomizado estendendo o construtor Error. Fornecemos um construtor personalizado que define a mensagem de erro e o
nome do erro. Além disso, adicionamos um método logDetalhes à classe de erro personalizada. Dentro do bloco catch, verificamos se o erro capturado é uma instância de
MeuErroCustomizado e chamamos o método logDetalhes. Caso contrário, exibimos a mensagem de erro como antes.

Utilizar objetos de erro em JavaScript permite que você lide com diferentes tipos de erros e forneça feedback significativo para desenvolvedores ou usuários quando algo inesperado
ocorrer durante a execução do seu código. */

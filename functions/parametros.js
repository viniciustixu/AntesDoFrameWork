/* Em JavaScript, os parâmetros de função são as variáveis que você define dentro da declaração da função e que recebem os valores passados quando a função é chamada. Os parâmetros
permitem que você passe valores para a função e use esses valores em seu corpo.

Aqui está um exemplo de função com parâmetros em JavaScript: */

    function saudacao(nome) {
    console.log("Olá, " + nome + "!");
    }

    saudacao("João"); // Saída: Olá, João!
    saudacao("Maria"); // Saída: Olá, Maria!

/* No exemplo acima, a função saudacao recebe um parâmetro chamado nome. Quando a função é chamada, um valor é passado como argumento para esse parâmetro. O valor é então usado dentro
da função para exibir uma saudação personalizada no console.

Em JavaScript, você também pode definir valores padrão para os parâmetros de função, caso nenhum argumento seja passado. Isso é feito usando a sintaxe nome = valorPadrao. Aqui está
um exemplo: */

    function saudacao(nome = "visitante") {
    console.log("Olá, " + nome + "!");
    }

    saudacao(); // Saída: Olá, visitante!
    saudacao("João"); // Saída: Olá, João!

/* No exemplo acima, se nenhum argumento for passado para a função saudacao, o valor padrão "visitante" será usado para o parâmetro nome.

Esses são os conceitos básicos sobre os parâmetros de função em JavaScript. Você pode usar quantos parâmetros forem necessários em suas funções e personalizá-los de acordo com sua
lógica e necessidades. */

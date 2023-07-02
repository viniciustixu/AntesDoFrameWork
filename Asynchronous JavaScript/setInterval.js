/* A função `setInterval` é usada em JavaScript para executar um bloco de código repetidamente em intervalos específicos de tempo. Aqui está um exemplo de como usar o `setInterval`
em JavaScript: */


    setInterval(function() {
    // código a ser executado repetidamente
    console.log("Olá, mundo!");
    }, 1000); // intervalo de tempo em milissegundos (neste caso, a cada segundo)


/* Neste exemplo, o bloco de código dentro da função anônima será executado a cada segundo (1000 milissegundos), imprimindo "Olá, mundo!" no console repetidamente. Você pode substituir
o código dentro da função anônima pelo seu próprio código que deseja executar repetidamente.

Lembre-se de que você pode usar a função `clearInterval` para parar a execução repetida do `setInterval`. Para fazer isso, você precisa atribuir o retorno do `setInterval` a uma
variável e, em seguida, chamar `clearInterval` com essa variável como argumento. Por exemplo:*/


    var intervalo = setInterval(function() {
    console.log("Olá, mundo!");
    }, 1000);

    // Parar a execução após 5 segundos
    setTimeout(function() {
    clearInterval(intervalo);
    }, 5000);


// Neste exemplo, o `setInterval` é configurado para imprimir "Olá, mundo!" a cada segundo, mas após 5 segundos, o `clearInterval` é chamado para parar a execução repetida.

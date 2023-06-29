/* Em JavaScript, um callback é uma função que é passada como argumento para outra função e é invocada (chamada) por essa função em um momento posterior. Callbacks são comumente
usados na programação assíncrona para lidar com o resultado de uma operação assíncrona, como fazer uma solicitação de API ou ler um arquivo.

Aqui está um exemplo de uso de um callback em JavaScript: */

function fazerAlgo(callback) {
  // Executa alguma operação assíncrona
  // ...

  // Após a operação assíncrona ser concluída, chama o callback
  callback();
}

function meuCallback() {
  console.log('Callback executado!');
}

// Chamando a função "fazerAlgo" e passando o callback "meuCallback"
fazerAlgo(meuCallback);


/* Neste exemplo, a função `fazerAlgo` recebe um callback como argumento e, após a operação assíncrona ser concluída, chama o callback. No caso, o callback é a função `meuCallback`,
que imprime uma mensagem no console.

Ao executar o código acima, a saída será "Callback executado!" quando a operação assíncrona for concluída e o callback for invocado.

Dessa forma, os callbacks permitem que você especifique ações personalizadas a serem executadas após uma operação assíncrona ser concluída, possibilitando o controle do fluxo
assíncrono do programa. */

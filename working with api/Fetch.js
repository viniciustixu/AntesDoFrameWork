/* "fetch" é uma função incorporada que permite fazer solicitações de rede e buscar recursos de um servidor web. Ele é comumente usado para recuperar dados de uma API
(Interface de Programação de Aplicativos) ou para enviar dados para um servidor.

A função "fetch" retorna uma Promessa (Promise), o que significa que ela trabalha de forma assíncrona. Isso permite que você envie uma solicitação e continue executando outras
tarefas enquanto aguarda a resposta do servidor.

Aqui está um exemplo básico de como usar o "fetch" para buscar dados de uma API: */


    fetch('https://api.exemplo.com/dados')
    .then(response => response.json())
    .then(data => {
        // Aqui você pode manipular os dados recebidos da API
        console.log(data);
    })
    .catch(error => {
        // Se ocorrer algum erro durante a solicitação, este bloco será executado
        console.log('Ocorreu um erro:', error);
    });


/* Neste exemplo, usamos o método "fetch" para fazer uma solicitação GET para o URL 'https://api.exemplo.com/dados'. Em seguida, encadeamos os métodos "then" para manipular a resposta
retornada pelo servidor. O método "json()" é usado para extrair os dados da resposta como um objeto JavaScript. Por fim, exibimos os dados no console.

É importante observar que o "fetch" pode lidar com diferentes tipos de solicitações HTTP, como GET, POST, PUT, DELETE, entre outros. Além disso, você pode passar opções adicionais
para personalizar sua solicitação, como cabeçalhos (headers) ou corpo da solicitação (request body).

Espero que isso tenha esclarecido o conceito de "fetch" em JavaScript! */

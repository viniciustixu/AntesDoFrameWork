/* Em JavaScript, o `XMLHttpRequest` é um objeto que permite fazer solicitações HTTP assíncronas a um servidor e receber os dados de resposta. Ele é amplamente usado para interagir
com APIs, buscar recursos externos e enviar dados para o servidor.

Aqui está um exemplo básico de como usar o `XMLHttpRequest`: */


    // Cria uma nova instância do objeto XMLHttpRequest
    var xhttp = new XMLHttpRequest();

    // Define uma função para lidar com a resposta da solicitação
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        // A resposta foi recebida com sucesso
        var resposta = this.responseText;
        console.log(resposta);
    }
    };

    // Define o tipo de solicitação e o URL do servidor
    xhttp.open("GET", "https://api.exemplo.com/dados", true);

    // Envia a solicitação
    xhttp.send();


/* Neste exemplo, estamos fazendo uma solicitação GET assíncrona para o URL "https://api.exemplo.com/dados". A função `onreadystatechange` é definida para lidar com a resposta da
solicitação quando ela estiver pronta. Quando o estado (`readyState`) for 4 e o status for 200, significa que a resposta foi recebida com sucesso. A resposta é então acessada
através da propriedade `responseText` do objeto `XMLHttpRequest`.

Existem outros métodos disponíveis no objeto `XMLHttpRequest`, como `open()` para configurar a solicitação, `send()` para enviar a solicitação e métodos para definir cabeçalhos
personalizados, lidar com respostas em formato JSON, entre outros. */

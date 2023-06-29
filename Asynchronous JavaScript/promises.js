 // algumas promessas em JavaScript:


    // Exemplo básico de uma promessa
    const minhaPromessa = new Promise((resolve, reject) => {
    // Executa alguma operação assíncrona
    // ...

    if (1==1/* operação foi bem-sucedida */) {
        resolve("Operação concluída com sucesso!"); // Promessa é cumprida
    } else {
        reject("Ocorreu um erro na operação!"); // Promessa é rejeitada
    }
    });

    // Utilizando a promessa
    minhaPromessa
    .then((resultado) => {
        console.log(resultado); // "Operação concluída com sucesso!"
    })
    .catch((erro) => {
        console.log(erro); // "Ocorreu um erro na operação!"
    });

    // Encadeando promessas
    const promessa1 = new Promise((resolve, reject) => {
    // Executa alguma operação assíncrona
    // ...

    resolve("Primeira promessa concluída!");
    });

    const promessa2 = new Promise((resolve, reject) => {
    // Executa outra operação assíncrona
    // ...

    resolve("Segunda promessa concluída!");
    });

    promessa1
    .then((resultado1) => {
        console.log(resultado1); // "Primeira promessa concluída!"
        return promessa2;
    })
    .then((resultado2) => {
        console.log(resultado2); // "Segunda promessa concluída!"
    })
    .catch((erro) => {
        console.log(erro);
    });


/* Essas são apenas algumas demonstrações básicas de como utilizar promessas em JavaScript. As promessas são muito poderosas para trabalhar com operações assíncronas, permitindo lidar
com sucesso e falhas de forma mais elegante e organizada. */
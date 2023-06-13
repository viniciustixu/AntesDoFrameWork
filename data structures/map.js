/* Em JavaScript, uma coleção com chaves é chamada de "Map" (Mapa). O Map é uma estrutura de dados que permite armazenar pares chave-valor, onde cada chave é única e mapeia para um
valor correspondente. É semelhante a um objeto, mas com algumas diferenças importantes.

Para criar um Map em JavaScript, você pode usar o construtor Map e adicionar pares chave-valor usando o método set(). Veja um exemplo básico: */

// Criando um novo Map
let meuMapa = new Map();

// Adicionando pares chave-valor
meuMapa.set("chave1", "valor1");
meuMapa.set("chave2", "valor2");
meuMapa.set("chave3", "valor3");

// Acessando valores por chave
console.log(meuMapa.get("chave1")); // Saída: "valor1"
console.log(meuMapa.get("chave2")); // Saída: "valor2"

// Verificando se uma chave existe no Map
console.log(meuMapa.has("chave3")); // Saída: true

// Obtendo o tamanho do Map
console.log(meuMapa.size); // Saída: 3

// Removendo um par chave-valor do Map
meuMapa.delete("chave2");
console.log(meuMapa.size); // Saída: 2

// Iterando sobre as chaves do Map
for (let chave of meuMapa.keys()) {
  console.log(chave);
}

// Iterando sobre os valores do Map
for (let valor of meuMapa.values()) {
  console.log(valor);
}

// Iterando sobre os pares chave-valor do Map
for (let [chave, valor] of meuMapa.entries()) {
  console.log(chave, valor);
}

/* O Map também fornece métodos como clear() para limpar todos os pares chave-valor, forEach() para iterar sobre os pares chave-valor com uma função de retorno de chamada e keys(),
values() e entries() para obter iteradores sobre as chaves, valores e pares chave-valor, respectivamente.

O uso de um Map em JavaScript é útil quando você precisa de uma coleção com chaves que não são necessariamente strings (ao contrário de um objeto), ou quando precisa preservar a ordem
de inserção dos elementos. */

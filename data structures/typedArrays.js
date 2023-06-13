/* Em JavaScript, os "Typed Arrays" (ou "Arrays Tipados") são uma forma de representar e manipular dados binários em um formato específico. Eles fornecem uma estrutura eficiente para
armazenar e acessar grandes quantidades de dados numéricos, como inteiros e valores em ponto flutuante, de maneira direta e otimizada.

Existem vários tipos de "Typed Arrays" disponíveis em JavaScript, cada um correspondendo a um tipo numérico diferente:

Int8Array: Array de 8 bits com sinal (valores entre -128 e 127).
Uint8Array: Array de 8 bits sem sinal (valores entre 0 e 255).
Uint8ClampedArray: Array de 8 bits sem sinal, com saturação (valores entre 0 e 255, com valores fora desse intervalo fixados nos limites).
Int16Array: Array de 16 bits com sinal (valores entre -32.768 e 32.767).
Uint16Array: Array de 16 bits sem sinal (valores entre 0 e 65.535).
Int32Array: Array de 32 bits com sinal (valores entre -2.147.483.648 e 2.147.483.647).
Uint32Array: Array de 32 bits sem sinal (valores entre 0 e 4.294.967.295).
Float32Array: Array de 32 bits em ponto flutuante (IEEE 754).
Float64Array: Array de 64 bits em ponto flutuante (IEEE 754).
Os "Typed Arrays" permitem a criação de arrays com tamanho fixo e fornecem métodos e propriedades específicos para manipulação desses dados, como acesso direto a elementos individuais,
iteração, cópia e manipulações aritméticas.

Aqui está um exemplo simples que demonstra como criar um "Typed Array" e atribuir valores a ele: */

// Cria um novo Int32Array com 5 elementos
let array = new Int32Array(5);

// Atribui valores aos elementos do array
array[0] = 10;
array[1] = 20;
array[2] = 30;
array[3] = 40;
array[4] = 50;

// Acessa e exibe o valor do terceiro elemento
console.log(array[2]); // Saída: 30

/* Os "Typed Arrays" são particularmente úteis quando se trabalha com dados brutos, como áudio, vídeo, imagens, ou quando há a necessidade de realizar operações matemáticas eficientes
em grandes conjuntos de dados. */

/* Lexical scoping, ou escopo léxico, é um conceito importante em JavaScript para determinar como as variáveis são acessadas e resolvidas durante a execução do código. O escopo léxico
é determinado pela posição física das declarações de variáveis no código fonte.

Em JavaScript, o escopo léxico é baseado nas funções e blocos aninhados. Isso significa que uma função interna pode acessar variáveis definidas em sua função externa, mas não o
contrário. O escopo léxico permite que as funções acessem variáveis em seu escopo local, bem como em escopos mais externos.

Vamos dar um exemplo para ilustrar o escopo léxico: */

    function exterior() {
    var x = 10;

    function interior() {
        console.log(x); // A função interior tem acesso à variável x do escopo exterior
    }

    interior(); // Chama a função interior
    }

    exterior(); // Saída: 10

/* Neste exemplo, a função interior é definida dentro da função exterior. A função interior tem acesso à variável x declarada na função exterior porque o escopo léxico permite que
funções internas acessem variáveis definidas em funções externas.

O escopo léxico é determinado durante o tempo de compilação, quando o código é analisado, e não durante o tempo de execução. Isso significa que, mesmo que uma função seja chamada de
um local diferente do qual ela foi definida, ela ainda terá acesso às variáveis do seu escopo léxico original.

Vale ressaltar que a introdução do let e const no ECMAScript 6 (ES6) trouxe uma alteração sutil no escopo léxico em relação ao uso de var. Enquanto var tem escopo de função, let e
const têm escopo de bloco, o que significa que suas variáveis são limitadas ao bloco mais próximo em que são definidas.

O escopo léxico é uma parte fundamental da linguagem JavaScript e desempenha um papel importante na determinação da visibilidade e acessibilidade das variáveis em diferentes partes
do código. */

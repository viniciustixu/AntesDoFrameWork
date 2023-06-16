/*Em JavaScript, você pode comparar valores para igualdade usando o operador de igualdade (==) ou o operador de igualdade estrita (===). Veja como cada um deles funciona:

Operador de Igualdade (==): O operador de igualdade compara os valores em ambos os lados, realizando coerção de tipo, se necessário. Ele tenta converter os operandos para o mesmo tipo
antes de fazer a comparação. Por exemplo: */

    console.log(5 == "5");  // true
    console.log(true == 1); // true
    console.log(null == undefined); // true

/* Nos exemplos acima, o operador de igualdade converte a string "5" para o número 5 e o valor booleano true para o número 1 antes de fazer a comparação. Observe que esse operador às
vezes pode levar a resultados inesperados devido à coerção implícita de tipos.

Operador de Igualdade Estrita (===): O operador de igualdade estrita compara os valores em ambos os lados sem realizar coerção de tipo. Ele verifica se os operandos são do mesmo tipo
e têm o mesmo valor. Por exemplo: */

    console.log(5 === "5");  // false
    console.log(true === 1); // false
    console.log(null === undefined); // false

/* Nos exemplos acima, o operador de igualdade estrita não realiza nenhuma coerção de tipo, portanto, as comparações retornam false.

Geralmente, é recomendado usar o operador de igualdade estrita (===) em JavaScript, pois ele evita comportamentos inesperados causados pela coerção de tipo. Ao usar a igualdade
estrita, você garante que tanto o valor quanto o tipo dos operandos sejam considerados na comparação.

Além desses operadores de igualdade, o JavaScript também fornece os operadores de desigualdade (!= e !==), que realizam comparações semelhantes, mas verificam a desigualdade em vez
disso. */

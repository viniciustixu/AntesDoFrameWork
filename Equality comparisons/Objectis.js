/* Em JavaScript, você também pode usar o método Object.is() para fazer comparações de igualdade. O Object.is() realiza uma comparação estrita entre dois valores e retorna true se os
valores forem considerados estritamente iguais, ou seja, se tiverem o mesmo valor e o mesmo tipo. Veja um exemplo: */

    console.log(Object.is(5, 5));  // true
    console.log(Object.is("5", 5));  // false
    console.log(Object.is(true, 1));  // false
    console.log(Object.is(null, undefined));  // false

/* No exemplo acima, o Object.is() retorna true apenas quando os valores são estritamente iguais. Ele não realiza coerção de tipo, diferentemente do operador de igualdade (==) e do
operador de igualdade estrita (===).

O método Object.is() é útil quando você precisa de uma comparação estrita de igualdade, levando em conta tanto o valor quanto o tipo dos operandos.

É importante ressaltar que o método Object.is() pode ser usado para tratar casos especiais de igualdade, como NaN (Not-a-Number) e -0 (zero negativo), que têm comportamentos
distintos em comparações. */

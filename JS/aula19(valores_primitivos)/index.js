/*
Primitivos (imutaveis) - string, number, boolean, undefined, null (bignit, symbol) - valores copiados

Referência (mutáveis) - array, object, function
*/

let a = [1, 2, 3]
let b = [...a]
console.log(a,b)

a.push(4) //adiciona um valor?
console.log(a, b)

b.pop()
console.log(a,b)

/*
Operadores Lógicos
&& -> AND -> E (Se tiver algum false na expressao... a expressao toda i´ra retornar false)
|| -> OR -> OU 
! -> NOT -> NÃO
*/

// const expressaoAnd = true && true && true  && true
// const expressaoOr = true || false // Se tiver algo verdadeiro(true) dentro da expressao, ela toda irá retornar true
// console.log(expressaoOr) 

const usuario = 'Gaby';
const senha = 123456;
// if ( usuario === 'Gaby' && senha === 123456) {
//     console.log(`Bem vindo ${usuario}`)
// } else {
//     console.log(`Acesso negado`)
// }
const vaiLogar = usuario === 'Gaby' && senha === 123456;
console.log(vaiLogar);


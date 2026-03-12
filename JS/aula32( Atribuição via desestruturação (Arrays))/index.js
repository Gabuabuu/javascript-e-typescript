// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const [primeiroNumero, segundoNumero, ...demaisNumeros] = numeros //... é o "resto"
// console.log(primeiroNumero, segundoNumero)
// console.log(demaisNumeros)

/* 
Operador	O que faz
Spread ...	Espalha valores
Rest ...	Agrupa valores
 */


const numeros = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9],
];
const lista = [lista1, lista2, lista3] = numeros

console.log(lista2[0], lista1[2]) //Acessando um valor atráves de seu index em um array
const pessoa = {
  nome: 'Gabryel',
  idade: 21,
  estado: 'RS',
  trabalho: {
    funcao: 'Auxiliar administrativo',
    bairro: 'Bom fim',
    empresa: 'Barz'
  }
} // Objeto

// const { nome: teste, idade } = pessoa;

//Atribuição via desestruturação
const { nome, idade, ...teste } = pessoa;
console.log( teste, idade);
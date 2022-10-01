/*function criaPessoa (nome, sobrenome, idade) {
  return {nome, sobrenome, idade};
}
const pessoa1 = criaPessoa('Gabryel', 'Neves', 17) //Argumento passado para os parâmetros "nome, sobrenome, idade"
const pessoa2 = criaPessoa('Travis', 'Scott', 29)
const pessoa3 = criaPessoa('Jean', 'Neves', 7)
console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome)*/

const pessoa1 = {
  nome: 'Gabryel',
  sobrenome: 'Neves',
  idade: 17,
  
  fala () {
    console.log(`${this.nome} ${this.sobrenome} tá falando oi`) //this = esse metodo(pessoa1)
  }
};

pessoa1.fala()

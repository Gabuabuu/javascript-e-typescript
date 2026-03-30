const nome = ['Gabryel Neves', 'Pedro', 'Joj']

// for (let i =0; i < nome.length; i++){
//   console.log(nome[i])
// }

// for (let i in nome ) {
//   console.log(nome[i])
// }

for (let valor of nome) {
  console.log(valor)
}


nome.forEach(function(e, i) {
  console.log(e, i)
})
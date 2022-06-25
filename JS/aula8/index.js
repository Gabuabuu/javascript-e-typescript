const nome = 'Luiz Otávio ';
const sobrenome = 'Miranda';
const idade = 18;
const peso = 67;
const alturaEmM = 1.70;

let imc; //peso / (altura * altura)
let anoNascimento;

imc = peso / (alturaEmM * alturaEmM)
anoNascimento = 2022 - 18

console.log(imc, anoNascimento)

const resposta = `${nome}${sobrenome} tem ${idade} anos e nasceu em ${anoNascimento} tem ${alturaEmM}m de altura, pesa ${peso}kg e seu imc é de ${imc.toFixed(2)}`

console.log(resposta)
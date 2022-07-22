const nome = prompt('Digite seu nome completo:');
document.body.innerHTML += `Seu nome é: <strong>${nome}</strong><br />`;
 
 countLetters()
 secondLetter()
 letterIndex()
 lastIndex()
 lastLetters()
 words()
 toUpperCase()
 toLowerCase()

//Functions//

function countLetters () {
  document.body.innerHTML += `Seu nome tem <strong>${nome.length}</strong> letras <br/>`
  //document.body.innerHTML += `Seu nome tem ______ letras <br/>`;
}
function secondLetter () {
  document.body.innerHTML += `A segunda letra do seu nome é: <strong>${nome.charAt(1)}</strong> <br />`//charAt(1) = Mostra em qual indice tá a letra;
  
  //Da tambem para usar ${nome[1]} (Que retornara a segunda letra do nome)
}
function letterIndex  () {
  document.body.innerHTML += `Qual o primeiro índice da letra a no seu nome? ${nome.indexOf('a')}  <br />`;
}
function lastIndex    () {
  document.body.innerHTML += `Qual o último índice da letra a no seu nome? <strong>${nome.lastIndexOf('a')}</strong> <br />`;
}
function lastLetters  () {
  document.body.innerHTML += `As últimas 3 letras do seu nome são: <strong>${nome.slice(-3)}</strong> <br />`;
}
function words        () {
  document.body.innerHTML += `As palavras do seu nome são: <strong>${nome.match(/[a-z]/g)}</strong> <br />`;
}
function toUpperCase  () {
  document.body.innerHTML += `Seu nome com letras maiúsculas: <strong>${nome.toUpperCase()}</strong> <br />`;
}
function toLowerCase  () {
  document.body.innerHTML += `Seu nome com letras minúsculas: <strong>${nome.toLowerCase()}</strong> <br />`;
}

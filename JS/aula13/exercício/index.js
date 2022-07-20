const nome = prompt('Digite seu nome completo:');
document.body.innerHTML += `Seu nome é: ${nome}<br />`;
 
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
  document.body.innerHTML += `Seu nome tem ${nome.length} letras <br/>`
  //document.body.innerHTML += `Seu nome tem ______ letras <br/>`;
}
function secondLetter () {
  document.body.innerHTML += `A segunda letra do seu nome é: ${nome.charAt(1)} <br />`//charAt(1) = Mostra em qual indice tá a letra;
  
  //Da tambem para usar ${nome[1]} (Que retornara a segunda letra do nome)
}
function letterIndex  () {
  document.body.innerHTML += `Qual o primeiro índice da letra no seu nome? ${nome.indexOf(nome)}  <br />`;
}
function lastIndex    () {
  document.body.innerHTML += `Qual o último índice da letra LETRA no seu nome? ${nome.lastIndexOf(nome.value)} <br />`;
}
function lastLetters  () {
  document.body.innerHTML += `As últimas 3 letras do seu nome são: ${nome.slice(-3)} <br />`;
}
function words        () {
  document.body.innerHTML += `As palavras do seu nome são: ${nome.match(/[a-z]/g)} <br />`;
}
function toUpperCase  () {
  document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toUpperCase()} <br />`;
}
function toLowerCase  () {
  document.body.innerHTML += `Seu nome com letras minúsculas: ${nome.toLowerCase()} <br />`;
}
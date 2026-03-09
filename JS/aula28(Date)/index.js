// const data = new Date(); //Sempre que tiver a palavra "new" é uma função construtora, e sempre começa com a primeira letra maiuscula

// const dia = data.getDate()
// const mes = data.getMonth()
// const ano = data.getFullYear()


// console.log(`Hoje é dia ${dia} de ${mes + 1} de ${ano}`)

function zero(num) {
  return num >= 10 ? num : `0${num}`
}

function formataData(data) {
  const dia = zero(data.getDate());
  const mes = zero(data.getMonth() + 1);
  const ano = zero(data.getFullYear());
  const hora = zero(data.getHours());
  const min = zero(data.getMinutes());
  const seg = zero(data.getSeconds());

  return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data = new Date();
const dataBrasil = formataData(data)
console.log(dataBrasil)
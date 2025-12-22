const form = document.getElementById("form-imc");


form.addEventListener('submit', (e) => {
  e.preventDefault()

  const inputPeso = e.target.querySelector('#peso');
  const inputAltura = e.target.querySelector('#altura');

  const peso = Number(inputPeso.value)
  const altura = Number(inputAltura.value)

  if (!peso) {
    showResult('Preencha o campo "peso" corretamente', false)
    return;
  }
  if (!altura) {
    showResult('Preencha o campo "altura" corretamente', false)
    return;
  }
  const imc = getImc(peso, altura);
  console.log('teste')
})

function getImc () {
  const imc = peso / altura ** 2
}


function criaParagrafo() {
  const p = document.createElement('p');
  return p;
}

const showResult = (msg, isValid) => {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = ``;

  const paragrafo = criaParagrafo()
  paragrafo.innerHTML = msg
  resultado.appendChild(paragrafo)
}


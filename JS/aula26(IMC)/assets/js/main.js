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
  const imcList = getImcList(imc)

  const msg = `Seu IMC ${imc} (${imcList})`

  showResult(msg, true);
})

/*

Menos do que 18,5 Abaixo do peso
Entre 18,5 e 24,9 Peso normal
Entre 25 e 29,9 Sobrepeso
Entre 30 e 34,9 Obesidade grau 1
Entre 35 e 39,9 Obesidade grau 2
Mais do que 40

Obesidade grau 3


 */



function getImcList(imc) {
  const color = paragrafo
  const imcList = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
    'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']
  if (imc >= 39.9) {
    color.style.backgroundColor = 'purple'
    return imcList[5]
  } 
}

function getImc(peso, altura) {
  const imc = peso / altura ** 2
  return imc.toFixed(2)
}


function criaParagrafo() {
  const p = document.createElement('p');
  return p;
}
const paragrafo = criaParagrafo()

const showResult = (msg, isValid) => {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `test`;



  if (isValid) {
    paragrafo.classList.add('paragrafo-resultado')
  } else {
    paragrafo.classList.add('bad')
  }

  paragrafo.innerHTML = msg
  resultado.appendChild(paragrafo)
}


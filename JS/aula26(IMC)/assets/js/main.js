const form = document.getElementById("form-imc");


form.addEventListener('submit', (e) => {
  e.preventDefault()
  showResult();
})

const showResult = (msg) => {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = ``;

  const p = document.createElement('p');
   p.classList.add('paragrafo-result')
  p.innerHTML = ('Paragrafo');
  resultado.appendChild(p);
}


// const frutas = ['maça', 'banana', 'uva', 'abacaxi', 'laranja', 'mamão' ];

const carro = {
  marca: 'Nissan',
  modelo: 'Kait',
  ano: 2020,
  dono: 'Gabryel',
  placa: 'UU28W82'
}


for (let info in carro) {
  console.log(info, carro[info])
}
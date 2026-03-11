const currentDayContainer = document.getElementById('currentDay')
const data = new Date()
const options = {
  dateStyle: 'full',
  timeStyle: 'short'
};

currentDayContainer.innerHTML = `${data.toLocaleString('pt-BR', options)}`
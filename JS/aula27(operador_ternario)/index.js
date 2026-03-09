const pontosVip = 500
const pontuacaoUsuario = pontosVip >= 600 ? 'Usuario vip' : 'Usuario normal'


const corUsuario = null;
const corPadrao = corUsuario || 'Azul' //Fallback em JavaScript é uma técnica de programação defensiva para fornecer uma resposta alternativa, valor padrão

console.log(pontuacaoUsuario, corPadrao)
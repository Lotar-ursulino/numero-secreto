let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';

function verificarBotao(){
    console.log('o botao foi clicado');
}

function alerta(){
    alert('Eu amo js');
}

function perguntaCidade(){
    let cidade = prompt('Digite o nome de uma cidade do Brasil');
    alert(`Estive em ${cidade} e lembrei de voce`);
}

function soma(){
    let numero1 = prompt('digite o primeiro numero');
    let numero2 = prompt('digite o segundo numero');
    let soma = parseInt(numero1) + parseInt(numero2);
    alert(`A soma dos numeros é ${soma}`);
}
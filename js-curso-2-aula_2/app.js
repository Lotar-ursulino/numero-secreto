/*
let titulo = document.querySelector('h1');
titulo.innerHTML = 'jogo do numero secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um numero entre 1 e 10';

let campo = document.querySelector(tag);
campo.innerHTML
*/
let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numero = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function mensagemInicial(){
    exibirTextoNaTela('h1', 'jogo do numero secreto');
    exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10');
}

mensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    if(chute == numero){
        exibirTextoNaTela('h1', 'Acertou');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Voce acertou em ${tentativas} ${palavraTentativas}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute > numero){
            exibirTextoNaTela('p', 'O numero secreto é menor');
        }else{
            exibirTextoNaTela('p', 'O numero secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeNumero = listaDeNumerosSorteados.length;
    if(quantidadeDeNumero == numeroLimite){
        listaDeNumerosSorteados = [];
    }
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numero =gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    
}












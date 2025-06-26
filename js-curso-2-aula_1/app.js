/*
let titulo = document.querySelector('h1');
titulo.innerHTML = 'jogo do numero secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um numero entre 1 e 10';

let campo = document.querySelector(tag);
campo.innerHTML
*/
let numero = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
exibirTextoNaTela('h1', 'jogo do numero secreto');
exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10');

function verificarChute(){
    let chute = document.querySelector('input').value;
    if(chute == numero){
        console.log('voce acertou');
    }else{
        console.log('voce errou');
    }
}

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 10 + 1);
}
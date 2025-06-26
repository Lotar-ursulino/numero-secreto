
let numero1 = prompt('digite o primeiro numero');
let numero2 = prompt('digite o segundo numero');
let numero3 = prompt('digite o terceiro numero');



function exibirNaTela(){
    let media = (parseInt(numero1) + parseInt(numero2) + parseInt(numero3))/3;
    console.log(media);
}
exibirNaTela();
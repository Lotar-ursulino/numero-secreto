alert('Boas vindas ao jogo do número secreto');
let numeroAleatorio = Math.random();
let numeroSecreto =parseInt(numeroAleatorio*100 + 1);
console.log(numeroSecreto);
let chute ;
let tentativas = 1;

//enquanto chute não for igual o numero secreto
while (chute != numeroSecreto){
    chute = prompt('Escolha um número entre 1 e 100');
    
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if(chute < numeroSecreto){
            alert('O numero secreto é maior que o chute ' +chute);
        }else{
            alert('O numero secreto é menor que o chute ' +chute);
        }
        tentativas++;
    }
}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}` );

/*
if(tentativas > 1){
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas` );
}else{
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com 1 tentativa` );
}
*/

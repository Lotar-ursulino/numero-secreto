alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute ;
let tentativas = 1;

//enquanto chute não for igual o numero secreto
while (chute != numeroSecreto){
    chute = prompt('Escolha um número entre 1 e 10');

    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas` );
    } else {
        if(chute < numeroSecreto){
            alert('O numero secreto é maior que o chute ' +chute);
        }else{
            alert('O numero secreto é menor que o chute ' +chute);
        }
        tentativas++;
    }
}


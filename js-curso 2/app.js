let listaDeNumerosSorteados= [];
let limiteDeNumeros = 10;
let numeroSecreto = gerarUmNumeroAleatorio();
let tentativas = 1
function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector (tag);
    campo.innerHTML = texto ;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Male',{rate:1.5});
}

       function exibirMensagemInicial() {exibirTextoNaTela('h1','jogo da sorte'); 
        exibirTextoNaTela('p','escolha um numero se tiver sorte');}

        exibirMensagemInicial();
 
function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
exibirTextoNaTela('h1', 'sortudo do caralho')
let palavratentativa = tentativas > 1? 'tentativas':'tentativa';
let mensagemTentativas =`voce acertou em ${tentativas} ${palavratentativa}!`;
exibirTextoNaTela('p', mensagemTentativas)
document.getElementById('reiniciar').removeAttribute('disabled');
}
else {
    if (chute  >numeroSecreto){
        exibirTextoNaTela('p', 'o numero é menor burrão');
    }
else {
    exibirTextoNaTela ('p', 'o numero é maior tanso');
}  
tentativas++;
limparcampo ();  }
    }

    function gerarUmNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * (limiteDeNumeros) + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista==(limiteDeNumeros) ){
        listaDeNumerosSorteados = []
    }
    
     if (listaDeNumerosSorteados.includes(numeroEscolhido)){
     return gerarUmNumeroAleatorio();
    } else {listaDeNumerosSorteados.push(numeroEscolhido);
    console.log (listaDeNumerosSorteados)
     return numeroEscolhido;}
}
 function limparcampo () {
    chute = document.querySelector ('input');
    chute.value = '';
}
function reiniciarJogo(){
    numeroSecreto = gerarUmNumeroAleatorio();
    limparcampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById ('reiniciar').setAttribute('disabled', true);

}
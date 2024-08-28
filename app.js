let listaDeNumeroSorteado = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroaleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto; 
   
}

function exibirMensagemInicial (){
exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('h2', 'Escolha um número entre 1 e 10:');
}
 exibirMensagemInicial();

function gerarNumeroaleatorio() {
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeDeElementosNaLista = listaDeNumeroSorteado.length;
   
   if(quantidadeDeElementosNaLista == numeroLimite) {
    listaDeNumeroSorteado = [];
   }

   if (listaDeNumeroSorteado.includes(numeroEscolhido)){
    return gerarNumeroaleatorio()
   } else {
    listaDeNumeroSorteado.push(numeroEscolhido);
    return numeroEscolhido;
   }
}


function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Parabéns você Acertou!!');
        let palavraTentativa = tentativas > 1 ? 'tentativas':'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('h2', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('h2', 'O número secreto é menor')
        } else {
            exibirTextoNaTela('h2', 'O número secreto maior')
        }
        
        tentativas ++;
        limparCampo();
}
}
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';

}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroaleatorio();
    limparCampo();
    tentativas = 1; 
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    
}
let listaDeNumerosSorteados = []
let numeroLimite = 10;
let numeroSecerto = gerarNumeroAleatorio();
let tentativas = 1

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto , 'Brazilian Portuguese Female', 
    {rate:1.2});
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}
exibirMensagemInicial()

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecerto) {
        exibirTextoNaTela('h1', 'acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `voce descobriu o número secreto com ${tentativas} ${palavraTentativa} tentativas`
        exibirTextoNaTela('p', mensagemTentativas)
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        if (chute > numeroSecerto) {
            exibirTextoNaTela('p', 'O numero secreto é menor ')
        } else {
            exibirTextoNaTela('p', 'O numero secreto é maior')
        }
        tentativas++;
        limparCampo();

    }
}

function gerarNumeroAleatorio() {
     let = numeroEscolhido = parseInt(Math.random() * numeroLimite+ 1);
     let quantidadeDeElementosLista = listaDeNumerosSorteados.length;

if(quantidadeDeElementosLista == numeroLimite ){
    listaDeNumerosSorteados = []
}

     if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
     } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido
     }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecerto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled', true)
}

const textMaiorMenor = document.getElementById("maior-menor");

function verificarSeOChuteTemValorValido(numberVoice) {
    const numero = +numberVoice

    if(NumberForInvalido(numero)) {
        elementoChute.innerHTML += `<div class="C">Não é um número!</div>`
        return
    } else {
        if (valorPermitido(numero)) {
            elementoChute.innerHTML += `<div class="dica">Valor não permitido! Diga um número entre ${menorValor} e ${maiorValor}</div>`
            return
        } else {
            if (numero === numeroSecreto) {
                document.body.innerHTML = `
                <img class="imagem" src="assets/metaverso-animate.svg" alt="imagem meta verso">

                <h2 class="acertou">Você acertou!</h2>
                <h3>O número secreto era ${numeroSecreto}.</h3>

                <button id="jogar-novamente" class="btn-jogar">jogar novamente</button>
                `
            } else if (numero > numeroSecreto) {
                elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-arrow-up fa-rotate-180"></div>`
            } else {
                elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>`
            }
        }
    }
};

function NumberForInvalido(numero) {
    return Number.isNaN(numero);
}

function valorPermitido(numero) {
    return numero > maiorValor || numero < menorValor 
};
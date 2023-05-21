const menorValor = 0;
const maiorValor = 100;
const numeroSecreto = gerarNumero();

const valorMenor = document.getElementById("menor-valor");
const valorMaior = document.getElementById("maior-valor");

valorMenor.innerHTML = menorValor;
valorMaior.innerHTML = maiorValor;

function gerarNumero() {
    return parseInt(Math.random() * maiorValor + 1)
};
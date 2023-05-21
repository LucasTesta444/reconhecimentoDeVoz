const elementoChute = document.getElementById("chute");

const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(e) {
    numberVoice = e.results[0][0].transcript
    exibeChuteNaTela(numberVoice)
    verificarSeOChuteTemValorValido(numberVoice)
};

function exibeChuteNaTela(numberVoice) {
    elementoChute.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${numberVoice}</span>
    `
};

recognition.addEventListener('end', () => recognition.start());
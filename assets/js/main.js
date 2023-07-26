const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

const tresHoras = 60 * 60 * 3 * 1000;
const horaZerada = new Date(tresHoras);
let contador = 0;
let tempoAtual;
let timer;

iniciar.addEventListener('click', (e) => {
    removeVermelho();
    timer = setInterval(function () {
        contador += 1000;
        tempoAtual = new Date(tresHoras + contador);
        relogio.innerHTML = formataHoraString(tempoAtual);
    }, 1000);
})

pausar.addEventListener('click', (e) => {
    relogio.classList.add('paused');
    paraRelogio();
})

zerar.addEventListener('click', (e) => {
    contador = 0;
    tempoAtual = 0;
    removeVermelho();
    paraRelogio();
    relogio.innerHTML = formataHoraString(horaZerada);
})

function formataHoraString(hora) {
    return hora.toLocaleTimeString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    })
}

function paraRelogio() {
    setTimeout(() => {
        clearInterval(timer);
    }, 1);
}

const removeVermelho = () => relogio.classList.contains('paused') ? relogio.classList.remove('paused') : null;
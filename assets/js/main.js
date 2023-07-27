const relogio = document.querySelector('.relogio');

let contador = 0;
let timer;

document.addEventListener('click', (e) => {
    const el = e.target;                       

    if (el.classList.contains('iniciar')) {
        removeVermelho();
        paraRelogio();          // ---> Utilizado para evitar que, ao clicar em 'iniciar' a 2ªvez, haja "dois timers concomitantes" operando.
        iniciaRelogio();
    }
    if (el.classList.contains('pausar')) {
        relogio.classList.add('paused');
        paraRelogio();
    }
    if (el.classList.contains('zerar')) {
        removeVermelho();
        paraRelogio();
        contador = 0;
        const horaZerada = new Date(0);
        relogio.innerHTML = formataHoraString(horaZerada);
    }
})

function formataHoraString(hora) {
    return hora.toLocaleTimeString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZone: 'GMT'
    })
}

function iniciaRelogio() {
    timer = setInterval(function () {
        contador += 1000;
        let tempoAtual = new Date(contador);
        relogio.innerHTML = formataHoraString(tempoAtual);
    }, 1000);
}

function paraRelogio() {
    clearInterval(timer);
}

const removeVermelho = () => relogio.classList.contains('paused') ? relogio.classList.remove('paused') : null;

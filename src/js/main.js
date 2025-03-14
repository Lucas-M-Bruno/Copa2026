AOS.init();

const dataEvento = new Date("Jun 20, 2026 15:00:00");
const timeStamp = dataEvento.getTime();

const contaHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime(); 

    const distenciaAteEvento = timeStamp - timeStampAtual;

    const diasEmMs = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;

    const diasAteEvento = Math.floor(distenciaAteEvento / diasEmMs);
    const horasAteEvento = Math.floor((distenciaAteEvento % diasEmMs) / horasEmMs);
    const minutosAteEvento = Math.floor((distenciaAteEvento % horasEmMs) / minutosEmMs);
    const segundosAteEvento = Math.floor((distenciaAteEvento % minutosEmMs) / 1000);

    const timer = document.getElementById('count');
    const timerValue = timer.innerHTML = `${diasAteEvento}d ${horasAteEvento}hrs ${minutosAteEvento}min ${segundosAteEvento}seg`;

    if(distenciaAteEvento < 0) {
        clearInterval(contaHoras);
        timer.innerHTML = `Evento expirado`
    }
    
}, 1000)
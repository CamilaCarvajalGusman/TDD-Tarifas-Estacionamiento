function ingresarFecha(fecha) {
    return new Date(fecha);
}

function ingresarHora(hora) {
    return hora;
}
function perdidaTicket(respuesta) {
    if (respuesta === true) {
        return "SI";
    } else {
        return "NO";
    }
}

function calcularTarifa(fechaEntrada, horaEntrada, fechaSalida, horaSalida) {
    const entrada = new Date(`${fechaEntrada}T${horaEntrada}`);
    let salida = new Date(`${fechaSalida}T${horaSalida}`);
    if (horaSalida === "00:00") {
        salida.setDate(salida.getDate() + 1);
    }
    const tarifaDiurna = 10;
    const tarifaNocturna = 6;
    let minutosDiurnos = 0;
    let minutosNocturnos = 0;
    let actual = new Date(entrada);
    while (actual < salida) {
        const hora = actual.getHours();
        const minutosRestantes = Math.min(60, (salida - actual) / (1000 * 60));
        if (hora >= 6 && hora < 22) {
            minutosDiurnos += minutosRestantes;
        } else {
            minutosNocturnos += minutosRestantes;
        }
        actual.setMinutes(actual.getMinutes() + minutosRestantes);
    }
    const horasDiurnas = Math.ceil(minutosDiurnos / 60);
    const horasNocturnas = Math.ceil(minutosNocturnos / 60);
    return horasDiurnas * tarifaDiurna + horasNocturnas * tarifaNocturna;
}

export { ingresarFecha, ingresarHora, perdidaTicket, calcularTarifa };
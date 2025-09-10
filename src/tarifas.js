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
    const salida = new Date(`${fechaSalida}T${horaSalida}`);
    const tarifaDiurna = 10;
    const tarifaNocturna = 6;
    let horasDiurnas = 0;
    let horasNocturnas = 0;
    let actual = new Date(entrada);
    while (actual < salida) {
        const hora = actual.getHours();
        if (hora >= 6 && hora < 22) {
            horasDiurnas++;
        } else {
            horasNocturnas++;
        }
        actual.setHours(actual.getHours() + 1);
    }
    const total = Math.ceil(horasDiurnas) * tarifaDiurna + Math.ceil(horasNocturnas) * tarifaNocturna;
    return total;
}

export { ingresarFecha, ingresarHora, perdidaTicket, calcularTarifa };
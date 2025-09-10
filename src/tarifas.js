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
    console.log("Entrada: ",entrada);
    console.log("Salida: ",entrada);
    console.log("Imprimir: ",((salida - entrada) / (1000 * 60 * 60)))
    return ((salida - entrada) / (1000 * 60 * 60)) * 10;

}

export { ingresarFecha, ingresarHora, perdidaTicket, calcularTarifa };
function ingresarFecha(fecha){
    return new Date(fecha);
}

function ingresarHora(hora){
    return hora;
}
function perdidaTicket(respuesta){
    if(respuesta === true){
        return "SI";
    }else{
        return "NO";
    }
}

export  {ingresarFecha, ingresarHora, perdidaTicket};
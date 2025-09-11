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

function calcularTarifa(fechaEntrada, horaEntrada, fechaSalida, horaSalida, perdioTicket) {
    const entrada = new Date(`${fechaEntrada}T${horaEntrada}`);
    let salida = new Date(`${fechaSalida}T${horaSalida}`);
    if (perdioTicket) {
        return 80;
    }
    
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
    if ((horasDiurnas * tarifaDiurna + horasNocturnas * tarifaNocturna) > 50) {
        return 50;
    }

    return horasDiurnas * tarifaDiurna + horasNocturnas * tarifaNocturna;
}

export function calcularTarifaConDesglose(fechaEntrada, horaEntrada, fechaSalida, horaSalida, perdidaTicket) {
  const entrada = new Date(`${fechaEntrada}T${horaEntrada}`);
  const salida = new Date(`${fechaSalida}T${horaSalida}`);

  if (salida < entrada) {
    alert("Error, la hora de salida no puede ser anterior a la hora de entrada");
    return { total: 0, detallePorDia: [] };
  }

  const tarifaDiurna = 10;
  const tarifaNocturna = 6;
  const topeDiario = 50;
  const tarifaPerdida = 80;

  let actual = new Date(entrada);
  let desglose = {};

  while (actual < salida) {
    const diaClave = actual.toISOString().split("T")[0];
    if (!desglose[diaClave]) {
      desglose[diaClave] = { diurnas: 0, nocturnas: 0 };
    }

    const hora = actual.getHours();
    if (hora >= 6 && hora < 22) {
      desglose[diaClave].diurnas++;
    } else {
      desglose[diaClave].nocturnas++;
    }

    actual.setHours(actual.getHours() + 1);
  }

  let total = 0;
  let detallePorDia = [];

  for (const dia in desglose) {
    let subtotal = desglose[dia].diurnas * tarifaDiurna + desglose[dia].nocturnas * tarifaNocturna;
    if (subtotal > topeDiario) subtotal = topeDiario;
    detallePorDia.push({
      fecha: dia,
      horasDiurnas: desglose[dia].diurnas,
      horasNocturnas: desglose[dia].nocturnas,
      totalDia: subtotal
    });
    total += subtotal;
  }

  if (perdidaTicket) {
    total = tarifaPerdida;
    detallePorDia = [{
      fecha: "N/A",
      motivo: "Pérdida de ticket",
      horasDiurnas: 0,
      horasNocturnas: 0,
      totalDia: tarifaPerdida
    }];
  }

  return { total, detallePorDia };
}

export { ingresarFecha, ingresarHora, perdidaTicket, calcularTarifa };
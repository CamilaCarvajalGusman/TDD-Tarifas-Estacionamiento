import { calcularTarifa, calcularTarifaConDesglose, ingresarFecha, ingresarHora, perdidaTicket } from "./tarifas";

const fecha_entrada = document.querySelector("#fecha_entrada");
const fecha_salida = document.querySelector("#fecha_salida");
const horaEntrada = document.querySelector("#horaIngreso");
const horaSalida = document.querySelector("#horaSalida");
const ticket =document.getElementsByName("perdida_ticket");
const form = document.querySelector("#tarifas");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let ticket_perdido = false;
  if (ticket[0].checked) {
    ticket_perdido = true;
  }

  const datosEntrada = `
    <strong>Fecha de entrada:</strong> ${ingresarFecha(fecha_entrada.value)}<br>
    <strong>Hora de ingreso:</strong> ${ingresarHora(horaEntrada.value)}<br>
    <strong>Fecha de salida:</strong> ${ingresarFecha(fecha_salida.value)}<br>
    <strong>Hora de salida:</strong> ${ingresarHora(horaSalida.value)}<br>
    <strong>¿Ticket perdido?:</strong> ${perdidaTicket(ticket_perdido)}<hr>
  `;

  const resultado = calcularTarifaConDesglose(
    fecha_entrada.value,
    horaEntrada.value,
    fecha_salida.value,
    horaSalida.value,
    ticket_perdido
  );

  let desgloseHTML = "<h3>Desglose por día:</h3>";
  resultado.detallePorDia.forEach((dia) => {
    desgloseHTML += `
      <div>
        📅 <strong>Fecha:</strong> ${dia.fecha}<br>
        🌞 Horas diurnas: ${dia.horasDiurnas}<br>
        🌙 Horas nocturnas: ${dia.horasNocturnas}<br>
        💰 Total del día: Bs ${dia.totalDia}<hr>
      </div>
    `;
  });

  const calcTarifa = `<strong>Total a pagar:</strong> Bs ${resultado.total}`;

  div.innerHTML = datosEntrada + desgloseHTML + calcTarifa;
});
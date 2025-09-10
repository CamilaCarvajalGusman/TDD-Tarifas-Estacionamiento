import { calcularTarifa, ingresarFecha, ingresarHora, perdidaTicket } from "./tarifas";

const fecha_entrada = document.querySelector("#fecha_entrada");
const fecha_salida = document.querySelector("#fecha_salida");
const horaEntrada = document.querySelector("#horaIngreso");
const horaSalida = document.querySelector("#horaSalida");
const ticket =document.getElementsByName("perdida_ticket");
const form = document.querySelector("#tarifas");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let ticket_perdido =false;
  if(ticket[0].checked){
    ticket_perdido=true;
  }
  let calcTarifa = calcularTarifa(fecha_entrada.value,horaEntrada.value,fecha_salida.value, horaSalida.value);
  div.innerHTML = "<span> Fecha de entrada: " + ingresarFecha(fecha_entrada.value) + " - Hora de ingreso: " + ingresarHora(horaEntrada.value) + "<hr> Fecha de salida: "+ingresarFecha(fecha_salida.value)+ " - Hora de salida: " + ingresarHora(horaSalida.value) +"<br> ¿Ticket perdido?: "+perdidaTicket(ticket_perdido)+" <br> Monto a pagar: Bs"+calcTarifa+"</span>";
});
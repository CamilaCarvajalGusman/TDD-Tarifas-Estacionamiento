import { ingresarFecha, ingresarHora, perdidaTicket } from "./tarifas";

const fecha = document.querySelector("#fecha");
const hora = document.querySelector("#horaIngreso");
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
  div.innerHTML = "<span> Fecha: " + ingresarFecha(fecha.value) + "<hr> Hora de ingreso: " + ingresarHora(hora.value) +  "<hr> Hora de salida: " + ingresarHora(horaSalida.value) +"<br> ¿Ticket perdido?: "+perdidaTicket(ticket_perdido)+" </span>";
});
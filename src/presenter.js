import { ingresarFecha, ingresarHora } from "./tarifas";

const fecha = document.querySelector("#fecha");
const hora = document.querySelector("#horaIngreso");
const horaSalida = document.querySelector("#horaSalida");
const form = document.querySelector("#tarifas");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  div.innerHTML = "<span> Fecha: " + ingresarFecha(fecha.value) + "<hr> Hora de ingreso: " + ingresarHora(hora.value) +  "<hr> Hora de salida: " + ingresarHora(horaSalida.value) +" </p>";
});
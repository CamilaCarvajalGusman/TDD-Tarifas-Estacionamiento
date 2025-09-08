import ingresarFecha from "./tarifas";

const fecha = document.querySelector("#fecha");
const form = document.querySelector("#tarifas");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
    div.innerHTML = "<p>" + ingresarFecha(fecha.value) + "</p>";
});
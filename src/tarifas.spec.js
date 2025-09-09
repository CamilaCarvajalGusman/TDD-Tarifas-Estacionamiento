
import {ingresarFecha, ingresarHora, perdidaTicket} from "./tarifas";

describe("Calcular tarifas de estacionamiento", () => {
  it("debería ingresar y mostrar la fecha", () => {
    expect(ingresarFecha("2025-09-08")).toEqual(new Date("2025-09-08"));
  });
  it("debería ingresar y mostrar la hora de ingreso", () => {
    expect(ingresarHora("15:30")).toEqual("15:30");
  });
  it("debería ingresar y mostrar la hora de salida", () => {
    expect(ingresarHora("19:30")).toEqual("19:30");
  });
  it("debería ingresar y mostrar si el ticket fue perdido", () => {
    expect(perdidaTicket(true)).toEqual("SI");
  });
});
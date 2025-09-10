
import {ingresarFecha, ingresarHora, perdidaTicket, calcularTarifa} from "./tarifas";

describe("Calcular tarifas de estacionamiento", () => {
  it("debería ingresar y mostrar la fecha de ingreso", () => {
    expect(ingresarFecha("2025-09-08")).toEqual(new Date("2025-09-08"));
  });
  it("debería ingresar y mostrar la fecha de salida", () => {
    expect(ingresarFecha("2025-09-09")).toEqual(new Date("2025-09-09"));
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
  it("debería calcular la tarifa base", () => {
    expect(calcularTarifa("2025-09-10","10:30","2025-09-10","11:30")).toEqual(10);
  });
  it("debería calcular la tarifa nocturna", () => {
    expect(calcularTarifa("2025-09-10","22:00","2025-09-10","23:00")).toEqual(6);
  });
});
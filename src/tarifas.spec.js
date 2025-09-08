
import {ingresarFecha, ingresarHora} from "./tarifas";

describe("Calcular tarifas de estacionamiento", () => {
  it("debería ingresar y mostrar la fecha", () => {
    expect(ingresarFecha("2025-09-08")).toEqual(new Date("2025-09-08"));
  });
  it("debería ingresar y mostrar la hora de ingreso", () => {
    expect(ingresarHora("15:30")).toEqual("15:30");
  });
});
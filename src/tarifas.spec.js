
import ingresarFecha from "./tarifas";

describe("Calcular tarifas de estacionamiento", () => {
  it("debería ingresar y mostrar la fecha", () => {
    expect(ingresarFecha("2025-09-08")).toEqual(new Date("2025-09-08"));
  });
});
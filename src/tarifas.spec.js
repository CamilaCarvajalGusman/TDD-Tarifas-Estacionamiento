
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
    expect(calcularTarifa("2025-09-10","10:30","2025-09-10","11:30", false)).toEqual(10);
  });
  it("debería calcular la tarifa nocturna", () => {
    expect(calcularTarifa("2025-09-10","22:00","2025-09-10","23:00", false)).toEqual(6);
  });
  it("debería calcular la tarifa nocturna + tarifa base por hora y por fracción", () => {
    expect(calcularTarifa("2025-09-10","19:00","2025-09-10","00:00", false)).toEqual(42);
  });
  it("debería calcular la tarifa considerando el tope máximo por día calendario: Bs 50.00", () => {
    expect(calcularTarifa("2025-09-10","17:00","2025-09-10","00:00", false)).toEqual(50);
  });
  it("debería calcular la tarifa considerando el tope máximo por día calendario: Bs 50.00", () => {
    expect(calcularTarifa("2025-09-10","17:00","2025-09-10","00:00", true)).toEqual(80);
  });
});
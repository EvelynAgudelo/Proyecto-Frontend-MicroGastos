import api from "../api/api";

export const obtenerGastos = async () => {
  return await api.get("/microgastosapp/v1/gastos");
};

export const crearGasto = async (gasto) => {
  return await api.post("/microgastosapp/v1/gastos", gasto);
};
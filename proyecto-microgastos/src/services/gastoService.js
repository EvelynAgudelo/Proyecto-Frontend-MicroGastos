import api from "../api/api";

export const obtenerGastos = async () => {
  return await api.get("/gastos");
};

export const crearGasto = async (gasto) => {
  return await api.post("/gastos", gasto);
};

export const eliminarGasto = async (id) => {
  return await api.delete(`/gastos/${id}`);
};
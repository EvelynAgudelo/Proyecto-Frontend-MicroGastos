import api from "../api/api";

export const obtenerGastos = async (usuarioId) => {
  return await api.get(`/microgastosapp/v1/gastos/usuario/${usuarioId}`);
};

export const crearGasto = async (usuarioId, gasto) => {
  return await api.post(`/microgastosapp/v1/gastos/usuario/${usuarioId}`, gasto);
};

export const eliminarGasto = async (id, usuarioId) => {
  return await api.delete(`/microgastosapp/v1/gastos/${id}/usuario/${usuarioId}`);
};

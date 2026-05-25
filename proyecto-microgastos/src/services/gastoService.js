import api from "./api"

export const obtenerGastos = async () => {
    return await api.get("/gastos")
}

export const crearGastos = async (gasto) => {
    return await api.post("/gastos",gasto)
}
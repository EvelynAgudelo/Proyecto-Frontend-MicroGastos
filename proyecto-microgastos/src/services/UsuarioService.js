import api from "./api"

export const obtenerUsuarios = async () => {
    return await api.get("/usuarios")
}

export const crearUsuarios = async (usuario) => {
    return await api.post("/usuarios",usuario)
}
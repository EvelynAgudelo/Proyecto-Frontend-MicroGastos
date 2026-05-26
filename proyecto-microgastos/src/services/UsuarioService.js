import api from "../api/api";

export const registrarUsuario = async (usuario) => {
    return await api.post("/microgastosapp/v1/usuarios", usuario);
};
export const loginUsuario = async (datos) => {
    return await api.post("/auth/login", datos);
};
export const obtenerUsuarios = async () => {
    return await api.get("/usuarios");
};
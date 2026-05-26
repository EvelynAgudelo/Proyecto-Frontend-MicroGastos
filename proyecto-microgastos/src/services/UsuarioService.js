import api from "../api/api";

export const registrarUsuario = async (usuario) => {
  return await api.post("/microgastosapp/v1/usuarios", usuario);
};

export const loginUsuario = async (datos) => {
  const response = await api.get("/microgastosapp/v1/usuarios");

  const usuario = response.data.find(
    (u) => u.correo === datos.email || u.correo === datos.correo
  );

  if (!usuario) {
    throw new Error("Credenciales incorrectas");
  }

  return {
    data: {
      usuario,
      token: "token-demo",
    },
  };
};

export const obtenerUsuarios = async () => {
  return await api.get("/microgastosapp/v1/usuarios");
};
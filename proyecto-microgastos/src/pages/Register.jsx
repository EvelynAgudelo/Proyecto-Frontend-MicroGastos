import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { registrarUsuario } from "../services/usuarioService";

function Register() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await registrarUsuario({
        nombre: nombre,
        tipoDocumento: "CedulaCiudadania",
        documento: Date.now().toString(),
        edad: 20,
        correo: email,
        numeroCelular: "3" + Date.now().toString().slice(-9),
        genero: "Femenino",
        activo: "Activo",
        ciudad: "Medellin",
      });

      Swal.fire({
        icon: "success",
        title: "Usuario registrado",
      });

      navigate("/");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error al registrar",
        text: "Revisa que el correo no esté repetido.",
      });
    }
  };

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <form
        onSubmit={handleRegister}
        className="bg-white p-8 rounded-xl shadow w-96"
      >
        <h1 className="text-2xl mb-5 text-center font-bold">Registro</h1>

        <input
          className="w-full mb-3 p-2 border rounded"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <input
          className="w-full mb-3 p-2 border rounded"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full mb-3 p-2 border rounded"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-green-500 text-white p-2 rounded">
          Registrarse
        </button>
      </form>
    </div>
  );
}

export default Register;
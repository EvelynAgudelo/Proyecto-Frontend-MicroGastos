import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { registrarUsuario } from "../services/UsuarioService";

function Register() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [documento, setDocumento] = useState("");
  const [numeroCelular, setNumeroCelular] = useState("");
  const [edad, setEdad] = useState("");
  const [genero, setGenero] = useState("");
  const [ciudad, setCiudad] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await registrarUsuario({
        nombre,
        correo: email,
        contrasena: password,
        tipoDocumento: "CedulaCiudadania",
        documento,
        edad: Number(edad),
        numeroCelular,
        genero,
        activo: "Activo",
        ciudad,
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
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-10">
      <form
        onSubmit={handleRegister}
        className="bg-white p-8 rounded-xl shadow w-96"
      >
        <h1 className="text-2xl mb-5 text-center font-bold">Registro</h1>

        <input className="w-full mb-3 p-2 border rounded" placeholder="Nombre" onChange={(e) => setNombre(e.target.value)} />
        <input className="w-full mb-3 p-2 border rounded" placeholder="Documento" onChange={(e) => setDocumento(e.target.value)} />
        <input className="w-full mb-3 p-2 border rounded" placeholder="Email" type="email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" className="w-full mb-3 p-2 border rounded" placeholder="Contrasena" onChange={(e) => setPassword(e.target.value)} />
        <input className="w-full mb-3 p-2 border rounded" placeholder="Celular" onChange={(e) => setNumeroCelular(e.target.value)} />
        <input type="number" className="w-full mb-3 p-2 border rounded" placeholder="Edad" onChange={(e) => setEdad(e.target.value)} />
        <input className="w-full mb-3 p-2 border rounded" placeholder="Genero" onChange={(e) => setGenero(e.target.value)} />
        <input className="w-full mb-3 p-2 border rounded" placeholder="Ciudad" onChange={(e) => setCiudad(e.target.value)} />

        <button className="w-full bg-green-500 text-white p-2 rounded">
          Registrarse
        </button>
      </form>
    </div>
  );
}

export default Register;

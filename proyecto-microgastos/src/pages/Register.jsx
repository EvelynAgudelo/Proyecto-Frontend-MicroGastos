import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Register() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (!nombre || !apellido || !email || !password) {
      Swal.fire({ icon: "error", title: "Todos los campos son obligatorios" });
      return;
    }

    const user = { nombre, apellido, email, password };
    localStorage.setItem("user", JSON.stringify(user));

    Swal.fire({ icon: "success", title: "Usuario registrado" });

    navigate("/");
  };

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <form onSubmit={handleRegister} className="bg-white p-8 rounded-xl shadow w-80">
        <h1 className="text-xl mb-4 text-center">Registro</h1>

        <input className="w-full mb-3 p-2 border" placeholder="Nombre" onChange={(e)=>setNombre(e.target.value)} />
        <input className="w-full mb-3 p-2 border" placeholder="Apellido" onChange={(e)=>setApellido(e.target.value)} />
        <input className="w-full mb-3 p-2 border" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" className="w-full mb-3 p-2 border" placeholder="Contraseña" onChange={(e)=>setPassword(e.target.value)} />

        <button className="w-full bg-green-500 text-white p-2">Registrar</button>

        <p className="text-sm mt-4 text-center">
          ¿Ya tienes cuenta? <Link to="/">Inicia sesión</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      Swal.fire({ icon: "error", title: "Campos vacíos" });
      return;
    }

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      Swal.fire({ icon: "error", title: "No hay usuario registrado" });
      return;
    }

    if (email === user.email && password === user.password) {
      localStorage.setItem("session", "activa");

      Swal.fire({
        icon: "success",
        title: `Bienvenido ${user.nombre}`,
      });

      navigate("/dashboard");
    } else {
      Swal.fire({ icon: "error", title: "Credenciales incorrectas" });
    }
  };

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-xl shadow-lg w-80">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded mb-4"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Contraseña"
          className="w-full p-2 border rounded mb-4"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Ingresar
        </button>

        <p className="text-sm mt-4 text-center">
          ¿No tienes cuenta?{" "}
          <Link to="/register" className="text-blue-500">
            Regístrate
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
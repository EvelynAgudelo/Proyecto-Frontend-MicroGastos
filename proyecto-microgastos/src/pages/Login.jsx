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
      Swal.fire({
        icon: "error",
        title: "Campos vacíos",
      });
      return;
    }

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      Swal.fire({
        icon: "error",
        title: "No hay usuario registrado",
      });
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
      Swal.fire({
        icon: "error",
        title: "Credenciales incorrectas",
      });
    }
  };

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Ingresar</button>
      </form>

      <p>
        No tienes cuenta? <Link to="/register">Regístrate</Link>
      </p>
    </div>
  );
}s

export default Login;
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const session = localStorage.getItem("session");
    if (session === "activa") {
      navigate("/dashboard");
    }
  }, []);

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
        title: `Bienvenido ${user.nombre} ${user.apellido}`,
      });

      navigate("/dashboard");
    } else {
      Swal.fire({ icon: "error", title: "Credenciales incorrectas" });
    }
  };

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-xl shadow w-80">
        <h1 className="text-xl mb-4 text-center">Login</h1>

        <input className="w-full mb-3 p-2 border" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" className="w-full mb-3 p-2 border" placeholder="Contraseña" onChange={(e)=>setPassword(e.target.value)} />

        <button className="w-full bg-blue-500 text-white p-2">Ingresar</button>

        <p className="text-sm mt-4 text-center">
          ¿No tienes cuenta? <Link to="/register">Regístrate</Link>
        </p>
      </form>
    </div>
  );
}

<p className="text-sm mt-4 text-center">
  ¿No tienes cuenta?{" "}
  <Link to="/register" className="text-blue-500">
    Regístrate
  </Link>
</p>

export default Login;
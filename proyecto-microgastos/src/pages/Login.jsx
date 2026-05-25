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

  // 1. Obtener el usuario guardado en el localStorage
  const savedUser = JSON.parse(localStorage.getItem("user"));

  if (!savedUser) {
    Swal.fire({ icon: "error", title: "No hay usuarios registrados" });
    return;
  }

  // 2. Comparar credenciales
  if (email === savedUser.email && password === savedUser.password) {
    localStorage.setItem("session", "activa"); // Crea la sesión activa

    Swal.fire({
      icon: "success",
      title: `Bienvenido ${savedUser.nombre}`,
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
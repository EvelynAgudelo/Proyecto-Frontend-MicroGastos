import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const session = localStorage.getItem("session");
    if (session === "activa") {
      navigate("/dashboard");
    }
  }, [navigate]);

  const validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    // Validar campos vacíos
    if (!email.trim() || !password.trim()) {
      setError("Email y contraseña son obligatorios");
      Swal.fire({ 
        icon: "error", 
        title: "Campos vacíos",
        text: "Completa todos los campos"
      });
      return;
    }

    // Validar formato email
    if (!validarEmail(email)) {
      setError("Email inválido");
      Swal.fire({ 
        icon: "error", 
        title: "Email inválido",
        text: "Ingresa un email válido"
      });
      return;
    }

    // Obtener usuario del localStorage
    const usuarioGuardado = localStorage.getItem("usuario");

    if (!usuarioGuardado) {
      setError("Usuario no encontrado. Por favor regístrate primero");
      Swal.fire({ 
        icon: "error", 
        title: "Usuario no existe",
        text: "Debes registrarte primero"
      });
      return;
    }

    const usuario = JSON.parse(usuarioGuardado);

    // Validar credenciales
    if (usuario.email !== email || usuario.password !== password) {
      setError("Email o contraseña incorrectos");
      Swal.fire({ 
        icon: "error", 
        title: "Credenciales inválidas",
        text: "Verifica tu email y contraseña"
      });
      return;
    }

    // Login exitoso
    localStorage.setItem("session", "activa");
    localStorage.setItem("usuarioActivo", JSON.stringify({
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      email: usuario.email
    }));

    Swal.fire({ 
      icon: "success", 
      title: `¡Bienvenido ${usuario.nombre}!`,
      timer: 1500
    });

    setEmail("");
    setPassword("");
    navigate("/dashboard");
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh] py-6">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Iniciar Sesión</h1>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Correo Electrónico</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@correo.com"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">Contraseña</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Tu contraseña"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded transition duration-200"
        >
          Ingresar
        </button>

        <p className="text-sm mt-4 text-center text-gray-600">
          ¿No tienes cuenta? <Link to="/register" className="text-green-600 hover:underline font-semibold">Regístrate aquí</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
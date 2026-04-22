import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";

function Register() {
  // 1. Estados para capturar los datos (HU06)
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    // Validar que no haya campos vacíos
    if (!nombre || !apellido || !email || !password) {
      Swal.fire({ 
        icon: "error", 
        title: "Campos obligatorios", 
        text: "Por favor, completa todos los datos." 
      });
      return;
    }

    // 2. Guardar en localStorage (HU10)
    const user = { nombre, apellido, email, password };
    localStorage.setItem("user", JSON.stringify(user)); 

    // 3. Notificación visual (HU09)
    Swal.fire({ 
      icon: "success", 
      title: "¡Usuario registrado!",
      text: "Ahora puedes iniciar sesión."
    });

    // 4. Navegación (HU05)
    navigate("/"); 
  };

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <form 
        onSubmit={handleRegister} 
        className="bg-white p-8 rounded-xl shadow-lg w-80"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Registro</h1>

        <input 
          placeholder="Nombre" 
          className="w-full p-2 border rounded mb-3" 
          onChange={(e) => setNombre(e.target.value)} 
          value={nombre}
        />
        <input 
          placeholder="Apellido" 
          className="w-full p-2 border rounded mb-3" 
          onChange={(e) => setApellido(e.target.value)} 
          value={apellido}
        />
        <input 
          type="email"
          placeholder="Email" 
          className="w-full p-2 border rounded mb-3" 
          onChange={(e) => setEmail(e.target.value)} 
          value={email}
        />
        <input 
          type="password" 
          placeholder="Contraseña" 
          className="w-full p-2 border rounded mb-3" 
          onChange={(e) => setPassword(e.target.value)} 
          value={password}
        />

        <button 
          type="submit"
          className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 transition-colors"
        >
          Registrarse
        </button>

        <p className="text-sm mt-4 text-center">
          ¿Ya tienes cuenta?{" "}
          <Link to="/" className="text-blue-500 hover:underline">
            Inicia sesión
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
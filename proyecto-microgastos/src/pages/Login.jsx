import { useState } from "react";
import Swal from "sweetalert2";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      Swal.fire({ icon: "error", title: "Campos vacíos" });
      return;
    }

    Swal.fire({ icon: "success", title: "Login correcto" });
  };

  return (
    <form onSubmit={handleLogin} className="max-w-sm mx-auto bg-white p-6 rounded shadow">
      <h1 className="text-xl mb-4">Login</h1>

      <input className="w-full mb-3 p-2 border" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
      <input className="w-full mb-3 p-2 border" type="password" placeholder="Contraseña" onChange={(e)=>setPassword(e.target.value)} />

      <button className="w-full bg-blue-500 text-white p-2">Ingresar</button>
    </form>
  );
}

export default Login;
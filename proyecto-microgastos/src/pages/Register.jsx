import { useState } from "react";
import Swal from "sweetalert2";

function Register() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");

  const handle = (e) => {
    e.preventDefault();

    if (!nombre || !email) {
      Swal.fire({ icon: "error", title: "Campos vacíos" });
      return;
    }

    Swal.fire({ icon: "success", title: "Registrado" });
  };

  return (
    <form onSubmit={handle} className="max-w-sm mx-auto bg-white p-6 rounded shadow">
      <input className="w-full mb-3 p-2 border" placeholder="Nombre" onChange={(e)=>setNombre(e.target.value)} />
      <input className="w-full mb-3 p-2 border" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
      <button className="w-full bg-green-500 text-white p-2">Registrar</button>
    </form>
  );
}

export default Register;
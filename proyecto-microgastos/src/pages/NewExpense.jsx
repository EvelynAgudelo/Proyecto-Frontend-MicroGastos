import { useState } from "react";
import Swal from "sweetalert2";
import { createGasto } from "../api/api";

function NewExpense() {
  const [monto, setMonto] = useState("");
  const [concepto, setConcepto] = useState("");
  const [categoria, setCategoria] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!monto || !concepto || !categoria) {
      Swal.fire({ icon: "error", title: "Completa los campos" });
      return;
    }

    await createGasto({ monto, concepto, categoria });

    Swal.fire({
    icon: "success",
    title: "Gasto guardado correctamente",
    text: "Tu gasto fue registrado correctamente",
});
    setMonto("");
    setConcepto("");
    setCategoria("");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto bg-white p-6 rounded shadow">
      <input value={monto} onChange={(e)=>setMonto(e.target.value)} placeholder="Monto" className="w-full mb-3 p-2 border"/>
      <input value={concepto} onChange={(e)=>setConcepto(e.target.value)} placeholder="Concepto" className="w-full mb-3 p-2 border"/>

      <select value={categoria} onChange={(e)=>setCategoria(e.target.value)} className="w-full mb-3 p-2 border">
        <option value="">Categoría</option>
        <option>Comida</option>
        <option>Transporte</option>
        <option>Viaje</option>
        <option>Servicios publicos</option>
        <option>Salud</option>
        <option>Educación</option>
        <option>Entretenimiento</option>
        <option>Otros</option>
      </select>

      <button className="w-full bg-green-600 text-white p-2">Guardar</button>
    </form>
  );
}

export default NewExpense;
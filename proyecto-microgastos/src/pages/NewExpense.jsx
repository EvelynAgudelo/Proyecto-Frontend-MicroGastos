import { useState } from "react";
import Swal from "sweetalert2";
import { createGasto } from "../api/api";

function NewExpense() {
  // 1. Estados para capturar los datos 
  const [monto, setMonto] = useState("");
  const [concepto, setConcepto] = useState("");
  const [categoria, setCategoria] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar campos obligatorios
    if (!monto || !concepto || !categoria) {
      Swal.fire({ 
        icon: "error", 
        title: "Campos obligatorios", 
        text: "Por favor llena todos los campos del gasto." 
      });
      return;
    }

    try {
      // 2. Enviar a la API 
      await createGasto({ monto, concepto, categoria });

      // 3. Notificación visual de éxito
      Swal.fire({ 
        icon: "success", 
        title: "Gasto guardado",
        text: "El gasto se registró correctamente en el sistema." 
      });

      // Limpiar el formulario
      setMonto("");
      setConcepto("");
      setCategoria("");
    } catch (error) {
      Swal.fire({ 
        icon: "error", 
        title: "Error al guardar", 
        text: "No se pudo conectar con el servidor." 
      });
    }
  };

  return (
    <div className="max-w-sm mx-auto bg-white p-6 rounded shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-center">Registrar Nuevo Gasto</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="number"
          value={monto} 
          onChange={(e) => setMonto(e.target.value)} 
          placeholder="Monto (ej. 5000)" 
          className="w-full mb-3 p-2 border rounded"
        />
        <input 
          type="text"
          value={concepto} 
          onChange={(e) => setConcepto(e.target.value)} 
          placeholder="Concepto (ej. Almuerzo)" 
          className="w-full mb-3 p-2 border rounded"
        />

        <select 
          value={categoria} 
          onChange={(e) => setCategoria(e.target.value)} 
          className="w-full mb-3 p-2 border rounded"
        >
          <option value="">Selecciona una categoría</option>
          <option value="Comida">Comida</option>
          <option value="Transporte">Transporte</option>
          <option value="Viaje">Viaje</option>
          <option value="Servicios públicos">Servicios públicos</option>
          <option value="Salud">Salud</option>
          <option value="Educación">Educación</option>
          <option value="Entretenimiento">Entretenimiento</option>
          <option value="Otros">Otros</option>
        </select>

        <button 
          type="submit"
          className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 transition-colors"
        >
          Guardar Gasto
        </button>
      </form>
    </div>
  );
}

export default NewExpense;
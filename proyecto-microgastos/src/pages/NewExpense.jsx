import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function NewExpense() {
  const [descripcion, setDescripcion] = useState("");
  const [valor, setValor] = useState("");
  const [categoria, setCategoria] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await crearGasto({
        descripcion,
        valor,
        categoria,
      });

      Swal.fire({
        icon: "success",
        title: "Gasto creado",
      });

      navigate("/dashboard");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error al crear gasto",
      });
    }
  };

  return (
    <div className="flex justify-center items-center mt-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow p-8 rounded-xl w-96"
      >
        <h1 className="text-2xl font-bold mb-5">Nuevo Gasto</h1>

        <input
          className="w-full border p-2 mb-3 rounded"
          placeholder="Descripción"
          onChange={(e) => setDescripcion(e.target.value)}
        />

        <input
          type="number"
          className="w-full border p-2 mb-3 rounded"
          placeholder="Valor"
          onChange={(e) => setValor(e.target.value)}
        />

        <input
          className="w-full border p-2 mb-3 rounded"
          placeholder="Categoría"
          onChange={(e) => setCategoria(e.target.value)}
        />

        <button className="w-full bg-blue-500 text-white p-2 rounded">
          Guardar
        </button>
      </form>
    </div>
  );
}

export default NewExpense;
import { useEffect, useState } from "react";
import { obtenerGastos, eliminarGasto } from "../services/gastoService";
import Swal from "sweetalert2";

function Dashboard() {
  const [gastos, setGastos] = useState([]);

  const cargarGastos = async () => {
    try {
      const response = await obtenerGastos();
      setGastos(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    cargarGastos();
  }, []);

  const handleDelete = async (id) => {
    try {
      await eliminarGasto(id);

      Swal.fire({
        icon: "success",
        title: "Gasto eliminado",
      });

      cargarGastos();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid gap-4">
        {gastos.map((gasto) => (
          <div
            key={gasto.id}
            className="bg-white shadow p-4 rounded-xl"
          >
            <h2 className="font-bold text-lg">{gasto.descripcion}</h2>
            <p>Valor: ${gasto.valor}</p>
            <p>Categoría: {gasto.categoria}</p>

            <button
              onClick={() => handleDelete(gasto.id)}
              className="mt-3 bg-red-500 text-white px-3 py-1 rounded"
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
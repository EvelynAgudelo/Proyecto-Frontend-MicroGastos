import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { obtenerGastos, eliminarGasto } from "../services/gastoService";
import Swal from "sweetalert2";

function Dashboard() {
  const [gastos, setGastos] = useState([]);
  const usuarioId = localStorage.getItem("usuarioId");
  const nombreUsuario = localStorage.getItem("nombreUsuario");

  const cargarGastos = async () => {
    try {
      const response = await obtenerGastos(usuarioId);
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
      await eliminarGasto(id, usuarioId);

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
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Gastos de {nombreUsuario}</h1>
        <Link to="/gasto" className="bg-blue-500 text-white px-4 py-2 rounded">
          Nuevo gasto
        </Link>
      </div>

      <div className="grid gap-4">
        {gastos.length === 0 && (
          <p className="bg-white shadow p-4 rounded-xl">Aun no tienes gastos registrados.</p>
        )}

        {gastos.map((gasto) => (
          <div key={gasto.id} className="bg-white shadow p-4 rounded-xl">
            <h2 className="font-bold text-lg">{gasto.descripcion}</h2>
            <p>Valor: ${gasto.valor}</p>
            <p>Fecha: {gasto.fecha}</p>

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

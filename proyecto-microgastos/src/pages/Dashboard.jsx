import { useEffect, useState } from "react";
import { getGastos } from "../api/api";
import Swal from "sweetalert2";

function Dashboard() {
  const [gastos, setGastos] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const cargar = async () => {
      try {
        const data = await getGastos();
        setGastos(data);
      } catch (error) {
        Swal.fire({ icon: "error", title: "Error cargando gastos" });
      }
    };
    cargar();
  }, []);

  return (
    <div>
      <h1 className="text-xl mb-2">
        Bienvenid@ {user?.nombre} {user?.apellido}
      </h1>

      <h2 className="mb-4">Historial de gastos</h2>

      {gastos.length === 0 ? (
        <p>No hay gastos aún</p>
      ) : (
        gastos.map((g) => (
          <div key={g.id} className="bg-white p-3 mb-2 rounded shadow">
            {g.concepto} - ${g.monto} ({g.categoria})
          </div>
        ))
      )}
    </div>
  );
}

export default Dashboard;
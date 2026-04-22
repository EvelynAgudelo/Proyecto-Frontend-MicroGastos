import { useEffect, useState } from "react";
import { getGastos } from "../api/api";

function Dashboard() {
  const [gastos, setGastos] = useState([]);

  useEffect(() => {
    const cargar = async () => {
      const data = await getGastos();
      setGastos(data);
    };
    cargar();
  }, []);

  return (
    <div>
      <h1 className="text-xl mb-4">Dashboard</h1>

      {gastos.map((g) => (
        <div key={g.id} className="bg-white p-3 mb-2 rounded shadow">
          {g.concepto} - ${g.monto}
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
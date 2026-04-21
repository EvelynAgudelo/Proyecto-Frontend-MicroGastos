import { useEffect } from "react";

function Dashboard() {
  useEffect(() => {
    console.log("Cargando datos...");
  },[]);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow text-center">
          💰 <p className="font-bold">Gastos Hoy</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
          📊 <p className="font-bold">Total Mes</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
          🗂️ <p className="font-bold">Categorías</p>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
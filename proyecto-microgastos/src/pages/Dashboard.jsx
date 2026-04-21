import { useEffect } from "react";

function Dashboard() {
  useEffect(() => {
    console.log("Cargando gastos automáticamente...");
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Aquí van los gastos</p>
    </div>
  );
}

export default Dashboard;
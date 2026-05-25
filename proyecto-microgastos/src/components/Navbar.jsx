import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between">
      <h1 className="font-bold">💸 MicroGastos</h1>

      <div className="space-x-4">
        <Link to="/">Login</Link>
        <Link to="/register">Registro</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/gasto">Nuevo Gasto</Link>
      </div>
    </nav>
  );
}

export default Navbar;
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">💸 MicroGastos</h1>

      <div className="space-x-4">
        <Link to="/" className="hover:text-gray-300">Login</Link>
        <Link to="/register" className="hover:text-gray-300">Registro</Link>
        <Link to="/dashboard" className="hover:text-gray-300">Dashboard</Link>
      </div>
    </nav>
  );
}

export default Navbar;
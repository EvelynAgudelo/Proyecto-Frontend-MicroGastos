import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const cerrarSesion = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("usuarioId");
    localStorage.removeItem("nombreUsuario");
    navigate("/");
  };

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between">
      <h1 className="font-bold">MicroGastos</h1>

      <div className="space-x-4">
        {!token && <Link to="/">Login</Link>}
        {!token && <Link to="/register">Registro</Link>}
        {token && <Link to="/dashboard">Dashboard</Link>}
        {token && <Link to="/gasto">Nuevo Gasto</Link>}
        {token && (
          <button onClick={cerrarSesion} className="bg-red-500 text-white px-3 py-1 rounded">
            Cerrar sesion
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

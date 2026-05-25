import { useState } from "react";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await loginUsuario({
        email,
        password,
      });

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("usuario", JSON.stringify(response.data.usuario));

      Swal.fire({
        icon: "success",
        title: "Bienvenido",
      });

      navigate("/dashboard");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Credenciales incorrectas",
      });
    }
  };

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow w-80">
        <h1 className="text-2xl mb-5 text-center font-bold">Login</h1>

        <input
          className="w-full mb-3 p-2 border rounded"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full mb-3 p-2 border rounded"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-blue-500 text-white p-2 rounded">
          Ingresar
        </button>

        <p className="text-sm mt-4 text-center">
          ¿No tienes cuenta?
          <Link to="/register" className="text-blue-500 ml-1">
            Regístrate
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
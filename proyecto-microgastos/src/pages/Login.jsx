import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      Swal.fire({ icon: "error", title: "Campos vacíos" });
      return;
    }

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      Swal.fire({ icon: "error", title: "No hay usuario registrado" });
      return;
    }

    if (email === user.email && password === user.password) {
      localStorage.setItem("session", "activa");

      Swal.fire({
        icon: "success",
        title: `Bienvenido ${user.nombre}`,
      });

      navigate("/dashboard");
    } else {
      Swal.fire({ icon: "error", title: "Credenciales incorrectas" });
    }
  };

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-xl shadow-lg w-80">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded mb-4"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Contraseña"
          className="w-full p-2 border rounded mb-4"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Ingresar
        </button>

        <p className="text-sm mt-4 text-center">
          ¿No tienes cuenta?{" "}
          <Link to="/register" className="text-blue-500">
            Regístrate
          </Link>
        </p>
      </form>
    </div>
  );
  console.log(users)

  return (
    <div>
      <div class="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <div class="layout-container flex h-full grow flex-col items-center justify-center px-4">
          <div class="w-full max-w-[440px] flex flex-col gap-8">
            <header class="flex flex-col items-center gap-6">
              <div class="size-12 flex items-center justify-center rounded-xl bg-[#006600]/10">
                <svg class="text-[#006600] size-8" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z" fill="currentColor"></path>
                </svg>
              </div>
              <div class="flex flex-col gap-2 text-center">
                <h1 class="text-slate-900 dark:text-slate-100 text-3xl font-bold tracking-tight">Welcome back</h1>
                <p class="text-slate-600 dark:text-slate-400 text-base">Please enter your details to sign in</p>
              </div>
            </header>
            <div class="flex flex-col gap-5">
              <div class="flex flex-col gap-2">
                <div class="flex items-center justify-between">
                  <label class="text-slate-700 dark:text-slate-300 text-sm font-semibold leading-none">
                    Email
                  </label>
                </div>
                <input onChange={(e) => setEmail(e.target.value)} class="flex w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006600] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Email" type="email" />
              </div>
              <div class="flex flex-col gap-2">
                <div class="flex items-center justify-between">
                  <label class="text-slate-700 dark:text-slate-300 text-sm font-semibold leading-none">
                    Password
                  </label>
                </div>
                <input onChange={(e) => setPassword(e.target.value)} class="flex w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006600] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="••••••••" type="password" />
              </div>
              <div class="flex flex-col gap-4 pt-4">
                <button onClick={signIn} type="button" class="inline-flex items-center justify-center rounded-lg bg-[#006600] px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-[#006600]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006600] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                  Log In
                </button>
              </div>
            </div>
            <footer class="text-center">
              <p class="text-sm text-slate-600 dark:text-slate-400">
                Don't have an account?
                <Link class="font-semibold text-[#006600] hover:underline ml-1" to="/register">Sign up a free</Link>
              </p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Login;
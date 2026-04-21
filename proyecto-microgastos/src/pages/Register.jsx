import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import Swal from "sweetalert2";

function Register(){
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
                <h1 class="text-slate-900 dark:text-slate-100 text-3xl font-bold tracking-tight">Create your account</h1>
                <p class="text-slate-600 dark:text-slate-400 text-base">Start tracking your expenses in minutes</p>
              </div>
            </header>
            <div class="flex flex-col gap-5">
              <div class="flex flex-col gap-2">
                <div class="flex items-center justify-between">
                  <label class="text-slate-700 dark:text-slate-300 text-sm font-semibold leading-none">
                    Full name
                  </label>
                </div>
                <input class="flex w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-3 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006600] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="John Doe" type="text" />
              </div>
              <div class="flex flex-col gap-2">
                <div class="flex items-center justify-between">
                  <label class="text-slate-700 dark:text-slate-300 text-sm font-semibold leading-none">
                    Email
                  </label>
                </div>
                <input class="flex w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-3 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006600] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Email" type="email" />
              </div>
              <div class="flex flex-col gap-2">
                <div class="flex items-center justify-between">
                  <label class="text-slate-700 dark:text-slate-300 text-sm font-semibold leading-none">
                    Password
                  </label>
                </div>
                <input class="flex w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-3 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006600] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="••••••••" type="password" />
              </div>
              <div class="flex flex-col gap-2">
                <div class="flex items-center justify-between">
                  <label class="text-slate-700 dark:text-slate-300 text-sm font-semibold leading-none">
                    Confirm password
                  </label>
                </div>
                <input class="flex w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-3 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006600] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="••••••••" type="password" />
              </div>
              <div class="flex flex-col gap-4 pt-4">
                <button type="button" class="inline-flex items-center justify-center rounded-lg bg-[#006600] px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-[#006600]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006600] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                  Create Account
                </button>
              </div>
            </div>
            <footer class="text-center">
              <p class="text-sm text-slate-600 dark:text-slate-400">
                Already have an account?
                <Link class="font-semibold text-[#006600] hover:underline ml-1" to="/">Sign in</Link>
              </p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Register() {
    if(localStorage.getItem("session") === "activa") {

    return <Navigate to="/dashboard" />}
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        //Validar campos
        if(!nombre || !apellido || !email || !password){
            Swal.fire({
                icon: "error",
                title: "Todos los campos son obligatorios",
            });
            return;
        }

        const user = { nombre, apellido, email, password };
        localStorage.setItem("user", JSON.stringify(user));

        Swal.fire({
            icon: "success",
            title: "Usuario registrado correctamente",
        });

        navigate("/");
    }

    return (
        <div>
            <h1>Registro</h1>

            <form onSubmit={handleRegister}>
                <input type="text" placeholder="Nombre" value={nombre} onChange={(e)=>setNombre(e.target.value)} />
                <input type="text" placeholder="Apellido" value={apellido} onChange={(e)=>setApellido(e.target.value)} />
                <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                <input type="password" placeholder="Contraseña" value={password} onChange={(e)=>setPassword(e.target.value)} />

                <button type="submit">Registrarse</button>
            </form>

            <p>
                ¿Ya tienes cuenta? <Link to="/">Inicia sesión</Link>
            </p>
        </div>
    )
}
}
export default Register;

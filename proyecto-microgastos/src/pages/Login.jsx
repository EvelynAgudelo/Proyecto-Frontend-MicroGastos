import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import Swal from "sweetalert2";

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        //Validar campos vacios
        if(!email || !password){
            Swal.fire({
                icon: "error",
                tittle: "Campos vacios",
                text: "Por favor completa todos los campos",
            });
            return;
        }
        //Obtener usuario guardado
        const user = JSON.parse(localStorage.getItem("user"));

        if(!user){
            Swal.fire({
                icon: "error",
                tittle: "No hay usuario registrado",
            });
            return;
        }
        //Validar credenciales
        if(email === user.email && password === user.password){
            Swal.fire({
                icon: "success",
                tittle: `Bienvenido ${user.nombre}`,
            });
            //Guardar sesion activa
            localStorage.setItem("session", "activa");

            //Redirigir a la pagina principal
            navigate("/Dashboard");
        } else{
            Swal.fire({
                icon: "error",
                title: "Credenciales incorrectas",
            });
        }
    };

    return(
        <div>
            <h1>Login</h1>

            <form onSubmit={handleLogin}>
                <input 
                type="email" 
                placeholder="Email"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                />

                <input 
                type="password"
                placeholder="Contraseña" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">Iniciar sesion</button>
            </form>

            <p>
                No tienes cuenta? <Link to= "./Register.jsx">Registrate aqui</Link>
            </p>
        </div>
    )
}
export default Login;
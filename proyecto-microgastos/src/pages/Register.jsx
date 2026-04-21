import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import Swal from "sweetalert2";

function Register(){
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

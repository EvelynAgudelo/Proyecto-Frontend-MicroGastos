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

        //Validar campos vacios
        if(!nombre || !apellido || !email || !password){
            Swal.fire({
                icon: "error",
                tittle: "Todos los campos son obligatorios",
            });
            return;
        }
    }
}

import { useState } from "react";

function Registro({ cambiarPantalla }) {

  // Estados para guardar los datos del usuario
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");

  // Función para registrar al usuario
  const registrar = (e) => {
    e.preventDefault();

    if (nombre === "" || correo === "" || password === "") {
      alert("Completa todos los campos");
      return;
    }

    alert("Registro exitoso");
    cambiarPantalla("bienvenida");
  };

  return (
    <div className="contenedor">
      <h1>Crear cuenta</h1>
      <p>Registra tus datos para continuar</p>

      <form onSubmit={registrar}>

        <input
          type="text"
          placeholder="Nombre completo"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <input
          type="email"
          placeholder="Correo electrónico"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">
          Registrarme
        </button>

      </form>

      <p>
        ¿Ya tienes una cuenta?
        <button
          type="button"
          className="boton-link"
          onClick={() => cambiarPantalla("login")}
        >
          Iniciar sesión
        </button>
      </p>
    </div>
  );
}

export default Registro;

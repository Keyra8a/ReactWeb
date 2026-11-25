
import { useState } from "react";

function Login({ cambiarPantalla }) {

  // Estados para guardar los datos de inicio de sesión
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");

  // Función para iniciar sesión
  const iniciarSesion = (e) => {
    e.preventDefault();

    if (correo === "" || password === "") {
      alert("Ingresa tu correo y contraseña");
      return;
    }

    alert("Inicio de sesión exitoso");
    cambiarPantalla("bienvenida");
  };

  return (
    <div className="contenedor">
      <h1>Login</h1>
      <p>Inicia sesión en tu cuenta</p>

      <form onSubmit={iniciarSesion}>

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
          Iniciar sesión
        </button>

      </form>

      <p>
        ¿No tienes una cuenta?
        <button
          type="button"
          className="boton-link"
          onClick={() => cambiarPantalla("registro")}
        >
          Registrarme
        </button>
      </p>
    </div>
  );
}

export default Login;

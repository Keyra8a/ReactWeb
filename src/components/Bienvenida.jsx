
function Bienvenida({ cambiarPantalla }) {
  return (
    <div className="contenedor">
      <h1>¡Bienvenido!</h1>

      <p>
        Has ingresado correctamente a nuestra aplicación.
      </p>

      <button onClick={() => cambiarPantalla("login")}>
        Cerrar sesión
      </button>
    </div>
  );
}

export default Bienvenida;

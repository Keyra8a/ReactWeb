
import { useState } from "react";
import Registro from "./components/Registro";
import Login from "./components/Login";
import Bienvenida from "./components/Bienvenida";
import "./App.css";

function App() {
  const [pantalla, setPantalla] = useState("registro");

  return (
    <div className="app">

      {pantalla === "registro" && (
        <Registro cambiarPantalla={setPantalla} />
      )}

      {pantalla === "login" && (
        <Login cambiarPantalla={setPantalla} />
      )}

      {pantalla === "bienvenida" && (
        <Bienvenida cambiarPantalla={setPantalla} />
      )}

    </div>
  );
}

export default App;

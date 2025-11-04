// ESTE SERÁ EL PADRE -> CONTENDRÁ A LOS HIJOS Y HARA LA COMUNICACIÓN ENTRE ELLOS.
import React, { useState } from "react"; // -> Le importamos el componente react tambien.

// Le importamos a sus hijos porque asi los manejará.
import RegistroFormulario from "./RegistroFormulario";
import PreferenciasEntrenamiento from "./PreferenciasEntrenamiento";
import "./FormularioPrincipal.css";

export default function FormularioPrincipal() {
  
  // Para almacenar los datos del usuario.
  const [paso, setPaso] = useState(1);
  const [datosUsuario, setDatosUsuario] = useState({});
  const [gymPref, setGymPref] = useState();

  // Una vez los datos del usuario han sido introducidos correctamente se llamará a una función ->
  // Recibir datos del primer formulario ->
 
  const recibirDatosDelUsuario = (datos) => {
    console.log("DATOS DEL USUARIO:", datos);
    setDatosUsuario(datos);
    setPaso(2);
  };

// Recibir preferencias del segundo formulario ->
const gymPreferences = async (datos) => {
    console.log("DATOS COMPLETOS:", { ...datosUsuario, ...datos });
    setGymPref(datos);
    setPaso(3); 
  };
  
    return (
        <div className="formulario-fitlife">

      {/* PASOS DEL RELLENO DEL FORMULARIO.*/}
      {paso === 1 && <RegistroFormulario OnDatosProcesados={recibirDatosDelUsuario} />}
      {paso === 2 && <PreferenciasEntrenamiento onPreferenciasCompletadas={gymPreferences} />}
      {paso === 3 && (
        <div className="mensaje-final">
          <h2>REGISTRO COMPLETADO</h2>

          <p>Bienvenido a FitLife, {datosUsuario.name}♥️</p>
        </div>
      )}
    </div>
  );
}
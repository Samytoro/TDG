import React, { useState, useEffect } from 'react';
import './RegistroActividades.css'; // Importa el archivo de estilos correspondiente

const RegistroActividades = ({ cambiarPagina }) => {
  const [actividades, setActividades] = useState(
    JSON.parse(localStorage.getItem('actividades')) || []
  ); // Estado para almacenar las actividades registradas

  const [nuevaActividad, setNuevaActividad] = useState(""); // Estado para capturar la nueva actividad

  // Función para manejar el envío del formulario y agregar una nueva actividad
  const handleSubmit = (e) => {
    e.preventDefault();
    if (nuevaActividad.trim() !== "") {
      const fecha = new Date().toLocaleDateString(); // Obtener la fecha actual
      const actividadConFecha = `${nuevaActividad} - ${fecha}`; // Agregar la fecha a la actividad
      setActividades([...actividades, actividadConFecha]);
      setNuevaActividad("");
    }
  };

  // Efecto para guardar las actividades en el localStorage
  useEffect(() => {
    localStorage.setItem('actividades', JSON.stringify(actividades));
  }, [actividades]);

  return (
    <div className="registro-actividades-container">
      {/* Encabezado */}
      <div className="perfil-header">
        <img src="https://ingenieria.bogota.unal.edu.co/ingnova/images/2021/11/09/escudo-blanco-fondo-gris.png" alt="Logo UN" />
        <h1>Sistema Académico para Registro de Trabajo de Grado</h1>
      </div>
      
      {/* Formulario para registrar nueva actividad */}
      <form className="formulario" onSubmit={handleSubmit}>
        <label htmlFor="nuevaActividad">Nueva Actividad:</label>
        <input type="text" id="nuevaActividad" value={nuevaActividad} onChange={(e) => setNuevaActividad(e.target.value)} />
        <button type="submit">Registrar</button>
      </form>

      {/* Historial de actividades */}
      <div className="historial">
        <h2>Historial de Actividades</h2>
        <ul>
          {actividades.map((actividad, index) => (
            <li key={index}>{actividad}</li>
          ))}
        </ul>
      </div>
      <div>
        <center><button onClick={() => cambiarPagina("PerfilEstudiante")}>Volver al Perfil</button></center>
      </div>
      {/* Footer */}
      <footer className="perfil-footer">
        <h4>Derechos reservados &copy; Universidad Nacional</h4>
        <a href="/" onClick={() => cambiarPagina("inicio")}>&#8592; Inicio de Sesión</a>
      </footer>
    </div>
  );
};

export default RegistroActividades;

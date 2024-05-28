import React, { useState } from 'react';
import './PerfilDirector.css';

const PerfilDirector = ({ cambiarPagina }) => {
  const [formatos, setFormatos] = useState([
    { id: 1, nombre: 'Formato 1', estudiante: 'Juan Pérez', estado: 'En progreso' },
    { id: 2, nombre: 'Formato 2', estudiante: 'Ana Gómez', estado: 'Completado' },
    { id: 3, nombre: 'Formato 3', estudiante: 'Lina García', estado: 'Completado' },
    { id: 4, nombre: 'Formato 4', estudiante: 'María Lopez', estado: 'Rechazado' },
  ]);

  const agregarFormato = () => {
    const nuevoFormato = { id: 5, nombre: 'Formato 5', estudiante: 'Luis Martínez', estado: 'Pendiente' };
    setFormatos([...formatos, nuevoFormato]);
  };

  const [profesores] = useState([
    { id: 1, nombre: 'Luis Botero', especialidad: 'Ingeniería de Minas', area: 'Extracción de Minerales' },
    { id: 2, nombre: 'Diana Torres', especialidad: 'Geotecnia', area: 'Geomecánica' },
    // Agrega más profesores aquí
  ]);

  const asignarTrabajoGrado = () => {
    // Lógica para asignar el trabajo de grado al profesor seleccionado
    // Puedes implementar esta función según tu flujo de datos y lógica de negocio
    alert('Trabajo de grado asignado al profesor seleccionado');
  };

  const [notificaciones] = useState([
    { id: 1, mensaje: 'Juan Pérez ha subido un nuevo avance en su Trabajo de Grado.', jiraUrl: 'https://jira.example.com/browse/TG-1' },
    { id: 2, mensaje: 'Ana Gómez ha completado su Trabajo de Grado.', jiraUrl: 'https://jira.example.com/browse/TG-2' },
  ]);

  return (
    <div className="perfil-container">
      <div className="perfil-header">
        <img
          src="https://ingenieria.bogota.unal.edu.co/ingnova/images/2021/11/09/escudo-blanco-fondo-gris.png"
          alt="Logo UN"
        />
        <h1>Sistema Académico para Registro de Trabajo de Grado</h1>
      </div>
      <div className="perfil-body">
        <div className="perfil-info">
          <h2>Perfil del Director</h2>
          <p><strong>Nombre:</strong> Carlos Díaz</p>
          <p><strong>Correo:</strong> carlos.diaz@example.com</p>
        </div>
        <div className="perfil-columnas-b">
          <div className="perfil-cursos-b">
            <h2>Formatos de Trabajo de Grado Recibidos</h2>
            <ul>
              {formatos.map((formato) => (
                <li key={formato.id}>
                  {formato.nombre} - {formato.estudiante} - {formato.estado}
                </li>
              ))}
            </ul>
            <button onClick={agregarFormato}>Agregar Formato</button>
          </div>
          <div className="perfil-profesores">
            <h2>Profesores Disponibles para Asignación</h2>
            <ul>
              {profesores.map((profesor) => (
                <li key={profesor.id}>
                  <label>
                    <input type="checkbox" name="profesor" />
                    {profesor.nombre} - {profesor.especialidad} - {profesor.area}
                  </label>
                </li>
              ))}
            </ul>
            <button onClick={asignarTrabajoGrado}>Asignar a Trabajo de Grado</button>
          </div>
          <div className="perfil-notificaciones-b">
            <h2>Notificaciones de Avances</h2>
            <ul>
              {notificaciones.map((notificacion) => (
                <li key={notificacion.id}>
                  {notificacion.mensaje}
                  <br />
                  <a href={notificacion.jiraUrl} target="_blank" rel="noopener noreferrer">
                    Ver detalles en Jira
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="perfil-footer">
        <p>Derechos reservados © 2024 Universidad Nacional de Colombia</p>
        <a href="/" onClick={() => cambiarPagina("inicio")}>&#8592; Inicio de Sesión</a>
      </div>
    </div>
  );
};

export default PerfilDirector;

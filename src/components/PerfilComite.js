import React, { useState } from 'react';
import './PerfilComite.css';

const PerfilComite = ({ cambiarPagina }) => {
  const [solicitudes, setSolicitudes] = useState([]);
  const [formatos] = useState([
    { id: 1, nombre: 'Formato 1', estudiante: 'Juan Pérez', estado: 'En progreso' },
    { id: 2, nombre: 'Formato 2', estudiante: 'Ana Gómez', estado: 'Completado' },
    { id: 3, nombre: 'Formato 3', estudiante: 'Lina García', estado: 'Completado' },
    { id: 4, nombre: 'Formato 4', estudiante: 'María Lopez', estado: 'Rechazado' },
  ]);

  const registerTrabajoGrado = () => {
    // Lógica para asignar el trabajo de grado al profesor seleccionado
    // Puedes implementar esta función según tu flujo de datos y lógica de negocio
    alert('Trabajo de grado registrado');
  };
  

  const [notifica] = useState([
    { id: 1, mensaje: 'Trabajo de Grado recibido por el profesor Luis A.' },
    { id: 2, mensaje: 'Recursos aprobados para.' },
  ]);

  const agregarSolicitud = () => {
    cambiarPagina('SolicitudConvenio');
  };

  return (
    <div className="perfil-container">
      <div className="fondo"></div>
      <div className="perfil-header">
        <img
          src="https://ingenieria.bogota.unal.edu.co/ingnova/images/2021/11/09/escudo-blanco-fondo-gris.png"
          alt="Logo UN"
        />
        <h1>Sistema Académico para Registro de Trabajo de Grado</h1>
      </div>
      <div className="perfil-body">
        <div className="perfil-info">
          <img
            src="https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1095249842.jpg"
            alt="Foto de Usuario"
          />
          <div>
            <h2>Perfil del Miembro del Comité Asesor</h2>
            <p><strong>Nombre:</strong> Pedro López</p>
            <p><strong>Correo:</strong> pedro.lopez@example.com</p>
          </div>
        </div>
        <div className="perfil-columnas-c">
          <div className="perfil-cursos-c">
            <h2>Solicitudes de Convenios</h2>
            <ul>
              {solicitudes.map((solicitud) => (
                <li key={solicitud.id}>
                  {solicitud.estudiante} - {solicitud.entidad} - {solicitud.estado}
                </li>
              ))}
            </ul>
            <button onClick={agregarSolicitud}>Solicitar Convenio</button>
          </div>
          <div className="perfil-cursos-j">
            <h2>Correos</h2>
            <ul>
              {solicitudes.map((solicitud) => (
                <li key={solicitud.id}>
                  {solicitud.estudiante} - {solicitud.entidad} - {solicitud.estado}
                </li>
              ))}
            </ul>
            <button onClick={() => cambiarPagina("EnviarCorreo")}>Enviar Mensaje</button>
          </div>
          <div className="perfil-cursos-c">
            <h2>Formatos de Trabajo de Grado Recibidos</h2>
            <ul>
              {formatos.map((formato) => (
                <li key={formato.id}>
                    <label>
                    <input type="checkbox" name="formato" />
                     {formato.nombre} - {formato.estudiante} - {formato.estado}
                    </label>
                </li>
              ))}
            </ul>
            <button onClick={registerTrabajoGrado}>Registrar Trabajo de Grado Autorizado</button>
            
          </div>
          <div className="perfil-notificaciones-d">
            <h2>Notificaciones</h2>
            <ul>
              {notifica.map((notificacion) => (
                <li key={notificacion.id}>
                  {notificacion.mensaje}
                  <br />
                  
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

export default PerfilComite;

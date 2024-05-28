import React, { useState, useEffect, useRef } from 'react';
import './PerfilUsuario.css';


const PerfilUsuario = ({ cambiarPagina }) => {
  const [perfil, setPerfil] = useState({
    nombre: "Juan",
    apellido: "Pérez",
    correo: "juan@example.com",
    carrera: "Ingeniería de Sistemas",
    area: "análisis mineralógicos",
    interes: "Investigación"
  });

  const [editando, setEditando] = useState(false);

  const handleChange = (e) => {
    setPerfil({
      ...perfil,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Perfil actualizado");
    setEditando(false);
  };

  const [notificaciones] = useState([
    { mensaje: 'Selección del Tema: 1 semana para vencer', googleCalendarUrl: 'https://calendar.google.com/event?action=TEMPLATE&dates=20240101T000000Z/20240108T000000Z&text=Selección%20del%20Tema' },
    { mensaje: 'Presentación de Propuesta: 4 semanas para vencer', googleCalendarUrl: 'https://calendar.google.com/event?action=TEMPLATE&dates=20240101T000000Z/20240129T000000Z&text=Presentación%20de%20Propuesta' },
    { mensaje: 'Recolección de Datos: 9 semanas para vencer', googleCalendarUrl: 'https://calendar.google.com/event?action=TEMPLATE&dates=20240226T000000Z/20240430T000000Z&text=Recolección%20de%20Datos' },
    { mensaje: 'Análisis de Datos: 12 semanas para vencer', googleCalendarUrl: 'https://calendar.google.com/event?action=TEMPLATE&dates=20240501T000000Z/20240724T000000Z&text=Análisis%20de%20Datos' },
    { mensaje: 'Entrega del Informe Final: 16 semanas para vencer', googleCalendarUrl: 'https://calendar.google.com/event?action=TEMPLATE&dates=20240725T000000Z/20241016T000000Z&text=Entrega%20del%20Informe%20Final' },
    { mensaje: 'Defensa del Trabajo: 22 semanas para vencer', googleCalendarUrl: 'https://calendar.google.com/event?action=TEMPLATE&dates=20241017T000000Z/20241211T000000Z&text=Defensa%20del%20Trabajo' },
  ]);

  const [mostrarRecordatorios, setMostrarRecordatorios] = useState(false);

  const tooltipRef = useRef(null);

  const toggleRecordatorios = () => {
    setMostrarRecordatorios(!mostrarRecordatorios);
  };

  const handleClickOutside = (event) => {
    if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
      setMostrarRecordatorios(false);
    }
  };

  useEffect(() => {
    if (mostrarRecordatorios) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [mostrarRecordatorios]);

  return (
    <div className="perfil-container">
      <div className="perfil-header">
        <img src="https://ingenieria.bogota.unal.edu.co/ingnova/images/2021/11/09/escudo-blanco-fondo-gris.png" alt="Logo UN" />
        <h1>Sistema Académico para Registro de Trabajo de Grado</h1>
      </div>
      <div className="perfil-body">
        <div className="perfil-info">
          <img src="https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1095249842.jpg" alt="Foto de Usuario" />
          <div>
            <h2>Perfil de Usuario</h2>
            <p><strong>Nombre:</strong> {editando ? <input type="text" name="nombre" value={perfil.nombre} onChange={handleChange} /> : perfil.nombre}</p>
            <p><strong>Apellido:</strong> {editando ? <input type="text" name="apellido" value={perfil.apellido} onChange={handleChange} /> : perfil.apellido}</p>
            <p><strong>Correo:</strong> {editando ? <input type="text" name="correo" value={perfil.correo} onChange={handleChange} /> : perfil.correo}</p>
            <p><strong>Carrera:</strong> {editando ? <input type="text" name="carrera" value={perfil.carrera} onChange={handleChange} /> : perfil.carrera}</p>
            <p><strong>Área de investigación:</strong> {editando ? <input type="text" name="area" value={perfil.area} onChange={handleChange} /> : perfil.area}</p>
            <p><strong>Intereses académicos:</strong> {editando ? <input type="text" name="interes" value={perfil.interes} onChange={handleChange} /> : perfil.interes}</p>
            <h4>Cursos Inscritos</h4>
            <p>Trabajo de Investigación</p>       
            <p>Ingles</p>     
          
            {editando ? 
              <button onClick={handleSubmit}>Guardar Cambios</button> :
              <button onClick={() => setEditando(true)}>Actualizar Perfil</button>
            }
          </div>
         
        </div>
        <div className="perfil-columnas">
          <div className="perfil-notificaciones notificaciones-plazos-container">
            <div className="tooltip" ref={tooltipRef}>
              <div className="recordatorios-icono" onClick={toggleRecordatorios}>
                <img src="https://cdn-icons-png.flaticon.com/256/1156/1156949.png" alt="Campanita" style={{ width: '24px', height: '24px' }}/>
                {notificaciones.length > 0 && <span className="badge">{notificaciones.length}</span>}
              </div>
              <div className={`tooltiptext ${mostrarRecordatorios ? 'show' : ''}`}>
                <h2>Recordatorios</h2>
                {notificaciones.map((notificacion, index) => (
                  <div key={index}>{notificacion.mensaje}</div>
                ))}
              </div>
            </div>
            <h2>Notificaciones de Plazos</h2>
            <ul>
              {notificaciones.map((notificacion, index) => (
                <li key={index}>
                  {notificacion.mensaje}
                  <br />
                  <a href={notificacion.googleCalendarUrl} target="_blank" rel="noopener noreferrer">
                    Ver detalles en Google Calendar 
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="perfil-modulos">
            <div className="perfil-registro-actividades">
              <h2>Registro de Actividades</h2>
              <button onClick={() => cambiarPagina("RegistroActividades")}>Ir a Registro de Actividades</button>
            </div>
            <div className="perfil-trabajo">
              <h2>Trabajo de Grado</h2>
              <button onClick={() => cambiarPagina("formato")}>Diligenciar Formato</button>
            </div>
            <div className="perfil-recursos">
              <h2>Gestión de Recursos</h2>
              <button onClick={() => cambiarPagina("recursos")}>Gestión de Recursos</button>
            </div>
            <div className="perfil-herramientas">
              <h2>Herramientas Planificación</h2>
              <button onClick={() => cambiarPagina("HerramientasTDG")}>Ir a Herramientas</button>
            </div>
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

export default PerfilUsuario;

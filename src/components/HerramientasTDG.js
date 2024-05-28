import React from 'react';
import './HerramientasTDG.css';

const handleSolicitudSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías agregar la lógica para enviar la solicitud de recursos
    alert("Mensaje enviado");
  };


const HerramientasTDG = ({ cambiarPagina }) => {
  return (
    <div className="perfil-container">
      <div className="perfil-header">
        <img src="https://ingenieria.bogota.unal.edu.co/ingnova/images/2021/11/09/escudo-blanco-fondo-gris.png" alt="Logo UN" />
        <h1>Sistema Académico para Registro de Trabajo de Grado</h1>
      </div>
      <div className="herramientas-body">
        <div className="planificacion">
          <h2>Planificación</h2>
          <p>Definición del Tema y Objetivo:</p>
          <div className="solicitud-form-b">
          <form onSubmit={handleSolicitudSubmit}>
            <label>Descripción:</label><br />
            <textarea /><br />
            <button type="submit">Enviar</button>
          </form>
        </div>
          <p>Revisión de Literatura:</p>
          <ul>
            <li><a href="https://www.sciencedirect.com/" target="_blank" rel="noopener noreferrer">ScienceDirect</a></li>
            <li><a href="https://pubmed.ncbi.nlm.nih.gov/" target="_blank" rel="noopener noreferrer">PubMed</a></li>
            <li><a href="https://scholar.google.com/" target="_blank" rel="noopener noreferrer">Google Scholar</a></li>
            <li><a href="https://www.researchgate.net/" target="_blank" rel="noopener noreferrer">ResearchGate</a></li>
          </ul>
          <p>Diseño del Proyecto:</p>
          <img src="https://image.slidesharecdn.com/formatodelproyectodegrado2021-210613010617/85/Formato-del-proyecto-de-grado-2021-2-320.jpg" alt="Formato" />
          <p>Recopilación de Datos</p>
          <div className="solicitud-form-b">
            <form onSubmit={handleSolicitudSubmit}>
                <label>Descripción:</label><br />
                <textarea /><br />
                <button type="submit">Enviar</button>
            </form>
         </div>
          <p>Análisis de Datos</p>
          <div className="solicitud-form-b">
            <form onSubmit={handleSolicitudSubmit}>
                <label>Descripción:</label><br />
                <textarea /><br />
                <button type="submit">Enviar</button>
            </form>
         </div>
          <p>Redacción del Trabajo de Grado</p>
          <div className="solicitud-form-b">
            <form onSubmit={handleSolicitudSubmit}>
                <label>Descripción:</label><br />
                <textarea /><br />
                <button type="submit">Enviar</button>
            </form>
         </div>
          <p>Presentación y Defensa:</p>
          <ul><strong>Fechas de Sustentaciones</strong>
            <li>Abril 11 de 2025<button>Reservar</button></li>
            <li>Octubre 01 de 2025<button>Reservar</button></li>
            <li>Noviembre 14 de 2025<button>Reservar</button></li>
          </ul>
          
          <p>Revisiones y Retroalimentación:</p>
          <button>Enviar correo al profesor</button>
          <p>Gestión Administrativa:</p>
          <a href="https://minas.medellin.unal.edu.co/formacion/admisiones" target="_blank" rel="noopener noreferrer">Vicedecanatura Académica</a>
        </div>
        <div className="enlaces">
          <h2>Enlaces</h2>
          <a href="https://www.atlassian.com/software/jira" target="_blank" rel="noopener noreferrer">Jira</a>
          <a href="https://trello.com/" target="_blank" rel="noopener noreferrer">Trello</a>
          <a href="https://www.microsoft.com/es-es/microsoft-365/project" target="_blank" rel="noopener noreferrer">Microsoft Project</a>
          <a href="https://calendar.google.com/" target="_blank" rel="noopener noreferrer">Google Calendar</a>
        </div>
        <div>
            <button onClick={() => cambiarPagina("PerfilEstudiante")}>Volver al Perfil</button>
        </div>
      </div>
      <div className="herramientas-footer">
        <p>Derechos reservados © 2024 Universidad Nacional de Colombia</p>
        <a href="/" onClick={() => cambiarPagina("PerfilUsuario")}>&#8592; Volver al Perfil</a>
      </div>
    </div>
  );
}

export default HerramientasTDG;

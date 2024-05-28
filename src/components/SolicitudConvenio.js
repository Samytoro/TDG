import React, { useState } from 'react';
import './SolicitudConvenio.css';

const SolicitudConvenio = ({ cambiarPagina }) => {
 
  const [formData, setFormData] = useState({
    convenioCon: '',
    tituloTrabajo: '',
    cedulaEstudiante: '',
    nombreMiembro: '',
    documentoMiembro: '',
    fecha: '',
    mensaje: '',
    archivo: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      archivo: e.target.files[0]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar los datos del formulario al backend
    alert('Solicitud de convenio enviada');
    cambiarPagina('PerfilComite');
  };

  return (
    <div className="solicitud-convenio-container">
      <div className="solicitud-convenio-header">
        <img
          src="https://ingenieria.bogota.unal.edu.co/ingnova/images/2021/11/09/escudo-blanco-fondo-gris.png"
          alt="Logo UN"
        />
        <h1>Sistema Académico para Registro de Trabajo de Grado</h1>
      </div>
      <div className="solicitud-convenio-body">
        <h2>Solicitud de Convenio</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Solicitar convenio con:
            <input type="text" name="convenioCon" value={formData.convenioCon} onChange={handleChange} required />
          </label>
          <label>
            Para el trabajo de grado con título:
            <input type="text" name="tituloTrabajo" value={formData.tituloTrabajo} onChange={handleChange} required />
          </label>
          <label>
            Cédula del estudiante:
            <input type="text" name="cedulaEstudiante" value={formData.cedulaEstudiante} onChange={handleChange} required />
          </label>
          <label>
            Nombre del miembro del comité:
            <input type="text" name="nombreMiembro" value={formData.nombreMiembro} onChange={handleChange} required />
          </label>
          <label>
            Documento del miembro:
            <input type="text" name="documentoMiembro" value={formData.documentoMiembro} onChange={handleChange} required />
          </label>
          <label>
            Fecha:
            <input type="date" name="fecha" value={formData.fecha} onChange={handleChange} required />
          </label>
          <label>
            Mensaje:
            <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} required />
          </label>
          <label>
            Adjuntar documento:
            <input type="file" name="archivo" onChange={handleFileChange} />
          </label>
          <button type="submit">Enviar Solicitud</button>
        </form>
      </div>
      <div>
      <center><button type="button" onClick={() => cambiarPagina("PerfilComite")}>Atrás</button></center>
      </div>

      <div className="solicitud-convenio-footer">
        <p>Derechos reservados © 2024 Universidad Nacional de Colombia</p>
        <a href="/" onClick={() => cambiarPagina("PerfilComite")}>&#8592; Volver al Inicio de Sesión</a>
      </div>
    </div>
  );
};

export default SolicitudConvenio;

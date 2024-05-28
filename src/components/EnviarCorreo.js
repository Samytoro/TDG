import React, { useState } from 'react';
import './EnviarCorreo.css'; // Asegúrate de que los estilos se importen aquí

const EnviarCorreo = ({ cambiarPagina }) => {
  const [correo, setCorreo] = useState({
    para: '',
    asunto: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCorreo({
      ...correo,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el correo
    console.log('Correo enviado:', correo);
    alert('Correo enviado con éxito');
  };

  return (
    <div className="correo-container">
      <div className="fondo"></div>
      <div className="perfil-header">
        <img src="https://ingenieria.bogota.unal.edu.co/ingnova/images/2021/11/09/escudo-blanco-fondo-gris.png" alt="Logo UN" />
        <h1>Sistema Académico para Registro de Trabajo de Grado</h1>
      </div>
      <div className="correo-body">
        <form className="correo-form" onSubmit={handleSubmit}>
          <label>
            Para:
            <input
              type="email"
              name="para"
              value={correo.para}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Asunto:
            <input
              type="text"
              name="asunto"
              value={correo.asunto}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Mensaje:
            <textarea
              name="mensaje"
              value={correo.mensaje}
              onChange={handleChange}
              required
            ></textarea>
          </label>
          <button type="submit">Enviar</button>
        </form>
      </div>
      <div>
      <center><button type="button" onClick={() => cambiarPagina("PerfilComite")}>Atrás</button></center>
      </div>
      <div className="correo-footer">
      <a href="/" onClick={() => cambiarPagina("InicioSesion")}>&#8592; Volver al Inicio de Sesión</a>
      </div>
    </div>
  );
};

export default EnviarCorreo;

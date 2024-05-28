import React, { useState } from 'react';
import './InicioSesion.css'; // Agregamos estilos CSS para la página de inicio de sesión

const InicioSesion = ({ cambiarPagina }) => {
  const [credenciales, setCredenciales] = useState({
    usuario: '',
    contraseña: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredenciales({
      ...credenciales,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado');
    console.log('Credenciales:', credenciales);

    // Aquí iría la lógica para verificar las credenciales y redirigir a la página correspondiente
    if (credenciales.usuario === 'estudiante' && credenciales.contraseña === '12345') {
      console.log('Redirigiendo a PerfilEstudiante');
      cambiarPagina('PerfilEstudiante');
    } else if (credenciales.usuario === 'director' && credenciales.contraseña === 'admin') {
      console.log('Redirigiendo a PerfilDirector');
      cambiarPagina('PerfilDirector');
    } else if (credenciales.usuario === 'comite' && credenciales.contraseña === 'comite2024') {
      console.log('Redirigiendo a PerfilComite');
      cambiarPagina('PerfilComite');
    } else {
      console.log('Credenciales incorrectas');
      alert('Credenciales incorrectas');
    }
  };

  return (
    <div className="inicio-sesion">
      {/* Encabezado */}
      <div className="perfil-header">
        <img src="https://ingenieria.bogota.unal.edu.co/ingnova/images/2021/11/09/escudo-blanco-fondo-gris.png" alt="Logo UN" />
        <h1>Sistema Académico para Registro de Trabajo de Grado</h1>
      </div>

      {/* Contenido de la página */}
      <div className="contenido">
        {/* Imagen de fondo */}
        <div className="fondo"></div>

        {/* Formulario de inicio de sesión */}
        <div className="formulario">
          <h2>Iniciar Sesión</h2>
          {/* Aquí irá el formulario de inicio de sesión */}
          <form onSubmit={handleSubmit}>
            <label>
              Usuario:
              <input type="text" name="usuario" value={credenciales.usuario} onChange={handleChange} placeholder="Ingrese su usuario" />
            </label>
            <label>
              Contraseña:
              <input type="password" name="contraseña" value={credenciales.contraseña} onChange={handleChange} placeholder="Ingrese su contraseña" />
            </label>
            <button type="submit">Ingresar</button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>Derechos reservados © 2024 Universidad Nacional de Colombia</p>
      </footer>
    </div>
  );
};

export default InicioSesion;

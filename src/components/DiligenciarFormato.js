import React, { useState } from 'react';
import './DiligenciarFormato.css';

const DiligenciarFormato = ({ cambiarPagina }) => {
  const [pagina, setPagina] = useState(1);
  const [datos, setDatos] = useState({
    nombre: "",
    apellido: "",
    carrera: "",
    telefono: "",
    direccion: "",
    correo: "",
    normas: false,
    archivo: null,
    requisitos: {
      requisito1: false,
      requisito2: false,
      requisito3: false
    }
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setDatos(prevDatos => ({
        ...prevDatos,
        requisitos: {
          ...prevDatos.requisitos,
          [name]: checked
        }
      }));
    } else {
      setDatos({
        ...datos,
        [name]: value
      });
    }
  };

  const handleArchivoChange = (e) => {
    setDatos({
      ...datos,
      archivo: e.target.files[0]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Formato de trabajo de grado enviado");
    setDatos({
      nombre: "",
      apellido: "",
      carrera: "",
      telefono: "",
      direccion: "",
      correo: "",
      normas: false,
      archivo: null,
      requisitos: {
        requisito1: false,
        requisito2: false,
        requisito3: false
      }
    });
    cambiarPagina("perfil");
  };

  const renderPagina1 = () => (
    <div className="form-page">
      <h2>Diligenciar Formato de Trabajo de Grado</h2>
      <form>
        <div className="form-group">
          <label>
            Nombre:
            <input type="text" name="nombre" value={datos.nombre} onChange={handleChange} required />
          </label>
          <label>
            Apellido:
            <input type="text" name="apellido" value={datos.apellido} onChange={handleChange} required />
          </label>
        </div>
        <div className="form-group">
          <label>
            Documento de identificación:
            <input type="tel" name="telefono" value={datos.telefono} onChange={handleChange} required />
          </label><label>
            Programa curricular:
            <input type="text" name="carrera" value={datos.carrera} onChange={handleChange} required />
          </label>
          
        </div>
        <div className="form-group">
          <label>
            Correo:
            <input type="email" name="correo" value={datos.correo} onChange={handleChange} required />
          </label><label>
            Título del trabajo de Grado:
            <input type="text" name="direccion" value={datos.direccion} onChange={handleChange} required />
          </label>          
        </div>
        <div className="form-buttons">
          <button onClick={() => cambiarPagina("PerfilEstudiante")}>Volver al Perfil</button>  
          <button type="button" onClick={() => setPagina(2)}>Siguiente</button>
              
        </div>
      </form>
    </div>
  );

  const renderPagina2 = () => (
    <div className="form-page">
      <h2>Diligenciar Formato de Trabajo de Grado</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
          <p>Requisitos académicos:</p>
          <input type="checkbox" name="normas" checked={datos.normas} onChange={handleChange} required />
          <label htmlFor="normas">
            <ul>
              <li>Créditos Completados: El estudiante debe haber completado el 80% de créditos del programa de estudios antes de comenzar el trabajo de grado.</li>
              <li>Promedio Académico: El estudiante debe mantener un promedio académico mínimo para ser elegible para el trabajo de grado (3.8).</li>
              <li>Aprobación de Cursos Prerrequisitos: El estudiante debe haber aprobado ciertos cursos específicos que son prerrequisitos para el trabajo de grado.</li>
              <li>Inscripción en el Curso de Trabajo de Grado: El estudiante debe estar inscrito oficialmente en el curso de trabajo de grado correspondiente.</li>
            </ul>
            </label>
            
          </label>
          
        </div>
        <div className="form-group">
          <label>
            Adjuntar Archivo:
            <input type="file" name="archivo" onChange={handleArchivoChange} required />
          </label>
        </div>
        <div className="form-group">
          <label>Contenido Mínimo del Trabajo de Grado:
          <ul>
              <li>Portada</li>
              <li>Resumen</li>
              <li>Palabras clave</li>
              <li>Tabla de contenido</li>
              <li>Introducción</li>
              <li>Capítulos analíticos</li>
              <li>Conclusioness</li>
              <li>Listas de referencias</li>
            </ul>
            <input type="checkbox" name="requisito1" checked={datos.requisitos.requisito1} onChange={handleChange} />
          </label>
          <label>Coherencia y Precisión en los Capítulos Analíticos:
          <ul>
              <li>Responder adecuadamente a los objetivos planteados.</li>
              <li>Establecer una conexión coherente entre sí.</li>
              <li>Demostrar un manejo preciso de conceptos, teorías y datos, reflejando el dominio del tema.</li>
          </ul>
            <input type="checkbox" name="requisito2" checked={datos.requisitos.requisito2} onChange={handleChange} />
          </label>
          <label>Uso Adecuado de Fuentes y Derechos de Autor:
          <ul>
              <li>Las fuentes bibliográficas utilizadas deben ser pertinentes y actualizadas.</li>
              <li>Debe emplearse correctamente las citas textuales, paráfrasis y notas al pie, respetando las normas de citación establecidas.</li>
              
          </ul>
            <input type="checkbox" name="requisito3" checked={datos.requisitos.requisito3} onChange={handleChange} />
          </label>
        </div>
        <div className="form-buttons">
          <button type="button" onClick={() => setPagina(1)}>Atrás</button>
          <button type="submit">Enviar</button>
          <button onClick={() => cambiarPagina("PerfilEstudiante")}>Volver al Perfil</button>
        </div>
      </form>
      

    </div>
  );

  return (
    <div className="form-container">
      <header className="perfil-header">
        <img src="https://ingenieria.bogota.unal.edu.co/ingnova/images/2021/11/09/escudo-blanco-fondo-gris.png" alt="Logo UN" />
        <h1>Sistema Académico para Registro de Trabajo de Grado</h1>
        
      </header>
      {pagina === 1 ? renderPagina1() : renderPagina2()}
      <footer className="perfil-footer">
        <h4>Derechos reservados &copy; Universidad Nacional</h4>
        <a href="/" onClick={() => cambiarPagina("inicio")}>&#8592; Inicio de Sesión</a>
      </footer>
    </div>
  );
}

export default DiligenciarFormato;

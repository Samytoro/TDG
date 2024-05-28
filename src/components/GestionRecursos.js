import React, { useState } from 'react';
import axios from 'axios';
import './GestionRecursos.css'; // Importar los estilos CSS

const GestionRecursos = ({ cambiarPagina }) => {
  const equipos = [
    { nombre: 'Equipo 1', descripcion: 'Equipo para análisis de suelos' },
    { nombre: 'Equipo 2', descripcion: 'Equipo para análisis de minerales' },
    { nombre: 'Equipo 3', descripcion: 'Equipo para análisis de aguas subterráneas' },
    { nombre: 'Equipo 4', descripcion: 'Equipo para análisis de gases' },
    { nombre: 'Equipo 5', descripcion: 'Equipo para análisis de rocas' }
  ];

  const becas = [
    { nombre: 'Beca de Investigación Minera', descripcion: 'Beca para cubrir gastos de investigación en el área de minería', beneficiario: 'Estudiantes de posgrado' },
    { nombre: 'Beca de Investigación Geológica', descripcion: 'Beca para cubrir gastos de investigación en el área de geología', beneficiario: 'Estudiantes de pregrado y posgrado' },
    { nombre: 'Beca de Investigación Ambiental', descripcion: 'Beca para cubrir gastos de investigación en el área ambiental', beneficiario: 'Estudiantes de pregrado y posgrado' }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [articleDetails, setArticleDetails] = useState([]);

  const handleSolicitudSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías agregar la lógica para enviar la solicitud de recursos
    alert("Solicitud de recursos enviada");
  };

  const handlePubMedSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi', {
        params: {
          db: 'pubmed',
          term: searchTerm,
          retmode: 'json'
        }
      });
      const idList = response.data.esearchresult.idlist;
      setSearchResults(idList);
      fetchArticleDetails(idList);
    } catch (error) {
      console.error('Error al buscar en PubMed:', error);
    }
  };

  const fetchArticleDetails = async (idList) => {
    try {
      const ids = idList.join(',');
      const response = await axios.get('https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi', {
        params: {
          db: 'pubmed',
          id: ids,
          retmode: 'xml'
        }
      });

      // Parse the XML response to extract article details
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(response.data, 'text/xml');
      const articles = Array.from(xmlDoc.getElementsByTagName('PubmedArticle'));

      const details = articles.map(article => {
        const title = article.getElementsByTagName('ArticleTitle')[0].textContent;
        const abstract = article.getElementsByTagName('AbstractText')[0]?.textContent || 'No abstract available';
        return { title, abstract };
      });

      setArticleDetails(details);
    } catch (error) {
      console.error('Error al obtener detalles del artículo:', error);
    }
  };

  return (
    <div>
      
      <div className="perfil-header">
        <img src="https://ingenieria.bogota.unal.edu.co/ingnova/images/2021/11/09/escudo-blanco-fondo-gris.png" alt="Logo UN" />
        <h1>Sistema Académico para Registro de Trabajo de Grado</h1>
      </div>
      <div className="perfil-container">
        <div className="perfil-columnas">
          <div className="perfil-columna">
            <h2>Equipos Disponibles</h2>
            <ul className="equipos-lista">
              {equipos.map((equipo, index) => (
                <li key={index}>
                  <h3>{equipo.nombre}</h3>
                  <p>{equipo.descripcion}</p>
                  <button onClick={() => alert("Solicitud de equipo enviada")}>Solicitar Equipo</button>
                </li>
              ))}
            </ul>
          </div>
          <div className="perfil-columna">
            <h2>Disponibilidad de Becas</h2>
            <ul className="becas-lista">
              {becas.map((beca, index) => (
                <li key={index}>
                  <h3>{beca.nombre}</h3>
                  <p>{beca.descripcion}</p>
                  <p><strong>Beneficiario:</strong> {beca.beneficiario}</p>
                  <button onClick={() => alert("Solicitud de beca enviada")}>Solicitar Beca</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="solicitud-form">
          <h2>Solicitar Recursos</h2>
          <form onSubmit={handleSolicitudSubmit}>
            <label>Descripción de la Solicitud:</label><br />
            <textarea /><br />
            <button type="submit">Enviar</button>
          </form>
        </div>
        <div className="pubmed-search">
          <h2>Buscar en PubMed</h2>
          <form onSubmit={handlePubMedSearch}>
            <label>Término de búsqueda:</label><br />
            <input 
              type="text" 
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)} 
            /><br />
            <button type="submit">Buscar</button>
          </form>
          <div className="pubmed-results">
            <h3>Resultados de búsqueda:</h3>
            <ul>
              {articleDetails.map((article, index) => (
                <li key={index}>
                  <h4>{article.title}</h4>
                  <p>{article.abstract}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
            <center><button onClick={() => cambiarPagina("PerfilEstudiante")}>Volver al Perfil</button></center>
        </div>
      </div>
      <footer className="perfil-footer">
        <h4>Derechos reservados &copy; Universidad Nacional</h4>
        <a href="/" onClick={() => cambiarPagina("inicio")}>&#8592; Inicio de Sesión</a>
      </footer>
    </div>
  );
}

export default GestionRecursos;

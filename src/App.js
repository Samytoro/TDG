import React, { useState } from 'react';
import InicioSesion from './components/InicioSesion';
import PerfilUsuario from './components/PerfilUsuario';
import GestionRecursos from './components/GestionRecursos';
import DiligenciarFormato from './components/DiligenciarFormato';
import PerfilDirector from './components/PerfilDirector';
import PerfilComite from './components/PerfilComite';
import SolicitudConvenio from './components/SolicitudConvenio';
import HerramientasTDG from './components/HerramientasTDG'; 
import RegistroActividades from './components/RegistroActividades'; 
import EnviarCorreo from './components/EnviarCorreo'; 

function App() {
  const [pagina, setPagina] = useState("inicio");

  const mostrarPagina = () => {
    switch (pagina) {
      case "inicio":
        return <InicioSesion cambiarPagina={setPagina} />;
      case "PerfilEstudiante":
        return <PerfilUsuario cambiarPagina={setPagina} />;
      case "formato":
        return <DiligenciarFormato cambiarPagina={setPagina} />;
      case "recursos":
        return <GestionRecursos cambiarPagina={setPagina} />;
      case "PerfilDirector":
        return <PerfilDirector cambiarPagina={setPagina} />;
      case "PerfilComite":
        return <PerfilComite cambiarPagina={setPagina} />;
      case "SolicitudConvenio":
        return <SolicitudConvenio cambiarPagina={setPagina} />;
      case "HerramientasTDG": // Agrega el nuevo caso para HerramientasTDG
        return <HerramientasTDG cambiarPagina={setPagina} />;
      case "RegistroActividades": // Agrega el nuevo caso para RegistroActividades
        return <RegistroActividades cambiarPagina={setPagina} />;
      case "EnviarCorreo": // Agrega el nuevo caso para RegistroActividades
        return <EnviarCorreo cambiarPagina={setPagina} />;
      default:
        return <InicioSesion cambiarPagina={setPagina} />;
    }
  };

  return (
    <div>
      {mostrarPagina()}
    </div>
  );
}

export default App;

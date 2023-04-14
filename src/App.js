
import React from 'react';
import './App.css';
import HeaderBG from './componentes/Header/Header.js';
import Formulario from './componentes/Formulario/Formulario.js';
import MiOrg from './componentes/MiOrg/MiOrg.js';
import { useState } from 'react';


function App() {

  const [ mostrarFormulario, 
          actualizarMostrarForm ] = useState(true)
   
  const cambiarMostrar = () => {
    actualizarMostrarForm(!mostrarFormulario)
  }  

 //ternario --> condicion ? seMuestra : noSeMuestra
 // mostrarFormulario ? --> es equivalente a mostrarFormulario === true ?
 // <></> ---> fragment html en react, para evitar mostrar una etiqueta div que pueda romper la estructura html.
// para simplificar aun mas el codigo puedo evitar usar el ternario y usar una simple evaluacion con "&&"
// ejm { mostrarFormulario && <Formulario /> } si es true se muestra y si es false no muestra nada.


  return (
    <div className="App">
      <HeaderBG />
      {/* { mostrarFormulario ? <Formulario /> : <></> } */}
      { mostrarFormulario && <Formulario /> } 
      <MiOrg cambiarMostrar={cambiarMostrar} />
    </div>

  );
}
      
export default App;


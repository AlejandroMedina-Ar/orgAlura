import React from 'react';
import './Formulario.css'
import CampoTexto from '../CampoTexto/CampoTexto.js';
import ListaOpciones from '../ListaOpciones/ListaOpcioones.js';
import Boton from '../Boton/Boton.js';
import { useState } from 'react';

const Formulario = (props) => {

  const [nombre, actualizarNombre] = useState('')
  const [puesto, actualizarPuesto] = useState('')
  const [foto, actualizarFoto] = useState('')
  const [equipo, actualizarEquipo] = useState('')
 
  const manejarEnvio = (e) => {
    e.preventDefault()
    console.log('Manejar Envio');
    let datosAEnviar = {
      nombre: nombre,
      puesto: puesto,
      foto: foto,
      equipo: equipo

    }
    console.log(datosAEnviar);
  }  

  return (
    <section className='formulario'>
      
      <form onSubmit={ manejarEnvio } >
        <h2>Rellena el formulario para crear el colaborador.</h2>
      
      <CampoTexto 
          titulo='Nombre' 
          placeholder='Ingresar Nombre' 
          required={ true } 
          valor={ nombre } 
          actualizarValor={ actualizarNombre }
       />

      <CampoTexto 
          titulo='Puesto' 
          placeholder='Ingresar Puesto' 
          required={ true } 
          valor={ puesto } 
          actualizarValor={ actualizarPuesto } 
       />
          
      <CampoTexto 
          titulo='Foto' 
          placeholder='Ingresar Enlace de Foto' 
          required={ false }
          valor={ foto }
          actualizarValor={ actualizarFoto } 
       />

      <ListaOpciones 
          valor={ equipo }
          actualizarEquipo={ actualizarEquipo } 
      
      />

      <Boton textobtn='Crear' />

      </form>

    
    </section>
    
  );
}



export default Formulario;
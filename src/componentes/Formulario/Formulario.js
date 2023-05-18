import React from 'react';
import './Formulario.css'
import Campo from '../Campo/Campo.js';
import ListaOpciones from '../ListaOpciones/ListaOpcioones.js';
import Boton from '../Boton/Boton.js';
import { useState } from 'react';

const Formulario = (props) => {

  const [nombre, actualizarNombre] = useState('')
  const [puesto, actualizarPuesto] = useState('')
  const [foto, actualizarFoto] = useState('')
  const [equipo, actualizarEquipo] = useState('')

  const [titulo, actualizarTitulo] = useState("")
  const [color, actualizarColor ] = useState("")

  const { registrarColaborador, crearEquipo } = props
 
  const manejarEnvio = (e) => {
    e.preventDefault()
    console.log('Manejar Envio');
    let datosAEnviar = {
      nombre: nombre,
      puesto: puesto,
      foto: foto,
      equipo: equipo

    }
    registrarColaborador(datosAEnviar)
  }  

  const manejarNuevoEquipo = (e) => {
    e.preventDefault()
    crearEquipo({ titulo, colorPrimario: color })
  }



  return (
    <section className='formulario'>
      
      <form onSubmit={ manejarEnvio } >
        <h2>Rellena el formulario para crear el colaborador.</h2>
      
      <Campo 
          titulo='Nombre' 
          placeholder='Ingresar Nombre' 
          required={ true } 
          valor={ nombre } 
          actualizarValor={ actualizarNombre }
       />

      <Campo 
          titulo='Puesto' 
          placeholder='Ingresar Puesto' 
          required={ true } 
          valor={ puesto } 
          actualizarValor={ actualizarPuesto } 
       />
          
      <Campo 
          titulo='Foto' 
          placeholder='Ingresar Enlace de Foto' 
          required={ false }
          valor={ foto }
          actualizarValor={ actualizarFoto } 
       />

      <ListaOpciones 
          valor={ equipo }
          actualizarEquipo={ actualizarEquipo }
          equipos={ props.equipos } 
      
      />

      <Boton textobtn='Crear Colaborador' />

      </form>

      <form onSubmit={ manejarNuevoEquipo } >
        <h2>Rellena el formulario para crear el equipo.</h2>
      
      <Campo 
          titulo='Titulo' 
          placeholder='Ingresar Titulo' 
          required={ true } 
          valor={ titulo } 
          actualizarValor={ actualizarTitulo }
       />

      <Campo 
          titulo='Color' 
          placeholder='Ingresar Color en Hexadecimal' 
          required={ true } 
          valor={ color } 
          actualizarValor={ actualizarColor } 
          type="color"
       />

       <Boton textobtn='Crear Equipo' />

       </form>
    
    </section>
    
  );
}



export default Formulario;
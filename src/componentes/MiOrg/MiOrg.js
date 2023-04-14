import React from 'react';
import './MiOrg.css';
import { useState } from 'react';

const MiOrg = (props) => {

    // huso del hook para estado
    // const [nombreVariable, funcionQueActualiza] = useState(valorInicialDelEstado)
    // ejm: 
    // const [nombre, actualizarNombre ] = useState('Tulkas')

   // const [mostrar, actualizarMostrar] = useState(true)
   // const manejarClick = () => {
   //    actualizarMostrar(!mostrar)
   // }

    return ( 
        <section className='orgSection' >
            <h3 className='title' >Mi Organización</h3>
            <img 
                src='/img/add.png'
                alt='add' 
                onClick={props.cambiarMostrar} />
        </section>
    );

}

export default MiOrg;
import React from 'react';
import '../hojas-de-estilo/Dos.css';

function Aptitud(props) {
    return (
      <div className='contenedor-logo'>
        <img src={require(`../imagenes/${props.logo}.png`)} 
        className='logo'
         />
      </div>
    );  
  }

  export default Aptitud;
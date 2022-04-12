import React from 'react';
import '../hojas-de-estilo/Tres.css';

function Practica(props) {
  return (
    <div className='practica'>
      <h4 className='titulo-practica'>{props.practica}</h4>
      <img src={require(`../imagenes/${props.imagen}.png`)}  alt={props.practica} />
      <p className='descripcion-practica'>{props.descripcion}</p>
      <a href={props.link} target='_blank' className='ver'>Ver</a>
    </div>
  );
}

export default Practica;
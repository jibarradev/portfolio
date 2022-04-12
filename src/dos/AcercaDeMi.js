import React from 'react';
import '../hojas-de-estilo/Dos.css';
import Aptitudes from './Aptitudes';

function AcercaDeMi() {
  return (
    <div className='acerca-de-mi'>
      <h2>Acerca de mí</h2>
      <p className='descripcion'>Soy Juan Ibarra, técnico en informática profesional y personal, habiendo estudiado en la E.E.S.T n°4
de Berazategui, y soy estudiante autodidacta desde diciembre de 2020, comenzando en el desarrollo web
con HTML y CSS. Ya este último año me adentré en Javascript con React y Angular, aunque realicé mas
prácticas con ReactJS.</p>
      <h2 className='mis-aptitudes'>Mis aptitudes</h2>
      <p className='conocimientos'>Tengo conocimientos en: </p>
      <Aptitudes />
    </div>
  );
}

export default AcercaDeMi;
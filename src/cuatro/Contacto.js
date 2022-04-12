import React from 'react';
import '../hojas-de-estilo/Cuatro.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Contacto() {
  return (
    <div className='contacto'>
      <a href='https://www.linkedin.com/in/ibarra-juan/' target='_blank' className='link'>
        <FontAwesomeIcon icon={faLinkedin} />
      </a>

      <div>
        <FontAwesomeIcon icon={faAt} className='mail' />
        <span className='mail'>juanibarratec4@gmail.com</span>
      </div>

      <a href='https://github.com/jibarradev' target='_blank' className='link'>
        <FontAwesomeIcon icon={faGithubSquare} />
      </a>
    </div>
  );
}

export default Contacto;
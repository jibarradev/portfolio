import React from 'react';
import Aptitud from './Aptitud';

function Aptitudes() {
  return (
    <div className='aptitudes'>
      <Aptitud  
        logo='html'
      />
      <Aptitud  
        logo='css'
      />
      <Aptitud  
        logo='js'
      />
      <Aptitud  
        logo='react'
      />
    </div>
  );
}

export default Aptitudes;
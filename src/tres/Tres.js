import React from 'react';
import '../hojas-de-estilo/Tres.css';
import Practica from './Practica';

function Tres() {
  return (
    <div className='tres'>
      <div className='contenedor-titulo-practica'>
        <h1 className='a'>Mis prácticas</h1>
      </div>
      <div className='contenedor-prac'>
        <Practica 
          practica='Contador de clicks'
          imagen='proj-uno'
          descripcion='Contador de clicks realizado con ReactJS'  
          link='https://jibarradev.github.io/contador-click/'
        />

        <Practica 
          practica='Calculadora'
          imagen='calculadora'
          descripcion='Calculadora realizada con ReactJS' 
          link='https://jibarradev.github.io/calculadora/'
        />

        <Practica 
          practica='Gestor de deberes'
          imagen='tareas'
          descripcion='Lista de deberes realizado con ReactJS' 
          link='https://jibarradev.github.io/gestor-de-tareas/' 
        />
      </div>
    </div>
  );
}

export default Tres;
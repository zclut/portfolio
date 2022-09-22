import React from 'react';
import cv from '../../assets/cv.pdf';

const CTA = () => {
  return (
    <div className="cta">
        <a href={cv} download className='btn'>Descargar CV</a>
        <a href="https://www.linkedin.com/in/juan-daniel-padilla-491294221/" className='btn btn-primary' target="_blank" rel="noreferrer">Contáctame</a>
    </div>
  )
}

export default CTA
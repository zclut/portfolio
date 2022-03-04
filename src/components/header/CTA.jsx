import React from 'react';
import cv from '../../assets/cv.pdf';

const CTA = () => {
  return (
    <div className="cta">
        <a href={cv} download className='btn'>Descargar CV</a>
        <a href="#contact" className='btn btn-primary'>Contáctame</a>
    </div>
  )
}

export default CTA
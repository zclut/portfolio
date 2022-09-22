import React from 'react'
import './footer.css'
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">zClut</a>

      <ul className="permalinks">
        <li><a href="#home">Inicio</a></li>
        <li><a href="#about">Sobre mi</a></li>
        <li><a href="#experience">Experiencia</a></li>
        <li><a href="#portfolio">Proyectos</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/juan-daniel-padilla-491294221/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/zclut" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://www.instagram.com/juan_dp01" target="_blank" rel="noreferrer"><FaInstagram /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Todos los derechos reservados.</small>
      </div>
    </footer>
  )
}

export default Footer
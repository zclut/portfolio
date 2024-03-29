import React from 'react';
import CTA from './CTA';
import './header.css';
import ME from '../../assets/me.svg';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <section id="home">

        <div className="container header__container">
          <h5>Hola, soy</h5>
          <h1>Juan Padilla</h1>
          <h5 className="text-light">FullStack Developer</h5>

          <CTA />

          <HeaderSocials />

          <div className="me">
            <img src={ME} alt="Me" />
          </div>

          <a href="#portfolio" className="scroll__down">Scroll Down</a>
        </div>
      </section>
    </header>
  )
}

export default Header
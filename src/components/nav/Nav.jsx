import React, { useState } from 'react';
import './nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { BsFillBagDashFill } from 'react-icons/bs';

const Nav = () => {

  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a
        href="#home"
        onClick={() => setActiveNav('#')}
        className={activeNav === '#home' ? 'active' : ''}
      ><AiOutlineHome /></a>

      <a
        href="#about"
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      ><AiOutlineUser /></a>
      
      <a
        href="#experience"
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
      ><BiBook /></a>

      <a
        href="#portfolio"
        onClick={() => setActiveNav('#portfolio')}
        className={activeNav === '#portfolio' ? 'active' : ''}
      ><BsFillBagDashFill /></a>
    </nav>
  )
}

export default Nav
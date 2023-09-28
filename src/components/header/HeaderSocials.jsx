import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';


const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/juan-daniel-padilla-491294221/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
            <a href="https://github.com/zclut" target="_blank" rel="noreferrer"><FaGithub /></a>
            {/* <a href="https://www.instagram.com/juan_dp01" target="_blank" rel="noreferrer"><FaInstagram /></a> */}
        </div>
    )
}

export default HeaderSocials
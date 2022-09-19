import React from 'react';
import './about.css';
import ME from '../../assets/me.svg';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
    return (
        <section id="about">
            <h2>Sobre mi</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="Me" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className='about__icon' />
                            <h5>Experiencia</h5>
                            <small>10+ Meses de Experiencia</small>
                        </article>

                        <article className="about__card">
                            <VscFolderLibrary className='about__icon' />
                            <h5>Proyectos</h5>
                            <small>3+ Completados</small>
                        </article>
                    </div>

                    <p>
                        Soy Juan Daniel Padilla, un desarrollador web FullStack ubicado en Santa Cruz de Tenerife, España.
                        Me dedico a la creación de sitios web y aplicaciones web principalmente utilizando el stack
                        de MERN (MongoDB, Express, React, Node), actualmente aprendiendo NextJS y GraphQL.
                    </p>

                    <a href="https://www.linkedin.com/in/juan-daniel-padilla-491294221/" className='btn btn-primary' target="_blank" rel="noreferrer">Contáctame</a>
                </div>
            </div>
        </section>
    );
}

export default About;
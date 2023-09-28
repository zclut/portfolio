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
                            <small>+1 Año y 8 Meses de Experiencia</small>
                        </article>

                        <article className="about__card">
                            <VscFolderLibrary className='about__icon' />
                            <h5>Proyectos</h5>
                            <small>6+ Completados</small>
                        </article>
                    </div>

                    <p>
                        Soy un entusiasta de la programación ubicado en Santa Cruz de Tenerife. Me considero un
                        Desarrollador FullStack. A menudo, busco nuevas responsabilidades dentro de una amplia gama de áreas
                        laborales. Además, tengo un enfoque activo, dinámico y
                        un buen espíritu de equipo en el trabajo. Soy decidido y
                        decisivo. También aprovecho nuevas oportunidades para
                        aumentar mis conocimientos. Actualmente aprendiendo NextJS y NestJS
                    </p>

                    <a href="https://www.linkedin.com/in/juan-daniel-padilla-491294221/" className='btn btn-primary' target="_blank" rel="noreferrer">Contáctame</a>
                </div>
            </div>
        </section>
    );
}

export default About;
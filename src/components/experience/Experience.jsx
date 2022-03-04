import React from 'react';
import './experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';

const Experience = () => {
  return (
    <section id='experience'>
      <h5>¿Qué habilidades tengo?</h5>
      <h2>Mi Experiencia</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Desarrollo Frontend</h3>

          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Avanzado</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermedio</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Avanzado</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Intermedio</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>Typescript</h4>
                <small className="text-light">Intermedio</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>Angular</h4>
                <small className="text-light">Intermedio</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>React</h4>
                <small className="text-light">Intermedio</small>
              </div>
            </article>
          </div>

        </div>


        <div className="experience__backend">
          <h3>Desarrollo Backend</h3>

          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Avanzado</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Básico</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Intermedio</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>Spring Framework</h4>
                <small className="text-light">Intermedio</small>
              </div>
            </article>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience;
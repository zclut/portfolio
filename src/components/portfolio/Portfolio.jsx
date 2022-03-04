import React from 'react'
import './portfolio.css'
import { data } from './data'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Mi trabajo más reciente</h5>
      <h2>Proyectos</h2>

      <div className="container portfolio__container">
        {data.map( ({id, image, title, github, demo}) => (
          <article className="portfolio__item" key={id}>
            <div className="portfolio__item-image">
              <img src={image} alt="" />
            </div>

            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} className='btn btn-primary' target="_blank">Github</a>
            </div>
          </article>
        ))}
      </div>

    </section>
  )
}

export default Portfolio
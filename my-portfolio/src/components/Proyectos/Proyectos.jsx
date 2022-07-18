import React from 'react'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import './proyectos.css'

const Proyectos = () => {

  const datos = [
    {
      id: 1,
      image: IMG1,
      titulo: "Titulo",
      github: "https://github.com",
      demo: "https://dribbble.com/Alien_pixels"
    },
    {
      id: 2,
      image: IMG2,
      titulo: "Titulo",
      github: "https://github.com",
      demo: "https://dribbble.com/Alien_pixels"
    },
    {
      id: 3,
      image: IMG3,
      titulo: "Titulo",
      github: "https://github.com",
      demo: "https://dribbble.com/Alien_pixels"
    }
  ]

  return (
    <section id='proyectos'>
     
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {
          datos.map(({id, image, titulo, github, demo}) => {
            return(
              <article key={id} className='portfolio_items'>
                <div className="portfolio_item-image">
                  <img src={image} alt={titulo} />
                </div>
                  <h3>{titulo}</h3>
                <div className="portfolio items_cta">
                  <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                  <a href={demo} target='_blank' rel="noreferrer" className='btn'>Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Proyectos
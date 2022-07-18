import React from 'react'
import { useState } from 'react'
import './header.css'
//import { Link } from 'react-router-dom'


const Header = ({isCrolling}) => {
  
  const [active, setActive] = useState(false)

  const toTheTop = () => {
    window.scrollTo( { top:0, left:0, behavior:"smooth"} )
    setActive(!active)
  }
  return (
    <div className={`header ${isCrolling > 20 ? 'scrolling' : ""}`}>
        <div className="header_logo">
           <h1>D.A</h1>
         </div>
         <nav className={`${active ? 'navbar active' : 'navbar'}`}>
           <ul>
                <li >
                 <a href="#inicio" onClick={toTheTop}>Inicio</a>
                </li>
                <li>
                  <a  href="#sobremi" onClick={() => setActive(!active)}>Sobre mi</a>
                </li>
                <li >
                  <a href='#proyectos' onClick={() => setActive(!active)}>Proyectos</a>
                </li>
                <li >
                  <a href="#contacto" onClick={() => setActive(!active)}>Contacto</a>
                </li>
            </ul>
          </nav>
         <div className={`nav-toggle ${active ?  "open": null}`} onClick={() => setActive(!active)}>
        <div className="bar"></div>
      </div>
    </div>
  )
}

export default Header
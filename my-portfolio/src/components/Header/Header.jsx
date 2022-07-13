import React from 'react'
import { useState } from 'react'
import './header.css'
import { Link } from 'react-router-dom'


const Header = ({isCrolling}) => {
  
  const [active, setActive] = useState(false)

  return (
    <div className={`header ${isCrolling > 20 ? 'scrolling' : ""}`}>
        <div className="header_logo">
           <h1>D.A</h1>
         </div>
         <nav className={`${active ? 'navbar active' : 'navbar'}`}>
           <ul>
                <li className={`${isCrolling > 20 ? 'scrollingText' : ""}`}>
                 Inicio
                </li>
                <li className={`${isCrolling > 20 ? 'scrollingText' : ""}`}>
                  <Link to='/sobremi'>Sobre mi</Link>
                </li>
                <li className={`${isCrolling > 20 ? 'scrollingText' : ""}`}>
                  <Link to='/main'>Main</Link>
                </li>
                <li className={`${isCrolling > 20 ? 'scrollingText' : ""}`}>Contacto</li>
            </ul>
          </nav>
         <div className={`nav-toggle ${active ?  "open": null}`} onClick={() => setActive(!active)}>
        <div className="bar"></div>
      </div>
    </div>
  )
}

export default Header
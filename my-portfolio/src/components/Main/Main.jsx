import React from 'react'
import './main.css'
import facebook from './icons2/facebook.png'
import github from './icons2/github.png'
import linkedin from './icons2/linkedin.png'
import whatsapp from './icons2/whatsapp.png'
//import imgmain from './icons2/imgMain.png'

const Main = () => {
  return (
    <div className='main'>
        <div className="main_container">
          <div className="main_content">
        <div className="text">
              {/* <p>Hola</p> */}
              <h1>Daniel Aguilar</h1>
              <div className='full'>
              <p className='full2'></p>
              </div>
              <div className="icons">
                <a className='icon' href="https://www.facebook.com/profile.php?id=100010034970747"><img src={facebook} alt="red social" /></a>
                <a  className='icon'  href="https://www.linkedin.com/in/daniel-aguilar-006722217/"><img src={linkedin} alt="red social" /></a>
               <a  className='icon'  href="https://wa.me/543425473314"><img src={whatsapp} alt="red social" /></a> 
                <a  className='icon'  href="https://github.com/Dan1el-aguilar"><img src={github}  alt="red social" /></a>
              </div>
              <div className="buttons">
                <button>Descargar CV</button>
                <button>sobre mi</button>
              </div>
            </div>
          </div>
            <div className='main_img'>
               <img src=""alt="imagen personal" />
            </div>
        </div>
    </div>
  )
}

export default Main
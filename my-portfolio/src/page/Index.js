import React from 'react'

import About from '../components/about/About';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Skills from '../components/Skills/Skills';
import Proyectos from '../components/Proyectos/Proyectos';

const Index = () => {
  return (
    <div>
      <Header/>
      <Main/>
     <About/>
      <Skills/>
      <Proyectos/>
    </div>
  )
}

export default Index
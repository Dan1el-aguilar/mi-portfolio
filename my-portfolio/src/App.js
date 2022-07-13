
import './App.css';
import { useState, useEffect} from 'react'
import About from './components/about/About';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Skills from './components/Skills/Skills';
import Index from './page/Index';

function App() {
  
  const [scroll, setScroll] = useState(0)
  
  const handleScroll = () => {
    const position = window.pageYOffset
    setScroll(position) //cuando baje la pantalla se eleva el 0
 }



 useEffect(() => {
  window.addEventListener("scroll", handleScroll)
 },[scroll])


  return (
        <div className="App">
          <BrowserRouter>
          <Header isCrolling ={scroll}/>
          <Index/>
            <Routes>
              <Route path='/main' element={<Main/>}/>
              <Route path='/sobremi' element={ <About/>}/>
              <Route path='/skills' element={<Skills/>}/>
            </Routes>
            
          </BrowserRouter>
          
        </div>
  );
}

export default App;

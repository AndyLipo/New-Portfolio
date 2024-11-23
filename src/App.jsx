import { Route, Routes } from 'react-router-dom'
import  About  from './Pages/About/About'
import Home from './Pages/Home/Home'
import {Projects} from './Pages/Projects/Projects'
import './index.css'
import ProyectosCuerpo from './Components/Home/ProyectosCuerpo'
import Contacto from './Pages/Contact/Contacto'

function App() {

  return (
    <>
    <div>
        <Routes>
          <Route index element={<Home />} />
          <Route path="sobreMi" element={<About />}/>
          <Route path="inicio" element={<Home />}/>
          <Route path="projectos" element={<Projects />}/>
          <Route path="/" element={<ProyectosCuerpo />}/>
          <Route path="contacto" element={<Contacto />}/>
        </Routes>
    </div>
    </>
  )
}

export default App

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' 
import Home from  './Pages/Home'
import Empresa from  './Pages/Empresa'
import Contato from  './Pages/Contato'
import Projeto from  './Pages/Projeto'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer' 
import NovoProjeto from './Pages/NovoProjeto'



function App() {
  return (
    <Router>
     <Navbar/>
      <div>
      <Routes>

       <Route exact path="/" element={<Home />}></Route>
        <Route path="/empresa" element={<Empresa/>}></Route>
        <Route path="/Contato" element={<Contato/>}></Route>
        <Route path="/Projeto" element={<Projeto/>}></Route>
        <Route path="/NovoProjeto" element={<NovoProjeto/>}></Route>
      </Routes>
      </div>
      
      <Footer/>
    </Router>
  );
}

export default App
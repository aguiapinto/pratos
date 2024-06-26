import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import FuncaoPratos from './Páginas';
import FuncaoPratos_1 from './Páginas/Opcoes_pratos';
import Pratos_Anteriores from './Páginas/Pratos_Anteriores';
import './Estilos/estilos.css'
import Menu from "./Componentes/Menu";

function App() {
  return (
    <div className="Pratos">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <Router>
          <Menu />
          <Routes>
            <Route exact path='/' element={<FuncaoPratos/>}/>
            <Route exact path='/Opcoes_pratos' element={<FuncaoPratos_1/>}/>
            <Route exact path='/Pratos_Anteriores' element={<Pratos_Anteriores/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;

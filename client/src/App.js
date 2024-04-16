import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

//importaciones 
import Login from './screens/login/login.jsx'
import Navbar from './screens/narbar/narbar.jsx';
import Registro from './screens/registro/registro.jsx';
import Crud from './screens/crud/crud.jsx';
import InicioAdmin from './screens/inicio/InicioAdmin.jsx';
import Inicio from './screens/inicio/Inicio.jsx';

function App() {

  return (
<div className="">
      <Router>
        <Routes>
        <Route path="/" element={<Inicio />} />
          <Route path="/login" element={<Login />} />
          <Route path='/narbar' element={<Navbar/>}/>
          <Route path='/Registrate' element={<Registro/>}/>
          <Route path='/crud' element={<Crud/>}/>
          <Route path='/ver' element={<InicioAdmin/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;

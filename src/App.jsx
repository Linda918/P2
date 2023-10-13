import React, {useState} from "react"
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Imports principales
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Inicio from "./pages/Inicio/Inicio";
import Nosotros from "./pages/Nosotros/Nosotros";
import Contacto from "./pages/Contacto/Contacto";
import Detalles from "./pages/Detalles/Detalles";
import Error from "./pages/Error/Error";
import Categorias from "./pages/Categorias/Categorias";

const App = () => {
  const [hasError] = useState(true);

  return (
    <Router>
      <div className="App">
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<Inicio/>} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/detalles/:id" element={<Detalles />} />
          {hasError ? <Route path="*" element={<Error />} /> : null}
          {<Route path="/categorias/:categoriasId" element={<Categorias />} />}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
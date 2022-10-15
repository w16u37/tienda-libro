import './App.css';
import React from 'react';
import {NavBar} from "./components/NavBar/NavBar";
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import { ContactoPage } from './components/ContactoPage/ContactoPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <NavBar/>
          {/* <ItemListContainer title="listado" greeting="LISTADO DE LIBROS"/> */}
          <Routes>
            <Route path="/inicio" element={<ItemListContainer/>}/>
            <Route path="/contacto" element={<ContactoPage/>}/>
          </Routes>
          <footer>Derechos Reservados</footer>
        </div>
      </div>
    </BrowserRouter>    
  );
}

export default App;

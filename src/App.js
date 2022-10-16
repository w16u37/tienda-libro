import './App.css';
import React from 'react';
import {NavBar} from './components/NavBar/NavBar';
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import { ContactoPage } from './components/ContactoPage/ContactoPage';
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <NavBar/>          
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
            <Route path="/item/:id" element={<ItemListContainer/>}/>
            <Route path="/socios" element={<ItemListContainer/>}/>
            <Route path="/contacto" element={<ContactoPage/>}/>
          </Routes>          
        </div>
      </div>
    </BrowserRouter>    
  );
}

export default App;

import React, { useEffect, useState} from "react";
import { Routes, Route, Link } from "react-router-dom";
import InicioPag from "./components/InicioPag";
import PerfilPag from "./components/PerfilPag";
import Perfilantecedentes from "./components/Perfilantecedentes";
import Usuario from "./components/Usuario";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<InicioPag />}/>
      <Route path="/perfil" element={<PerfilPag />}/>
      <Route path="/perfil/antecedentes" element={<Perfilantecedentes />}/>
      <Route path="/usuario" element={<Usuario />}/>
    </Routes>
  )
}

export default App;

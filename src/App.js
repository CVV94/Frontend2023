import React, { useEffect, useSate} from "react";
import { Routes, Route, Link } from "react-router-dom";
import InicioPag from "./components/InicioPag";
import PerfilPag from "./components/PerfilPag";
import Perfilantecedentes from "./components/Perfilantecedentes";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<InicioPag />}/>
      <Route path="/perfil" element={<PerfilPag />}/>
      <Route path="/perfil/antecedentes" element={<Perfilantecedentes />}/>
    </Routes>
  )
}

export default App;

import React, { useEffect, useState} from "react";
import {Link} from "react-router-dom"
const PerfilPag = () => {
  //contado de likes
  const[contadorLikes,setContadorLikes]=useState(0)
  // const[nombre,setNombre] = useState("")
  // const[ActiveXObject,setActivo] = useState("")
  //como se lee un estado ? console.log(contadorLikes)
  //como se cambia el valor de un estado? setContadorLikes(12)
  const handleContador=()=>{
    setContadorLikes(contadorLikes+1)
  }
  return (
      <>
        <h1>Página de Inicio</h1>
        <p> Bienvenidos</p><br/>
      <div>
        <Link to="/">Ir a Inicio</Link>
      </div>
      <button type="button" onClick={handleContador}>Dar Like</button>
      <p>Conteo de likes:{contadorLikes}</p>
      </>
    
  )
}

export default PerfilPag;
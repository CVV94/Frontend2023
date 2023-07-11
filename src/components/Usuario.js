import React,{useEffect, useState} from "react";
const Usuario= ()=>{
    const[nameUser,setNameUser]= useState("")
    const[terminoContr,setTerminoContrato]= useState(false)
    const handleUser =(evento) =>{
        setNameUser(evento.target.value)
    }
    const handleTerminos =() =>{
        setTerminoContrato(!terminoContr)
    }
    return(
        <>
            <h1>Usuario</h1>
            <label>Indique un nombre de usuario</label><br/>
            <input type="text" name="usuario" placeholder="Por ejemplo : Santiago" onChange={handleUser}/>
            { nameUser == "nombreError" && 
                <p>Ya existe ese Usuario</p>

            }<br/>
            <input type="checkbox"  name="terminos" checked={terminoContr} onChange={handleTerminos}/>
            <label htmlFor="terminos">Acepto los terminos de contrato</label><br/>
            <button type="button">Guardar nombre de Usuario</button>
        
        </>

    )
}
export default Usuario
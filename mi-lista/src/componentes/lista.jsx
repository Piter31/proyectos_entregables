import React, { useState, useEffect } from "react";

const Lista = ()=> {
    // const personas = ["Leandro","Gaston","Luis","Jorge"];

    const[personas, setPersonas] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3001/lista')
        .then(resp => resp.json())
        .then(data => setPersonas(data))
        .catch(error => {
            console.log("no se puede obtener las personas", error)
        });
    }, []);

    return(
        <>
            <h1>Personas</h1>
            <ul>
                {personas.map((persona,index) => (
                    <li key={index}>{persona.nombre}</li>
                ))}
            </ul>
        </>
    )


}

export default Lista;
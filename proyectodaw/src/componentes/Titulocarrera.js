import React from 'react'
import '../componentes/estilos/Titulocarrera.css'

function Titulocarrera(props){

    return(
        <div id='titulo'>Alumnos de {props.carrera}</div>
    )

}

export default Titulocarrera
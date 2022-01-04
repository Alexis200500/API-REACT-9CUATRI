import React from 'react'
import Fichaalumno from './Fichaalumno'

function Listaalumnos(props){
    return(
       <div> 
        {props.detallealum.map((reporte) =>{
            return(
        <Fichaalumno
         nomalu= {reporte.nomalu}
         carrera= {reporte.carrera}
         escribe= "Escribe tu nombre"
         foto= {reporte.foto} 
         colorfondo= {reporte.colorfondo}
         tipomen="alert alert-danger"/>
         )})}
        </div>
          
    )
}

export default Listaalumnos
import React from 'react'
import Titulocarrera from '../componentes/Titulocarrera'
import Listaalumnos from '../componentes/Listaalumnos'

class Reportealumnos extends React.Component{

constructor(props){
    super(props)
        this.state={
            datos:[{
                "nomalu":"Alexis Morales",
        "foto":"fotos/4.jpg",
        "colorfondo":"green",
        "carrera":"Tic"
            },
        {
            "nomalu":"Erik Morales",
        "foto":"fotos/2.jpg",
        "colorfondo":"red",
        "carrera":"Mantenimineto"
        },
    {
        "nomalu":"Eduardo Morales",
        "foto":"fotos/3.jpg",
        "colorfondo":"blue",
        "carrera":"Quimica"
    }]
        }        
}

render(){
    return(
        <div>
            <div>
                <Titulocarrera carrera="Tics"/>
            </div>
            <div>
                <a href='Altaalumnos' className="btn btn-primary streched-link">Alta de alumnos</a>
            </div>
            <div>
                <Listaalumnos detallealum={this.state.datos}/>
            </div>
                
        </div>

    )}
}

export default Reportealumnos
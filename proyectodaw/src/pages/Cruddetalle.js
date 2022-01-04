import React from 'react'
import {Link} from 'react-router-dom'

class Cruddetalle extends React.Component{
    state={
        empleados:{}
    }

    componentDidMount(){
        fetch('http://127.0.0.1:8000/api/buscarempleadoporide/'+this.props.location.state.ide)
            .then(response=>response.json())
            .then(empleadosJson => this.setState({empleados:empleadosJson}))
    }

    render(){
        const {empleados}=this.state
        return(
            <div>
                <div>Detalle del empleadof</div> 
                <img src ={empleados.foto} alt='img' className="img-thumbnail" height="200" width="200"/>
                <br />

                Nombre: {empleados.nombre} {empleados.apellidos} <br />
                Genero: {empleados.sexoo==='F'?'Femenino':'Masculino'} <br />
                Salario: {empleados.salario} <br />
                Area trabajo: {empleados.areatrabajo} <br />
                <div>
                    <Link to ="/Crudempleados">
                        <button type="button" className="btn btn-secondary">
                            Volver
                        </button>
                    </Link>
                </div>
            </div>
                
        )
    }
}

export default Cruddetalle
import React from 'react'
import {Link} from 'react-router-dom'

class Crudelimina extends React.Component{
    state={
        empleados:[]
    }

    componentDidMount(){
        fetch('http://127.0.0.1:8000/api/buscarempleadoporide/'+this.props.location.state.ide)
            .then(response=>response.json())
            .then(empleadosJson => this.setState({empleados:empleadosJson}))

            fetch('http://127.0.0.1:8000/api/eliminarempleado/'+this.props.location.state.ide,
            {method:'delete'})
    } 
    render(){
        return(
            <div>
            <div>Elimina</div> <br />
            <div className="alert alert-success">
                <strong>Sucess !!</strong> El empleado
                {this.state.empleados.nombre} {this.state.empleados.apellidos}<br />
                Con clave del empleado {this.state.empleados.ide} ha sido <br />
                eliminado correctamente
            </div>
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

export default Crudelimina
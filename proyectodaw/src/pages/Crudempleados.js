import React from 'react'
import {Link} from 'react-router-dom'

class Crudempleados extends React.Component{

    state={
        empleados:[]
    }

    componentDidMount(){
        fetch('http://127.0.0.1:8000/api/cargaempleados')
            .then(response => response.json())
            .then(empleadosJson => this.setState({empleados:empleadosJson}))
    }

    render(){
        const{empleados}= this.state
        return(
            <div>
                <h1>Gestión de empleados</h1>
                <br />
                <Link to ={{pathname:'/Crudalta'}}>
                    <button type="button" className="btn btn-success">
                        Crear nuevo empleado
                    </button>
                </Link>
                <br />
                <table className="table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Foto</th>
                            <th scope="col">Clave</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Edad</th>
                            <th scope="col">Sexo</th>
                            <th scope="col">Area</th>
                            <th scope="col">Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {empleados.map((empleado,i)=>
                        <tr key={i}>
                            <th scope="row">{i+1}</th>
                            <td> <img src={empleado.foto} className="rounded" height='100'
                            width='100' alt="Foto empleado"/> </td>
                            <td>{empleado.ide}</td>
                            <td>{empleado.nombre} {empleado.apellidos}</td>
                            <td>{empleado.edad}</td>
                            <td>{empleado.sexo==="F"?'Femenino':'Masculino'}</td>
                            <td>{empleado.areatrabajo}</td>
                            <td>
                                <Link to ={{pathname:'/Cruddetalle', state:{ide:empleado.ide}}}>
                                    <button type="button" className="btn btn-primary">
                                        Detalle
                                    </button>
                                </Link>

                                <Link to ={{pathname:'/Crudelimina', state:{ide:empleado.ide}}}>
                                    <button type="button" className="btn btn-danger">
                                        Elimina
                                    </button>
                                </Link>
                                <Link to ={{pathname:'/Crudactualiza', state:{ide:empleado.ide}}}>
                                    <button type="button" className="btn btn-dark">
                                        Modifica
                                    </button>
                                </Link>
                            </td>
                        </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Crudempleados 
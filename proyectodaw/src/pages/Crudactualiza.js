import React from 'react'
import { Link } from 'react-router-dom'

class Crudactualiza extends React.Component{
    state={
        empleados:{
            ide:'',
            ida:'',
            apellidos:'',
            sexo:'',
            salario:'',
            foto:'',
            nombre:'',
            edad:'',
        },
        isFetch:true,
        areas:[],
        resultado:'',
    }

    handleChange = async e=>{
        e.persist();
        await this.setState({
            empleados:{
                ...this.state.empleados,
                [e.target.name]:e.target.value
            }
        });
    }

    async componentDidMount(){
        fetch('http://127.0.0.1:8000/api/buscarempleadoporide/'+this.props.location.state.ide)
            .then(response=>response.json())
            .then(empleadosJson => this.setState({empleados:empleadosJson, isFetch:false}))

        fetch('http://127.0.0.1:8000/api/cargaareas')
            .then(response=>response.json())
            .then(areasJson => this.setState({areas:areasJson, isFetch:false}))
    }

    subForm=(e)=>{
        e.preventDefault();
        let data={
          ide:this.state.empleados.ide,
          nombre:this.state.empleados.nombre,
          edad:this.state.empleados.edad,
          apellidos:this.state.empleados.apellidos,
          sexo:this.state.empleados.sexo,
          salario:this.state.empleados.salario,
          foto:this.state.empleados.foto,
          ida:this.state.empleados.ida,
        };
        fetch('http://127.0.0.1:8000/api/modificaempleados',{
          method:'PUT',
          headers:{
            'Accept': 'application/json',
            'Content-Type':'application/json',
          },
          mode:"cors",
          body:JSON.stringify(data)
        })
        .then(response=>response.json())
        .then(response=>this.setState({resultado:"Empleado modificado exitosamente"}))
      }

    render(){
        const{isFetch,empleados,areas}=this.state
        if(isFetch){
            return("No se pudo conectar a la API")
        }
        return(
            <center>
                <h1>Modificar empleados</h1> 
                <div>
                <br />
                <form onSubmit={this.subForm}>
                    Clave: <input type='text' name='ide' value={empleados.ide} onChange={this.handleChange} readonly='readonly'/><br />
                    Nombre: <input type='text' name='nombre' value={empleados.nombre} onChange={this.handleChange}/><br />
                    Apellidos: <input type='text' name='apellidos' value={empleados.apellidos} onChange={this.handleChange}/><br />
                    Sexo:   <input type='radio' name='sexo' value='F'
                                defaultChecked={this.state.empleados.sexo==='F'
                                ?'checked'
                                :''} onClick={this.handleChange}/>Femenino
                            <input type='radio' name='sexo' value='M' 
                            defaultChecked={this.state.empleados.sexo==='M'
                            ?'checked'
                            :''} onClick={this.handleChange}/>Masculino <br />
                    Edad: <input type='text' name='edad' value={empleados.edad} onChange={this.handleChange}/><br />
                    Area: <select name='ida' onChange={this.handleChange}>
                        <option value={empleados.ida}>{empleados.areatrabajo}</option>
                        
                        {areas.map((areas,i) =>
                            <option value={areas.ida} key={i}>{areas.nombre}</option>
                        )}
                        
                        </select> <br />
                    Salario:<input type='text' name='salario' value={empleados.salario} onChange={this.handleChange}/><br />
                    <img src={empleados.foto} width='100' height='100' alt='img' /><br />
                    Foto:<input type='text' name='foto' value={empleados.foto} onChange={this.handleChange}/><br />
                    
                    <br />
                    <input type='submit' className="btn btn-info" value='Guardar' />
                </form>
                <div>
                    {this.state.resultado 
                        ? <div className="alert alert-success">{this.state.resultado}</div>
                        : <div></div>
                    }
                </div>
                <div>
                    <Link to ="/Crudempleados">
                        <button type="button" className="btn btn-secondary">
                            Volver
                        </button>
                    </Link>
                </div>
                </div>
            </center>
        )
    }

}

export default Crudactualiza
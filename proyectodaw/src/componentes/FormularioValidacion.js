import React, {Component} from 'react'
import './estilos/formuvalida.css'

const cpRegex = RegExp(/^[0-9]{5}$/);
const cadenasnombrecomRegex = RegExp(/^[A-Za-z ]+$/);
const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

const formValid=({errores,...rest}) =>{
    let valid = true;
    Object.values(errores).forEach(val=>{val.length>0 && (valid=false);
    })

    Object.values(rest).forEach(val=>{val===null && (valid=false);
    })

    return valid;
}

class FormularioValidacion extends Component{

    
    state={
        nombre:null,
        ciudad:null,
        cp:null,
        apellido:null,
        correo:null,
        statusform:null,
            errores:{
                nombre:"",
                ciudad:"",
                cp:"",
                apellido:"",
                correo:""
            }
    }

    handleChange=e=>{
        const{name,value} = e.target
        let errores={...this.state.errores}
        switch(name){
            case "nombre":
                errores.nombre = cadenasnombrecomRegex.test(value)
                                ? ""
                                : "Solo se aceptan letras y espacios";
            break;
            case "apellido":
                errores.apellido = cadenasnombrecomRegex.test(value)
                                ? ""
                                : "Solo se aceptan letras y espacios";
            break;
            case "ciudad":
                errores.ciudad = value===""
                                ? "Debe seleccionar un valor"
                                :"";
            break;
            case "cp":
                errores.cp = cpRegex.test(value)
                                ? ""
                                :"Se requieren 5 digitos";
            break;
            case "correo":
                errores.correo = emailRegex.test(value)
                                ? ""
                                : "No es un correo valido";
            break;
            default:
            break;
        }
        this.setState({errores,[name]:value})
    }
    
    handleSubmit=e=>{
        e.preventDefault();
        if(formValid(this.state))
        {
            console.log(`
                Listo para la aplicación 
                Nombre: ${this.state.nombre}
                Apellido: ${this.state.apellido}
                Correo: ${this.state.correo}
                `)
            this.setState({statusform:"Formulario Valido"})
        }
        else{
            this.setState({statusform:"Favor de corregir la información del formulario"})
        }
    }

    render(){
        const{errores}=this.state
        return(
            <div>
                <h1>ALTA DE EMPLEADO</h1>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            Nombre:
                            <input type='text' name='nombre' 
                            className={errores.nombre.length>0 ?"error":null}
                            onKeyUp={this.handleChange}/>
                            {errores.nombre.length>0 &&(
                                <span className="errorMessage">{errores.nombre}</span>
                            )}
                        </div>
                        <div>
                            Apellido:
                            <input type='text' name='apellido' 
                            className={errores.apellido.length>0 ?"error":null}
                            onKeyUp={this.handleChange}/>
                            {errores.apellido.length>0 &&(
                                <span className="errorMessage">{errores.apellido}</span>
                            )}
                        </div>
                        <div>
                            Ciudad:
                                <select name='ciudad' onClick={this.handleChange}>
                                    <option value=''>Seleccion una ciudad</option>
                                    <option value='1'>Toluca</option>
                                    <option value='2'>Metepec</option>
                                </select>
                                {errores.ciudad.length>0 &&(
                                <span className="errorMessage">{errores.ciudad}</span>
                                )}
                        </div>
                        <div>
                            CP:
                            <input type='text' name='cp' 
                            className={errores.cp.length>0 ?"error":null}
                            onKeyUp={this.handleChange}/>
                            {errores.cp.length>0 &&(
                                <span className="errorMessage">{errores.cp}</span>
                            )}
                        </div>
                        <div>
                            Correo electronico:
                            <input type='text' name='correo' 
                            className={errores.correo.length>0 ?"error":null}
                            onKeyUp={this.handleChange}/>
                            {errores.correo.length>0 &&(
                                <span className="errorMessage">{errores.correo}</span>
                            )}
                        </div>
                        <div>
                            <button type='submit'>Crear empleado</button>
                        </div>
                        <div>
                            <p>{this.state.statusform}</p>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default FormularioValidacion
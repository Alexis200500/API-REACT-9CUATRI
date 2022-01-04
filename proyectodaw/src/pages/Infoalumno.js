import React from 'react'
import Alumnoinfo from '../componentes/Alumnoinfo.js'
import Fichaalumno from '../componentes/Fichaalumno.js'

class Infoalumno extends React.Component{
  state={
    form:{
    nomalu:'',
    carrera:'',
    escribe:'Escribe tu nombre',
    colorfondo:'',
    foto:'',
    tipomen:'btn btn-primary streched-link'}
  }
  recibevalores=e=>{
      this.setState({
        form:{
          ...this.state.form,
          [e.target.name]:e.target.value
        }
      })
  }
    render(){
        return(
            <div className="row">
              <div className="col-sm">
                <Fichaalumno {...this.state.form}/>
              </div>
              <div className="col-sm">
                <Alumnoinfo onChange={this.recibevalores}
                form={this.state.form}/>
              </div>
            </div>
        )
    }
}

export default Infoalumno

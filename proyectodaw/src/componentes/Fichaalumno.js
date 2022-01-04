import React from 'react'

import './estilos/Fichaalumno.css'


class Fichaalumno extends React.Component{
    render(){
        const{nomalu,carrera,escribe,colorfondo,foto,tipomen} = this.props
        return (<div className="ficha">
                    <div className="bordeazul">
                        <div className="divfoto">
                            <img src={foto} className="fotito" alt="hola" />
                        </div>
                        <div className="infoalu" style={{
                            backgroundColor: `${colorfondo}`
                        }}>
                            <div className="detalle">
                                Nombre:{nomalu}
                            </div>
                        </div>
                            <div className="alert alert-primary" role="alert">
                                Hola cuervos de carrera {carrera}
                                <input type="text" className="form-control" placeholder={escribe} />
                            </div>
                            <div >
                                <button type="button" className={tipomen}> Ver detalle </button>
                            </div>
                    </div> 
                </div>)
    }
}

export default Fichaalumno
import React from 'react'
import ReactDOM from 'react-dom'
import Aplicacion from './componentes/Aplicacion'
import 'bootstrap/dist/css/bootstrap.css'


const elemento = (<div> <Aplicacion /> </div>)

const container = document.getElementById('root')

ReactDOM.render(elemento,container)
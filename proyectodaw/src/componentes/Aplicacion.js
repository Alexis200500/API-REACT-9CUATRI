import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Altaalumno from '../pages/Altaalumno'
import Noexiste from '../pages/Noexiste'
import Reportealumnos from '../pages/Reportealumnos'
import Formuvalida from '../pages/Formuvalida'
import Infoalumno from '../pages/Infoalumno'
import Crudempleados from '../pages/Crudempleados'
import Cruddetalle from '../pages/Cruddetalle'
import Crudelimina from '../pages/Crudelimina'
import Crudalta from '../pages/Crudalta'
import Crudactualiza from '../pages/Crudactualiza'


function Aplicacion(){
    return(
        <BrowserRouter>
            <Switch>
            <Route exact path="/Reportealumnos" component={Reportealumnos} />
            <Route exact path="/Altaalumnos" component={Altaalumno} />
            <Route exact path="/Infoalumno" component={Infoalumno} />
            <Route exact path="/Formuvalida" component={Formuvalida} />
            <Route exact path="/Crudempleados" component={Crudempleados} />
            <Route exact path="/Cruddetalle" component={Cruddetalle} />
            <Route exact path="/Crudelimina" component={Crudelimina} />
            <Route exact path="/Crudalta" component={Crudalta} />
            <Route exact path="/Crudactualiza" component={Crudactualiza} />
            <Route component={Noexiste} />
            </Switch>
        </BrowserRouter>
    )
}

export default Aplicacion
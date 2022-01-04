import React from 'react'

class Altaalumno extends React.Component{
    constructor(){
        super();
        this.state={
            numero1:0,
            numero2:0,
            total:0,
            tipo:'',
            status:'',
            genero:'',
            area1:false,
            area2:false
        }
        this.valoresformularios=this.valoresformularios.bind(this);
        this.calculatotal=this.calculatotal.bind(this);

    }

valoresformularios=({name,value,checked,type})=>{
    this.setState(()=>{
        return{[name]:type==="checkbox" ? checked:value};
    });
};



    calculatotal(e){

        if(this.state.tipo==="A")
        {
            this.setState({total:parseInt(this.state.numero1) * parseInt(this.state.numero2) +100 })
        }
        else
        {
            this.setState({total:parseInt(this.state.numero1) * parseInt(this.state.numero2) +400 })
        }

        switch(this.state.numero1){
            case '7':
            return this.setState({status:'Buen empleado'})
            break;
            default:
                return this.setState({status:'Mal empleado'})
        }
    }
    render(){
        return(
            <div>
                <pre>{JSON.stringify(this.state,null,2)}</pre>
                    <div>
                        Teclea los dias trabajados 
                        <input type="text" name="numero1" placeholder="Dias trabajados" 
                        onKeyUp = {event=>this.valoresformularios(event.target)} />                
                    </div>

                    <div>
                        Salario diario
                        <input type="text" name="numero2" placeholder="Salario diario"
                        onKeyUp = {event=>this.valoresformularios(event.target)} />                
                    </div>

                    <div>
                        Tipo <select name='tipo' onChange = {event=>this.valoresformularios(event.target)}>
                                <option value={'A'}>A</option>
                                <option value={'B'}>B</option>
                                <option value={'C'}>C</option>
                            </select>                        
                    </div>
                    
                    <div>
                        Genero <input type='radio' name='genero' value={"m"} 
                                onChange = {event=>this.valoresformularios(event.target)} /> Masculino
                                <input type='radio' name='genero' value={"f"} 
                                onChange = {event=>this.valoresformularios(event.target)} /> Femenino
                    </div>

                    <div>
                        Area de trabajo <input type='checkbox' name='area1' value='torreon' 
                                        onChange = {event=>this.valoresformularios(event.target)}  /> Torreon
                                        <input type='checkbox' name='area2' value='toluca' 
                                        onChange = {event=>this.valoresformularios(event.target)}  /> Toluca 
                    </div>

                    
                    <input type="submit" value='calcula' className="btn btn-primary stretched-link" onClick={this.calculatotal} />
                    

                    <div>
                        Total <input type="text" name="total" value={this.state.total} />
                    </div>

                    <div>
                        Tipo empleado<input type='text' name='tipoemp' value={this.state.status} disabled='disable' />
                    </div>
                
            </div>
        )
    }
}

export default Altaalumno
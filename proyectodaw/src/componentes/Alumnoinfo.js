import React from 'react'

class Alumnoinfo extends React.Component{

    state={}

    controlasubmit=e=>{
        e.preventDefault()
        console.log(this.state)
    }

    recibevalores=e=>{
        this.setState({[e.target.name]:e.target.value
        });
    }

    calculatotal=e=>
    {
        e.preventDefault()   
        const{form}=this.props
        if(form.carrera==="TIC")
        {
            this.setState({total:parseInt(this.state.num1) * parseInt(this.state.num2) +100 })
        }
        else
        {
            this.setState({total:parseInt(this.state.num1) * parseInt(this.state.num2) +400 })
        }
    }

    render(){
        const{onChange,form}=this.props
            return(
                <div>
                    <form onSubmit={this.recibevalores} >
                        <div>
                            Foto <input type='text' name='foto' onKeyUp={onChange}/>
                        </div>
                        <div>
                            Nombre <input type='text' name='nomalu' onKeyUp={onChange}/>
                        </div>
                        <div>
                            Carrera <select name='carrera' onChange={onChange}>
                                <option value={'TIC'}>TIC</option>
                                <option value={'Mantenimiento'}>Mantenimiento</option>
                                <option value={'Paramedico'}>Paramedico</option>
                            </select>
                        </div>
                        <div>
                            Color fondo <input type='radio' name='colorfondo' value={'red'} onChange={onChange}/>Rojo
                                <input type='radio' name='colorfondo' value={'green'} onChange={onChange}/>Verde
                                <input type='radio' name='colorfondo' value={'blue'}  onChange={onChange}/>Azul
                        </div>
                        <input type='submit' value='Transfiere' onClick={this.controlasubmit} />
                        <div>
                            Carrera <input type='text' value={form.carrera}/>
                        </div>
                        <div>
                            Numero 1 <input type='text' name='num1' onKeyUp={this.recibevalores}/>
                        </div>
                        <div>
                            Numero 2 <input type='text' name='num2' onKeyUp={this.recibevalores}/>
                        </div>
                        <div>
                            <button name="suma" onClick={this.calculatotal}>suma</button>
                        </div>
                        <div>
                            Total <input type='text' name='total' value={this.state.total}/>
                        </div>
                    </form>
                </div>
        )
    }
}

export default Alumnoinfo

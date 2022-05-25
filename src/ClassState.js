import React from 'react';

const SECURITY_CODE = 'paradigma';

class ClassState extends React.Component{

    constructor(props){
        //Se llama el constructor de extends
        super(props)
        this.state = {
            error : false,
            inputCode : '',
            loading : false
        }
    }

    componentDidUpdate(){
        if(this.state.loading){                         
            setTimeout(()=>{
                if(SECURITY_CODE !== this.state.inputCode){
                    this.setState({error: true})                
                }
                this.setState({loading: !this.state.loading })                
            }, 2000)
        }
    }
    render () {
        return (
            <div>
                <h2>
                    Eliminar {this.props.name}
                </h2>
                <p>Por favor escribe el número de seguridad</p>

                {(this.state.error  && !this.state.loading)&& (
                <p>Error: El código de seguridad es incorrecto</p>
                )}
                {this.state.loading && (
                <p>Cargando ... </p>
                )}
                <input 
                onChange={(event)=>{
                    this.setState({inputCode: event.target.value});
                }}
                placeholder='Código de seguridad'/>
                <button
                    onClick={()=>{
                       // this.setState({error: !this.state.error})
                        this.setState({error: false})  
                        this.setState({loading: !this.state.loading})
                    }}
                >Comprobar</button>
            </div>
        )
    }
}

export {ClassState}
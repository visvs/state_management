import React from 'react';

class ClassState extends React.Component{

    constructor(props){
        //Se llama el constructor de extends
        super(props)
        this.state = {
            error : false
        }
    }
    render () {
        
        return (
            <div>
                <h2>
                    Eliminar {this.props.name}
                </h2>
                <p>Por favor escribe el número de seguridad</p>

                {this.state.error && (
                <p>Error: El código de seguridad es incorrecto</p>
            )}
                <input placeholder='Código de seguridad'/>
                <button>Comprobar</button>
            </div>
        )
    }
}

export {ClassState}
import React from 'react';
//Array vacio, unicamente la primera vez que se renderize

//securityCode
const SECURITY_CODE = 'paradigma';
function UseState({name}){  
    //estados independientes
  /*   const [error, setError] = React.useState(false);
    const [inputCode, setCode] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [delected, setDelected] = React.useState(false);
    const [confirm, setConfirm] = React.useState(false); */
    const [state, setState] = React.useState({
        error : false,
        inputCode: '',
        loading:false,
        deleted :false,
        confirm :false,
    });
    
    const onConfirm = ()=>{
        setState({
            ...state,
            confirm: true,
            loading: false                
        })
    }
    const onError = ()=>{
        setState({
            ...state,
            error: true,
            loading: false                
        })
    }
    React.useEffect(()=>{
        if(state.loading){
            //setError(false)
            setState({
                ...state,
                error: false
            })
            setTimeout(()=>{
                if(state.inputCode !== SECURITY_CODE){
                    //setError(true)
                    onError();
                    console.log('error')
                }else{
                    onConfirm();
                    console.log('correcto')        
                }
                //setLoading(false);                                                
            }, 2000)
        }
    }, [state.loading])

    if(!state.deleted && !state.confirm){
        return (
            <div>
                <h2>
                    Eliminar {name}
                </h2>
                <p>Por favor escribe el número de seguridad</p>
                {(state.error && !state.loading) && (
                    <p>Error: El código de seguridad es incorrecto</p>
                )}
                {state.loading && (
                    <p>Cargando... </p>
                )}
                <input 
                placeholder='Código de seguridad'
                value={state.inputCode}
                onChange = {(event)=>{   
                    //setError(false)             
                   // setCode(event.target.value);
                   setState({
                    ...state,
                    inputCode: event.target.value
                })
                }}
                />
                <button onClick={()=>{
                    //setError(!error)
                    setState({
                        ...state,
                        loading: !state.loading
                    })
                    //setLoading(!loading)
                }}>Comprobar</button>
            </div>
        )
    }
    else if(state.confirm && !state.deleted){
        return (
            <React.Fragment>
                <p>
                    ¿Está seguro que deseas eliminar?                    
                </p>
                <button
                  onClick={()=>{
                    setState({
                        ...state,
                        confirm: false,
                        inputCode: ''

                    })
                }}
                >Cancelar</button>
                <button
               
                onClick={()=>{
                    setState({
                        ...state,
                        deleted: true
                    })
                }}
                >Eliminar</button>
            </React.Fragment>
        )
    }
    else{
        return (
            <React.Fragment>
                <p>
                    Estado eliminado
                </p>
                <button
                  onClick={()=>{
                    setState({
                        ...state,
                        confirm: false,
                        deleted: false,
                        inputCode: ''
                    })
                }}
                >Recuperar estado</button>
            </React.Fragment>
        )
    }
}

export {UseState}
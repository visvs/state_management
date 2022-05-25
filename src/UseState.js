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
        delected :false,
        confirm :false,
    });
    
    React.useEffect(()=>{
        console.log('inicio efecto')        
        if(state.loading){
            //setError(false)
            setState({
                ...state,
                error: false
            })
            setTimeout(()=>{
                if(state.inputCode !== SECURITY_CODE){
                    //setError(true)
                    setState({
                        ...state,
                        error: true
                    })
                }
                //setLoading(false); 
                setState({
                    ...state,
                    loading: false
                })                                   
            }, 2000)
        }
        console.log('fin efecto')
    }, [state.loading])

    if(!state.delected && !state.confirm){
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
    }else if(!state.delected && state.confirm){

    }else{
        
    }
}

export {UseState}
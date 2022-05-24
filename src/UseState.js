import React from 'react';
//Array vacio, unicamente la primera vez que se renderize

function UseState({name}){
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    
    React.useEffect(()=>{
        console.log('inicio efecto')
        if(loading){
            setTimeout(()=>{
                setLoading(false);
            }, 2000)
        }
        console.log('fin efecto')
    }, [loading])

    return (
        <div>
            <h2>
                Eliminar {name}
            </h2>
            <p>Por favor escribe el número de seguridad</p>
            {error && (
                <p>Error: El código de seguridad es incorrecto</p>
            )}
            {loading && (
                <p>Cargando... </p>
            )}
            <input placeholder='Código de seguridad'/>
            <button onClick={()=>{
                //setError(!error)
                setLoading(!loading)
            }}>Comprobar</button>
        </div>
    )
}

export {UseState}
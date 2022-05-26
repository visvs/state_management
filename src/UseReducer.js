/* import React, { useEffect, useReducer, Fragment } from 'react'

const SECURITY_CODE = 'paradigma'
const initialState = {
	value: '',
	loading: false,
	error: false,
	deleted: false,
	confirmed: false,
}

const reducer = (state, action) => {
	switch (action.type) {
		case 'Error':
			return {
				...state,
				error: true,
				loading: false,
			}
		case 'Confirm':
			return {
				...state,
				loading: false,
				error: false,
				confirmed: true,
			}
		case 'Write':
			return {
				...state,
				value: action.payload,
			}
		case 'Check':
			return {
				...state,
				loading: true,
				error: false,
			}
		case 'Delete':
			return {
				...state,
				deleted: true,
			}
		case 'Reset':
			return {
				...state,
				value: '',
				confirmed: false,
				deleted: false,
			}
		default:
			return {
				...state,
			}
	}
}

export default function UseReducer() {
	const [ state, dispatch ] = useReducer(reducer, initialState)

	useEffect(
		() => {
			if (state.loading) {
				setTimeout(() => {
					if (state.value === SECURITY_CODE) {
						dispatch({ type: 'Confirm' })
					} else {
						dispatch({ type: 'Error' })
					}
				}, 1000)
			}
		},
		[ state.loading ]
	)

	if (!state.deleted && !state.confirmed) {
		return (
			<div>
				<h2>Eliminar UseReducer</h2>
				<p>Por favor, escriba el código de seguridad.</p>
				{state.loading ? 'Cargando...' : state.error ? 'Error :(' : null}
				<br />
				<input
					type='text'
					placeholder='código de seguridad'
					value={state.value}
					onChange={ev => dispatch({ type: 'Write', payload: ev.target.value })}
				/>
				<button
					onClick={() => {
						dispatch({ type: 'Check' })
					}}
				>
					Comprobar
				</button>
			</div>
		)
	} else if (!state.deleted && state.confirmed) {
		return (
			<Fragment>
				<p>Pedimos confirmación. ¿Tas seguro?</p>
				<button onClick={() => dispatch({ type: 'Delete' })}>Si, eliminar</button>
				<button onClick={() => dispatch({ type: 'Reset' })}>No, me arrepentí</button>
			</Fragment>
		)
	} else {
		return (
			<Fragment>
				<p>Eliminado con éxito</p>
				<button onClick={() => dispatch({ type: 'Reset' })}>Regresar</button>
			</Fragment>
		)
	}
} */
import React from "react";

const SECURITY_CODE = 'paradigma';

function UseReducer({ name }) {
    const [state, dispatch ] = React.useReducer(reducer, initialState);
    
    React.useEffect(()=>{
        console.log('Empezando el efecto');
        if(state.loading){
            setTimeout(()=>{
                console.log("Haciendo la validación xd");
                if(state.value === SECURITY_CODE){
                    dispatch({
                        type: 'CONFIRM',
                    })
                }else{
                    dispatch({
                        type: 'ERROR'
                    });
                }
                console.log("Terminando la validación");
            },1500);
        }
        console.log('Terminando el efecto');
    },[state.loading]);


    if(!state.deleted && !state.confirmed){
        return (
            <div>
                <h2>Eliminar {name}</h2>
                <p>Por favor, escriba el código de seguridad.</p>
    
                {(state.error && !state.loading ) && (
                    <p>El código es es incorrecto</p>
                )}
    
                {state.loading && (
                    <p>Cargando ...</p>
                )}
    
                <input 
                    type='text' 
                    placeholder='código de seguridad'
                    value={state.value}
                    onChange={(event)=>{
                        dispatch({
                            type:'WRITE',
                            payload: event.target.value,
                        })
                        // onWrite(event);
                    }
                    }
                />
                <button
                    onClick={()=>{
                        dispatch({
                            type: 'CHECK'
                        });
                    }}
                >Comprobar</button>
            </div>
        );
    }else if(state.confirmed && !state.deleted){
        return(
            <React.Fragment>
                <p>¿Seguro que quieres eliminar UseState?</p>
                <button
                    onClick={()=>{
                        dispatch({
                            type: 'DELETE'
                        });
                    }}
                >Si, eliminar</button>
                <button
                    onClick={()=>{
                        dispatch({
                            type:'RESET'
                        });
                    }}
                >No, volver</button>
            </React.Fragment>
        )
    } else {
        return (
            <React.Fragment>
                <p>Eliminado con exito</p>
                <button
                    onClick={()=>{
                        dispatch({
                            type:'RESET'
                        });
                    }}
                >Recuperar UseState</button>
            </React.Fragment>
        )
    }
}

const initialState = {
    value:'',
    error:false,
    loading:false,
    deleted: false,
    confirmed: false,
}

const reducerObject = (state, payload) => ({
    'CONFIRM':{ 
        ...state,
        error: false, 
        loading: false ,
        confirmed: true,
    },
    'ERROR': { 
        ...state,
        error: true, 
        loading: false 
    },
    'WRITE':{ 
        ...state,
        value: payload,
    },
    'CHECK':{ 
        ...state,
        loading: true 
    },
    'DELETE':{
        ...state,
        deleted: true,
    },
    'RESET':{
        ...state,
        confirmed: false,
        deleted: false,
        value:'',
    }
})

 const reducer = (state, action) => {
    return (reducerObject(state, action.payload)[action.type] || state);
};

export { UseReducer }
 
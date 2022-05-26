const initialState = {
    error : false,
    inputCode: '',
    loading:false,
    deleted :false,
    confirm :false,
}


//Forma 1 de crear un reducer
const reducerIf = (state, action) =>{
    if(action.type === 'ERROR'){
        return {
            ...state,
            error : true,
            loading: false
        }
    }
    else if(action.type === 'CHECK'){
        return {
            ...state,
            loading: true
        }
    }
}
//Forma 2 de crear un reducer
const reducerSwitch = (state, action) =>{
    switch(action.type){
        case 'ERROR' : 
        return {
            ...state,
            error : true,
            loading: false
        }
        case 'CHECK':
            return {
                ...state,
                loading: true
            }
        default: 
            return {
                ...state
            }
    }
}
//Forma 3
const reducerObject = (state)=>({
    'ERROR' : {
        ...state,
        error : true,
        loading: false
    },
    'CHECK': {
        ...state,
        loading: true
    }
})
const reducerMain = (state, action) =>{
    if(reducerObject(state)[action.type]){
        return reducerObject(state)[action.type];
    }
    else{
        return state
    }
}
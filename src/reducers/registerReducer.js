const initialState={
    payload:null
}

const registerReducer =(state=initialState,action)=>{
    console.log("params",action.payload);

    switch(action.type){
        case 'REGISTER_USER_PROCESS_SUCCESS'    :
        state.payload=action.payload;
        return {...state}
        default:
        return{...state}
    }
    
}


export default registerReducer
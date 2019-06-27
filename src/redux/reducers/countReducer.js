const INITIAL_STATE = {count : 10}

var CountReducer= (state=INITIAL_STATE,action)=>{
    // if(action.type === 'PLUS'){
    //     return{...state, count : state.count + 1}
    // }else if(action.type === 'MIN'){
    //     return{...state, count : state.count -1 }
    // }else{
    //     return state
    // }
        
    switch(action.type){
        case 'PLUS' :
            return {...state, count : state.count+1}
        case 'MIN':
            return {...state, count: state.count-1}
        default: 
            return state
    }
    
}


export default CountReducer
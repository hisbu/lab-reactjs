const INITAL_STATE = {count : 0, charCount : 0}

export default (state = INITAL_STATE, action) =>{
    switch (action.type){
        case 'COUNT_WORD':
            return {...state, count : action.payload}
        case 'COUNT_CHAR':
            return {...state, charCount : action.payload}
        default:
            return state
    }
}
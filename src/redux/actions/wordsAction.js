export const CountWord = (length)=>{
    return {
        type : 'COUNT_WORD',
        payload : length
    }
}

export const CountChar = (length)=>{
    return {
        type :'COUNT_CHAR',
        payload: length
    }
}
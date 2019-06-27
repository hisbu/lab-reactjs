import CountReducer from './countReducer'
import WordReducer from './wordsReducer'
import { combineReducers } from 'redux'

export default combineReducers({
    angka : CountReducer,
    word : WordReducer,
    char : WordReducer
})
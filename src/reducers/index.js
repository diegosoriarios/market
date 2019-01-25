import { combineReducers } from 'redux';
import { 
    itemString, 
    quantidadeString, 
    addToItems, 
    userIsLogged,
    usernameValue,
    passwordValue,
    dispatchError,
    isLoading
} from './handlers'

export default combineReducers({
    itemString,
    quantidadeString,
    addToItems,
    userIsLogged,
    usernameValue,
    passwordValue,
    dispatchError,
    isLoading
});
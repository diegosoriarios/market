import { combineReducers } from 'redux';
import { 
    itemString, 
    quantidadeString, 
    addToItems, 
    userIsLogged,
    usernameValue,
    passwordValue
} from './handlers'

export default combineReducers({
    itemString,
    quantidadeString,
    addToItems,
    userIsLogged,
    usernameValue,
    passwordValue
});
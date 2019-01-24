import { combineReducers } from 'redux';
import { itemString, quantidadeString, addToItems } from './handlers'

export default combineReducers({
    itemString,
    quantidadeString,
    addToItems
});
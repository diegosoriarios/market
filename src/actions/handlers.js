import {ITEM_STRING, QTD_STRING, ADD_TO_ITEM, USERNAME, PASSWORD, ERROR, USER_IS_LOGGED, IS_LOADING, URL} from './actionTypes'
import axios from 'axios'

export function itemString(value){
    return {
        type: ITEM_STRING,
        item: value
    }
}

export function quantidadeString(value){
    return {
        type: QTD_STRING,
        qtdString: value
    }
}

export function addToItems(value){
    return{
        type: ADD_TO_ITEM,
        items: value
    }
}

export function usernameValue(value){
    return{
        type: USERNAME,
        username: value
    }
}

export function passwordValue(value){
    return{
        type: PASSWORD,
        password: value
    }
}

export function dispatchError(bool){
    return {
        type: ERROR,
        error: bool
    }
}

export function userIsLogged(bool){
    return {
        type: USER_IS_LOGGED,
        isLogged: bool
    }
}

export function isLoading(bool){
    return {
        type: IS_LOADING,
        loading: bool
    }
}

export function checkLogin(username, password){
    return (dispatch) => {
        dispatch(isLoading(true))
        axios.get(`${URL}/users`)
            .then(response => {
                return response.data
            })
            .then(data => {
                data.forEach(value => {
                    if(value.password === password && value.username === username){
                        dispatch(isLoading(false))
                        return dispatch(userIsLogged(true))
                    }
                })
            })
            .then(data => {
                return dispatch(dispatchError(true))
            })
            .catch(() => {
                return dispatch(dispatchError(true))
            })
    }
}
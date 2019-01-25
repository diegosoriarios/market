export function itemString(value){
    return {
        type: 'ITEM_STRING',
        item: value
    }
}

export function quantidadeString(value){
    return {
        type: 'QUANTIDADE_STRING',
        qtdString: value
    }
}

export function addToItems(value){
    return{
        type: 'ADD_TO_ITEM',
        items: value
    }
}

export function usernameValue(value){
    return{
        type: 'USERNAME',
        username: value
    }
}

export function passwordValue(value){
    return{
        type: 'PASSWORD',
        password: value
    }
}

export function dispatchError(bool){
    return {
        type: 'ERROR',
        error: bool
    }
}

export function userIsLogged(bool){
    return {
        type: 'USER_IS_LOGGED',
        isLogged: bool
    }
}

export function checkLogin(username, password){
    return (dispatch) => {
        if(password === '123' && username === 'teste'){
            dispatch(userIsLogged(true))
        }else{
            dispatch(dispatchError(true))
        }
    }
}
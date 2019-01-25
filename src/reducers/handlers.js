const initialState = {
    item: 0,
    qtd: 0,
    items: [],
    total: 0.0,
    username: '',
    password: ''
}

export function quantidadeString(state = initialState, action) {
    switch(action.type){
        case 'QUANTIDADE_STRING':
            return {
                ...state,
                qtd: action.qtdString
            }
        default:
            return state;
    }
}

export function itemString(state = initialState, action) {
    switch(action.type){
        case 'ITEM_STRING':
            return {
                ...state,
                item: action.item
            }
        default:
            return state;
    }
}

export function usernameValue(state = initialState, action){
    console.log(action.username)
    switch(action.type){
        case 'USERNAME':
            return {
                ...state,
                username: action.username
            }
        default:
            return state
    }
}

export function passwordValue(state = initialState, action) {
    switch(action.type){
        case 'PASSWORD':
            return {
                ...state,
                password: action.password
            }
        default:
            return state
    }
}

export function addToItems(state = initialState, action){
    switch(action.type){
        case 'ADD_TO_ITEM':
            return {
                ...state,
                items: state.items.concat({item: action.items[0].item, qtd: action.items[1].qtd})    
            }
        default:
            return state;
    }
}

export function userIsLogged(state = false, action){
    switch(action.type){
        case 'USER_IS_LOGGED':
            return action.isLogged
        default:
            return state
    }
}
const initialState = {
    item: 0,
    qtd: 0,
    items: [],
    total: 0.0
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

export function addToItems(state = initialState, action){
    console.log(action)
    switch(action.type){
        case 'ADD_TO_ITEM':
            return {
                ...state,
                items: state.items.concat(action.items.item)    
            }
        default:
            return state;
    }
}
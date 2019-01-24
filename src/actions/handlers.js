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
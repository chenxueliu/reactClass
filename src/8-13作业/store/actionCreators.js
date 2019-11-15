import actionType from './actionType'
export const ChangeInputAction = (value) => {
    return {
        type: actionType.CHAGE_INPUT,
        value
    }
}
export const AddItemAction = {
    type: actionType.ADD_ITEM
}
export const DeleteItemAction = (index) => {
    return {
        type: actionType.DELE,
        index
    }
}
export const QueryItemAction = (query) => {
    return {
        type: actionType.QUERY_ITEM,
        query
    }
}
export const QueryChangeAction = (value) => {
    return {
        type: actionType.QUERY_CHANGE,
        value
    }
}
export const TianItemAction = () => {
    return {
        type: actionType.TIAN_ITEM
    }
}
export const ClearItemAction = (index) => {
    console.log(index)
    return {
        type: actionType.CLEAR_ITEM,
        index
    }
}
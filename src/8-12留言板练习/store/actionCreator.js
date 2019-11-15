import actionType from './actionType'
const changeValueAction = (value) => {
  return {
    type: actionType.CHANGE_INPUT,
    value
  }
}
const addItemAction = {
  type: actionType.ADD_ITEM
}

const deleteItemAction = (index) => {
  return {
    type: actionType.DELE_ITEM,
    index
  }
}
export {
  changeValueAction,
  addItemAction,
  deleteItemAction
}
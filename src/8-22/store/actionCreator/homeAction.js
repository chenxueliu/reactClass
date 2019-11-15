import { CHANGE_INPUT, ADD_ITEM } from '../actionType/homeActiontype'
export const changeInputAction = value => {
  return {
    type: CHANGE_INPUT,
    value
  }
}
export const onAddItemAction = () => {
  return {
    type: ADD_ITEM
  }
}

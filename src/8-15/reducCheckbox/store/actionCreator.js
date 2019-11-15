import { CHANGE_INPUT } from './actionType'
export const changeInputAction = (value) => {
    return {
        type: CHANGE_INPUT,
        value
    }
}
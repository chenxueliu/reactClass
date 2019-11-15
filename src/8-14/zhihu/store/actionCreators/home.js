import { CHANGE_INPUT } from '../actionTypes/home'
export const changeInputAction = (value) => {
    return {
        type: CHANGE_INPUT,
        value
    }
}
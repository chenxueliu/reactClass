import { CHANGE_INPUT, DELE_TASK, TRUE_FINISHED, FALSE_UNFINISHED, CLEAR_TASK } from '../actionType'
const defaultState = {
    inputValue: '',
    todolist: [],
    finishedList: []
}
export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        // 监听input值改变
        case CHANGE_INPUT:
            newState.inputValue = action.value
            return newState
        // 回车添加
        case 'onKeyCode':
            newState.todolist.push({
                title: newState.inputValue,
                isChecked: false,
            })
            newState.inputValue = ''
            return newState
        // 删除任务
        case DELE_TASK:
            newState.todolist.splice(action.index, 1)
            return newState
        // checkbox为true的时候添加到完成列表里
        case TRUE_FINISHED:
            // console.log('True:' + action.value)
            if (action.value === true) {
                newState.todolist[action.index].isChecked = true
                newState.finishedList.push(newState.todolist[action.index])
                newState.todolist = newState.todolist.filter((item) => {
                    if (item.isChecked === false) {
                        return item
                    }
                    console.log(item)
                })
            }
            return newState
        case FALSE_UNFINISHED:
            if (action.value === false) {
                newState.finishedList[action.index].isChecked = false
                newState.todolist.push(newState.finishedList[action.index])
                newState.finishedList = newState.finishedList.filter((item) => {
                    if (item.isChecked === true) {
                        return item
                    }
                })
            }
            return newState
        case CLEAR_TASK:
            newState.finishedList.splice(action.index, 1)
            return newState
        default:
            return state
    }
}
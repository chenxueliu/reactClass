import { CHANGE_INPUT } from './actionType'
const defaultState = {
    inputValue: '',
    checkList: [{
        status: true,
        classname: 'red'
    },
    {
        status: false,
        classname: 'blue'
    },
    {
        status: false,
        classname: 'yellow'
    }

    ]
}
export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case CHANGE_INPUT:
            newState.inputValue = action.value
            return newState;
        case 'changeChecked':
            const index = action.index;
            const value = action.value;
            newState.checkList.forEach((item, _index) => {
                if (_index === index) {
                    item.status = value;
                } else {
                    item.status = false;
                }
            })
            return newState
        default:
            return state

    }

}
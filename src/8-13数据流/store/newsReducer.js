import { QUERY_ITEM, CHANGE_INPUT_VALUE, ADD_ITEM } from './actionType'
const defaultState = {
    inputValue: '',
    list: [
        { id: 100, text: "1.台风离开中国" },
        { id: 101, text: "2.台风去了日本" },
        { id: 102, text: "3.来日方长" },
        { id: 103, text: "4.四川宜宾地震" },
        { id: 104, text: "5.星河滚烫 ,你是人间理想" },
    ]
}
export default (state = defaultState, action) => {
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case ADD_ITEM:
            const _length = newState.list.length - 1
            const item = newState.list[_length] ? newState.list[_length] : 0
            newState.list.push({ id: item.id + 1, text: newState.inputValue })
            newState.inputValue = '';
            return newState
        case CHANGE_INPUT_VALUE:
            console.log('newsaction:', action)
            newState.inputValue = action.value;
            return newState
        case QUERY_ITEM:
            // filter 返回的是一个新数组 find返回是该数组里的一项
            newState.list = newState.list.filter((item) => {
                // search 0或者大于0都表示找到了，其中0表示的是匹配到的下标，-1表示没找到
                if (item.text.search(newState.inputValue) !== -1) {
                    return item
                }
            })
            newState.inputValue = ''
            return newState

        default:
            return state;
    }
}
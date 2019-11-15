const defaultState = {
    input: '',
    // 未完成列表
    beingList: [],
    // 已完成列表
    completeList: []
}

export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        // 改变列表里checkbox状态
        case 'onChecked':
            if(action.listname){}
        return newState;
        // 将编辑后的值更新到列表里
        case  'editItem':
            if(action.listname==='beingList'){
                newState.beingList.forEach((item,index)=>{
                    if(index===action.index){
                        item.text=action.value
                    }
                })
            }else{
                newState.completeList.forEach((item,index)=>{
                    if(index===action.index){
                        item.text=action.value
                    }
                })
            }
        // 是否可编辑
        case 'onEditStatu':
            console.log(action)
            if (action.listname === 'beingList') {
                newState.beingList.forEach((item, _index) => {
                    if (_index === action.index) {
                        item.statu = action.statu
                    }
                });
            } else {
                newState.completeList.forEach((item, _index) => {
                    if (_index === action.index) {
                        item.statu = action.statu
                    }
                });
            }
        // 添加一条到未完成列表
        case 'pushNewItem':
            console.log(action.value)
            newState.beingList.push({
                // 表示checkbox状态
                checked: false,
                // 内容
                text: action.value,
                // 该行是否编辑状态
                edit: false
            })
            return newState;
        case 'onChangeInput':
            newState.input = action.value;
            return newState;
        default:
            return newState;
    }
}
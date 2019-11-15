import actionType from "./actionTypes.js";

// 1.默认的值
const defaultState = {
  count: 0,
  list: [1, 2, 3]
};

// 2.state是状态数据，默认会给一个默认的值，action是组件dispatch过来的
export default (state = defaultState, action) => {
  // 深拷贝state可以使用lodash的deepclone()，一般使用JSON的就可以了
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case actionType.ADD_COUNT:
      // state是只读的，不可以直接修改
      // 返回的值一定要和默认值做合并，不然程序会有问题--bug

      // return { count: state.count + 1 };

      newState.count = state.count + 1;
      return newState;

    case actionType.ADD_ITEM:
      newState.list.push(action.value);
      return newState;

    default:
      return state;
  }
};

1、原生redux
    ①creatState：该方法接收一个reducer，创建一个store实例。
    ②combineReducers：该方法用于合并多个reducer。
    ③bindActionCreators：该方法用于定制组件使用的actionCreator，接收两个参数，第一个参数是            actionCreator，第二个参数是dispatch。返回值取决于第一个传入的参数，如果传入的是一个对象，则返回    一个对象；第一个参数的类型只有两种，对象和函数。
    ④compose：它是一个辅助方法，用来配合applyMiddleware，使用它可以存放多个中间件，执行顺序是从右向左   的，最终会将右边的方法作为参数合并到最左边的方法里:compose(fn1,fn2,fn3)
    ⑤applyMiddleware：它是专门用来安装中间件的方法，使用它安装的中间件会获取到两个参数:dispatch，getState这两个参数就是store实例下的两个方法
    ⑥const store = creatState(reducer);
        store下面有四个方法：
        getState()：获取reducer里的state
        subscribe()：订阅函数，即订阅函数发生改变时触发该方法，通知组件去更新。subscribe
        返回一个注销subscribe方法，用于解绑订阅。
        dispatch()：派发一个action到store中，触发reducer去进行对仓库state的操作。该方法接收一个对象值，这个对象就是action，包含一个必须的参数type，还有一个可选的value参数。
        replaceReducer(nextReducer)：用于控制下一个要是用的reducer，为高级api，偏底层。
    ⑦redux-thunk:
    定义： 处理action里异步请求。
    说明： 在redux中dispatch以后reducer立即计算state，这叫同步，dispatch以后过一段时间redcuer再计算state，这才是异步
    使用方式:
        注册/安装
        store/index.js```
            import { createStore,applyMiddleware,compose } from 'redux'

            import reducer from './reducer'

            import thunk from 'redux-thunk'
        ```
        actionCreator.js```
            export const getAPI = () =>{
                //该代码就是使用redux-thunk示例，固定语法，必须返回一个函数，该函数接受两个参是dispatch，getState
                return (dispatch,getState) = {
                    // 请求前的派发动作
                    dispatch(/***/)
                    axios.get(/***/).then(res => {
                        // 接口响应后派发动作
                        dispatch(/***/)
                    })
                }
            }
        ```
2、react-redux  

    ①Prvoider：它是一个组件，接收唯一一个数据store，这个store存放的就是redux生成的store。
    ②connect：连接器，用于Provider组件中的子组件使用，用户和redux交互的。它接收两个参数：
        -mapStateToProps：该方法接收一个参state，该state就是redux中reducer的state。
        -mapDispatchToProps：该方法接收两个参，第一个是dispatch，第二个是ownPorps(自由属性-父组件传递过来的)
    ③语法：connect(mapStateToProps,mapDispatchToProps)(Component);
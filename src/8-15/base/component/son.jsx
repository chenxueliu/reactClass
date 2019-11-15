import React from 'react'
import { bindActionCreators } from 'redux';
export default (props) => {
    // 当前组件作为子组件在不需要知道redux的情况下，需要我们在父组件中使用：bindActionCreators方法，将actionCreator进行包装，由父组件通过props传递进来
    // bindActionCreators:接收两个参数
    // 1.参数1是我们的actionCreator，它可以是一个单独的，也可以是一组actionCreator，如果传入一组的话，需要放在对象里，那么返回的也是一个包装后的对象，如果是一个函数，则返回一个函数
    // 2.参数2是dispatch，它会被bindActionCreators封装到我们返回值的方法里，这样在使用返回的函数的时候，直接调用即可。
    console.log(props)
    return <div>
        <input type="text" value={props.inputValue} onChange={({ target }) => {
            props.sonfn.changeInputAction(target.nodeValue)
        }} />
        <button onClick={() => { props.sonfn.changeInputAction('123456') }}>触发一下</button>
    </div>
}
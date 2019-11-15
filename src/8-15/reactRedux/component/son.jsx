import React from 'react'
import { connect } from 'react-redux'
const Son = (props) => {
    console.log(props)
    return <div>
        <input type="text" value={props.inputValue} onChange={({ target }) => {
            props.sonfn.changeInputAction(target.value)
        }} />
        <button onClick={() => { props.sonfn.changeInputAction('123456') }}>触发一下</button>
    </div>
}
// 使用redux的bindActionCreators需要注意的是，这个方法在redux中使用最好，在react-redux中没有使用的必要
// redux是一个独立的状态库，它自身带的一些API在独立使用redux
const mapStateToProps = state => state
export default connect(mapStateToProps)(Son)
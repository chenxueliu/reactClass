import React, { Component } from 'react'
import { connect } from 'react-redux'
class Home extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <input type="text" value={this.props.inputValue} onChange={this.props.inputValue} />
                <div dangerouslySetInnerHTML={{ __html: this.props.inputValue }}></div>
            </div>
        )
    }
}
// connect 是一个高级函数，它返回一个方法，所以要再调用一下。
// 参数：mapStateToProps:函数，返回的是redux里的state值(可选)
//       mapDispatchToProps:函数，返回的是派发的action动作(可选)
// 如果不传参，只是用connect连接，那么props里只会有一个dispatch
const mapStateToProps = (state) => {
    console.log(state)
    // 该方法里的state来自于redux-reducer里的state
    return state
}
const mapDispatchToProps = (dispatch, ownProps) => {
    // 一旦我们使用了mapDispatchToProps 传入方法,那么默认连接器connect给的dispatch就会消失
    // 该方法接收两个参数,来自实例化store的dispatch方法,用户封装派发的自定义方法
    // onwProps：来自父组件给的props，也叫自由属性，比如在路由里，这个对象就会包含路由的数据信息
    return {
        changeInput({ target }) {
            dispatch({
                type: 'changeInput',
                value: target.value
            })
            console.log('我马上就要去dispatch了')
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

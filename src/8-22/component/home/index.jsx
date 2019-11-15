import React from 'react'
import { connect } from 'react-redux'
import {
  changeInputAction,
  onAddItemAction
} from '../../store/actionCreator/homeAction'
const Home = props => {
  const { input, list, onChangeInput, onAdditem } = props
  return (
    <div>
      <label>
        <input type="text" onChange={onChangeInput} value={input} />
        <button onClick={onAdditem}>添加</button>
      </label>
      <main>
        {list.map(item => {
          return <p key={item.id}>{item.label}</p>
        })}
      </main>
    </div>
  )
}
const mapStateToprops = state => state.homeReducer
const mapDispatchToProps = dispatch => {
  return {
    // 改变input值
    onChangeInput({ target }) {
      dispatch(changeInputAction(target.value))
    },
    // 添加数据
    onAdditem() {
      dispatch(onAddItemAction())
    }
  }
}
export default connect(
  mapStateToprops,
  mapDispatchToProps
)(Home)

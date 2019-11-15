import React from 'react'
import { connect } from 'react-redux'
import { changeInputACtion, addItemAction } from '../store/actionCReator/home'
const Home = props => {
  console.log(props)
  const { input, list, onChangeInput, onAddItem } = props
  console.log(list)
  return (
    <div>
      <label htmlFor="">
        <input type="text" value={input} onChange={onChangeInput} />
        <button onClick={onAddItem}>添加</button>
      </label>
      <div>
        {list.map(item => {
          return <p key={item.id}>{item.label}</p>
        })}
      </div>
    </div>
  )
}
const mapStateToProps = state => state.homereducer
const mapDispatchToProps = (dispatch, ownProps) => {
  console.log(ownProps)
  return {
    onChangeInput({ target }) {
      dispatch(changeInputACtion(target.value))
    },
    // 添加一条数据到list
    onAddItem() {
      dispatch(addItemAction())
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

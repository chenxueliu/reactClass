import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeInptACtion } from '../store/actionCreator'
export const Home = props => {
  const { input, list, onChangeInput, onAddItem } = props
  console.log(props)
  return (
    <div>
      <label htmlFor="">
        <input type="text" value={input} onChange={onChangeInput} />
        <button onClick={onAddItem}>添加</button>
      </label>
      <div>
        {/* {list.map(item => {
          return <p key={item.id}>{item.label}</p>
        })} */}
      </div>
    </div>
  )
}
const mapStateToProps = state => state
const mapDispatchToProps = dispatch => {
  return {
    onChangeInput({ target }) {
      dispatch(changeInptACtion(target.value))
    },
    onAddItem() {
      dispatch(addItemAction())
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

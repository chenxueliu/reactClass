import React from 'react'
import { connect } from 'react-redux'
import { changeInputACtion, addItemAction } from '../store/actionCReator/news'
const News = props => {
  const { input, list, onChangeInput, addItem } = props
  console.log(props)
  return (
    <div>
      <label htmlFor="">
        <input type="text" value={input} onChange={onChangeInput} />
        <button onClick={addItem}>添加</button>
      </label>
    </div>
  )
}
const mapStateToProps = state => state.newsreducer
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChangeInput({ target }) {
      dispatch(changeInputACtion(target.value))
    },
    // 添加
    addItem() {
      dispatch(addItemAction())
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News)

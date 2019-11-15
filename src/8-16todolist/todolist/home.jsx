import React from 'react'
import { connect } from 'react-redux'
const Home = (props) => {
  const { input, beingList, onChangeInput, onKeyEnter, onEditStatu, onChecked } = props;
  return (
    <div>
      {/* 输入框 */}
      <label>
        <input type='text' onKeyDown={(event) => onKeyEnter(event, 'input')} value={input} onChange={onChangeInput} />
      </label>
      {/* 未完成列表 */}
      <h4>未完成列表</h4>
      <ul>
        {
          beingList.map((item, index) => {
            return <li key={index}>
              <input type='checkbox' checked={item.checked} onChange={(event) => onChecked(event, index, 'beingList')} />
              <span contentEditable={item.statu} suppressContentEditableWarning="true"
                onKeyDown={(event) => {
                  onKeyEnter(event, 'edit', index, 'beingList');
                  if (event.keyCode === 13) {
                    onEditStatu(index, 'beingList', false)
                  }
                }}
                onDoubleClick={() => onEditStatu(index, 'beingList', true)}>{item.text}</span>
            </li>
          })
        }

      </ul>
      {/* 已完成列表 */}
      <h4>已完成列表</h4>
      <ul>
        {/* <li>
                    <input type='checkbox' checked={true} onChange={() => { }} />
                    <span>上午的课程</span>
                </li> */}
      </ul>
      <i className='iconfont icon-list2:before' style={{ color: 'red', fontSize: '100px' }}></i>
    </div>
  )
}
const mapDispatchToProps = (dispatch) => {
  return {
    // 改变input值
    onChangeInput({ target }) {
      dispatch({
        type: 'onChangeInput',
        value: target.value
      })
    },
    // 回车键触发修改
    onKeyEnter(event, type, index, listname) {
      if (event.keyCode === 13) {
        if (type === 'input') {
          if (event.target.value) {
            dispatch({
              type: 'pushNewItem',
              value: event.target.value
            })
          }
        } else if (type === 'edit') {
          dispatch({
            type: 'editItem',
            index,
            listname,
            value: event.target.innerText
          })
        }
      }

    },
    // 控制元素是否可编辑
    onEditStatu(index, listname, statu) {
      console.log(index, listname, statu)
      dispatch({
        type: 'onEditStatu',
        index,
        listname,
        statu
      })
    },
    // 多选框操作
    onChecked({ target }, index, listname) {
      dispatch({
        type: 'onChecked',
        index,
        listname,
        checked: target.checked
      })
    }
  }
}
export default connect(state => state, mapDispatchToProps)(Home)
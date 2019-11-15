import React from 'react'
import { connect } from 'react-redux'
import { List } from 'antd-mobile';
import './son.scss'
const Son = (props) => {
    const { checkList, changeChecked } = props
    const Item = List.Item;
    const color = checkList.find((item) => {
        if (item.status) {
            return item
        }
    }).classname
    console.log(color)

    return (
        <div className={color}>
            {
                checkList.map((item, index) => {
                    return <div key={item.classname}>
                        <input type='checkbox'
                            checked={item.status}
                            onChange={({ target }) => {
                                console.log(target)
                                changeChecked(target.checked, index)
                            }} />
                        <div>{item.status ? item.classname : ''}</div>
                    </div>
                })
            }
            <List>
                <Item arrow='up'>1.使用antdesign-mobile基础</Item>
                <Item arrow='up'>2.使用antdesign-mobile基础</Item>
                <Item arrow='up'>3.使用antdesign-mobile基础</Item>
            </List>
        </div>
    )
}
const mapStateToProps = (state) => {
    return state
}
const mapStateDispatchToProps = (dispatch) => {
    return {
        changeChecked(value, index) {
            dispatch({
                type: 'changeChecked',
                value,
                index
            })
        }
    }
}
export default connect(mapStateToProps, mapStateDispatchToProps)(Son)

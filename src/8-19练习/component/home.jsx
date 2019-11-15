import React from 'react'
import { connect } from 'react-redux'
import { onChangeInputAction } from '../store/actionCreator'
const Home = (props) => {
    const { input, list, err, loading, onChangeInput } = props
    return < div className='home-warp'>
        <label htmlFor="">
            <input type="text" value={input} onChange={onChangeInput} />
            <button>搜</button>
        </label>
        <main>
            {
                loading && <div className='loading'>
                    <mark>正在请求中.......</mark>
                </div>
            }
        </main>
    </div >
}
const mapStateToProps = state => state
const mapDispatchToProps = (dispatch) => {
    return {
        onChangeInput({ target }) {
            dispatch(onChangeInputAction(target.value))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)

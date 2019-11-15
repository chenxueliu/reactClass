import React from 'react'
import { connect } from 'react-redux'

const User = props => {
  return (
    <div>
      <p>{props.username}是用户名，来自redux</p>
      <p>欢迎{props.username}</p>
    </div>
  )
}

const mapStateToProps = state => state
export default connect(mapStateToProps)(User)

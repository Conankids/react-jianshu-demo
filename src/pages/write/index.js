import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

export class Write extends Component {
  render() {
    let { isLogin } = this.props
    return isLogin ? <div>写文章</div> : <Redirect to="/login" />
  }
}

const mapStateToProps = state => ({
  isLogin: state.getIn(['login', 'isLogin'])
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Write)

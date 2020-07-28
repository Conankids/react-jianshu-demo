import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { actionCreators } from './store'
import { LoginWrapper,LoginBox, LoginInput, LoginButton } from './style'

export class Login extends Component {
  render() {
    let { isLogin, login } = this.props
    return !isLogin ? (
      <LoginWrapper>
        <LoginBox>
          <form>
            <LoginInput
              placeholder="账号"
              ref={account => (this.account = account)}
            />
            <LoginInput
              placeholder="密码"
              type="password"
              ref={pwd => (this.pwd = pwd)}
            />
          </form>

          <LoginButton
            onClick={() => {
              login(this.account, this.pwd)
            }}
          >
            登录
          </LoginButton>
        </LoginBox>
      </LoginWrapper>
    ) : (
      <Redirect to="/" />
    )
  }
}

const mapStateToProps = state => ({
  isLogin: state.getIn(['login', 'isLogin'])
})

const mapDispatchToProps = dispatch => ({
  login(accountIpt, pwdIpt) {
    let account = accountIpt.value
    let pwd = pwdIpt.value
    dispatch(actionCreators.login(account, pwd))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)

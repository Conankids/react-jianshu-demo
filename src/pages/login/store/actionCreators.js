import axios from 'axios'
import { constants } from './index'

const toLogin = () => ({
  type: constants.TO_LOGIN
})

const toLogout = () => ({
  type: constants.TO_LOGOUT
})

export const login = (account, pwd) => {
  return dispatch => {
    axios
      .get(`/api/login.json`, {
        params: {
          account,
          pwd
        }
      })
      .then(res => {
        dispatch(toLogin())
      })
      .catch(err => {})
  }
}

export const logout = () => {
  return dispatch => {
    axios
      .get(`/api/logout.json`)
      .then(res => {
        dispatch(toLogout())
      })
      .catch(err => {})
  }
}

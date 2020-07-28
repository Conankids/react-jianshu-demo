import { fromJS } from 'immutable'
import { constants } from './index'

let defaultState = {
  isLogin: false
}

export default (state = fromJS(defaultState), action) => {
  switch (action.type) {
    case constants.TO_LOGIN:
      return state.set('isLogin', true)
    case constants.TO_LOGOUT:
      return state.set('isLogin', false)
    default:
      return state
  }
}

import { fromJS } from 'immutable'
import * as constants from './constants'

let defaultState = {
  title: '',
  content: ''
}

export default (state = fromJS(defaultState), action) => {
  if (action.type === constants.GET_DETAIL_INFO) {
    return state.merge({
      title: action.title,
      content: action.content
    })
  }
  return state
}

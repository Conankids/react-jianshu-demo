import { fromJS } from 'immutable'
import * as constants from './actionTypes'

let defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  totalPage: 1,
  page: 1
})

export default (state = defaultState, { type, value }) => {
  if (type === constants.SEARCH_FOCUS) {
    return state.set('focused', true)
  }
  if (type === constants.SEARCH_BLUR) {
    return state.set('focused', false)
  }
  if (type === constants.GET_SEARCH_LIST) {
    return state.merge({
      list: value,
      totalPage: value.size / 10
    })
  }
  if (type === constants.SEARCH_MOUSE_ENTER) {
    return state.set('mouseIn', true)
  }
  if (type === constants.SEARCH_MOUSE_LEAVE) {
    return state.set('mouseIn', false)
  }
  if (type === constants.SEARCH_CHANGE_PAGE) {
    return state.set('page', value)
  }
  return state
}

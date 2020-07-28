import * as constants from './actionTypes'
import axios from 'axios'
import { fromJS } from 'immutable'

export const inputFocus = () => {
  return {
    type: constants.SEARCH_FOCUS
  }
}

export const inputBlur = () => {
  return {
    type: constants.SEARCH_BLUR
  }
}
export const getList = data => {
  return {
    type: constants.GET_SEARCH_LIST,
    value: fromJS(data)
  }
}
export const getSearchList = () => {
  return dispatch => {
    axios
      .get('/api/list.json')
      .then(res => {
        dispatch(getList(res.data.data))
      })
      .catch(err => {})
  }
}
export const mouseEnter = () => {
  return {
    type: constants.SEARCH_MOUSE_ENTER
  }
}
export const mouseLeave = () => {
  return {
    type: constants.SEARCH_MOUSE_LEAVE
  }
}
export const changePage = (page) => {
  return {
    type: constants.SEARCH_CHANGE_PAGE,
    value: page
  }
}
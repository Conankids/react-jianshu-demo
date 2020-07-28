import axios from 'axios'
import * as constants from './constants'

const initDetailData = ({ title, content }) => ({
  type: constants.GET_DETAIL_INFO,
  title,
  content
})

export const getDetailData = id => {
  return dispatch => {
    axios
      .get(`/api/detailData.json?id=${id}`)
      .then(res => {
        dispatch(initDetailData(res.data.data))
      })
      .catch(err => {})
  }
}

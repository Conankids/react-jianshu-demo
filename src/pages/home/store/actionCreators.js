import axios from 'axios'
import * as constants from './constants'

const getHomeData = data => ({
  type: constants.GET_HOME_LIST,
  data
})

const getMoreArticleList = data => ({
  type: constants.GET_MORE_ARTICLE_LIST,
  data
})

export const initHomeData = () => {
  return dispatch => {
    axios
      .get('/api/homeData.json')
      .then(res => {
        dispatch(getHomeData(res.data.data))
      })
      .catch(err => {})
  }
}

export const getMoreArticle = page => dispatch => {
  axios
    .get(`/api/articleList.json?page=${page}`)
    .then(res => {
      dispatch(
        getMoreArticleList({
          page,
          data: res.data.data
        })
      )
    })
    .catch(err => {})
}

const shuffle = arr => {
  let i = arr.length
  while (--i) {
    let j = ~~(Math.random() * i)
    ;[arr[j], arr[i]] = [arr[i], arr[j]]
  }
  return arr
}

export const changeAuthorList = data => {
  let newData = shuffle(data.toJS())
  return {
    type: constants.CHANGE_AUTHOR_LIST,
    data: newData
  }
}
export const toggleShow = show => ({
  type: constants.TOGGLE_BACK_TOP_SHOW,
  show
})
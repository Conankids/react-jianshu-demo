import { fromJS } from 'immutable'
import * as constants from './constants'

let defaultState = {
  page: 1,
  showBackTop: false,
  recommendList: [],
  articleList: [],
  boardList: [],
  authorList: []
}

export default (state = fromJS(defaultState), action) => {
  if (action.type === constants.GET_HOME_LIST) {
    return state.merge({
      recommendList: fromJS(action.data.recommendList),
      articleList: fromJS(action.data.articleList),
      boardList: fromJS(action.data.boardList),
      authorList: fromJS(action.data.authorList)
    })
  }
  if (action.type === constants.GET_MORE_ARTICLE_LIST) {
    let newArticleList = state
      .get('articleList')
      .toJS()
      .concat(action.data.data)

    return state.merge({
      page: action.data.page,
      articleList: fromJS(newArticleList)
    })
  }
  if (action.type === constants.CHANGE_AUTHOR_LIST) {
    return state.set('authorList', fromJS(action.data))
  }
  if (action.type === constants.TOGGLE_BACK_TOP_SHOW) {
    return state.set('showBackTop', action.show)
  }
  return state
}

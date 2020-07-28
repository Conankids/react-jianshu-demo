import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { actionCreators } from '../../store'
import { ArticleItem, ArticleMeta, LookMore } from '../../style'

class ArticleList extends PureComponent {
  constructor(props) {
    super(props)
  }
  render() {
    let { page, list, getMoreArticle } = this.props
    return (
      <div>
        {list.map((item, index) => (
          <Link key={index} to={`/detail/${item.get('id')}`}>
            <ArticleItem>
              <div className="content">
                <h2>{item.get('title')}</h2>
                <p className="desc">{item.get('desc')}</p>
                <ArticleMeta>
                  <span className="nickname">{item.get('nickname')}</span>
                  <span className="comment">
                    <i className="iconfont">&#xe717;</i>
                    {item.get('comment')}
                  </span>
                  <span className="prise">
                    <i className="iconfont">&#xe623;</i>
                    {item.get('prise')}
                  </span>
                </ArticleMeta>
              </div>
              <img className="cover" src={item.get('imgUrl')} alt="" />
            </ArticleItem>
          </Link>
        ))}
        <LookMore onClick={() => getMoreArticle(page)}>阅读更多</LookMore>
      </div>
    )
  }
}

const mapState = state => ({
  page: state.getIn(['home', 'page']),
  list: state.getIn(['home', 'articleList'])
})

const mapDispatch = dispatch => ({
  getMoreArticle(page) {
    dispatch(actionCreators.getMoreArticle(page + 1))
  }
})

export default connect(mapState, mapDispatch)(ArticleList)

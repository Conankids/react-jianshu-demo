import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'

import Recommend from './components/recommend'
import ArticleList from './components/articleList'
import Board from './components/board'
import Download from './components/download'
import AuthorList from './components/authorList'

import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style'

class Home extends PureComponent {
  constructor(props) {
    super(props)
    this.scrollToTop = this.scrollToTop.bind(this)
  }
  scrollToTop() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <HomeWrapper>
        <div className="main">
          <HomeLeft>
            <Recommend />
            <ArticleList />
          </HomeLeft>
          <HomeRight>
            <Board />
            <Download />
            <AuthorList />
          </HomeRight>
        </div>
        {this.props.showBackTop && (
          <BackTop onClick={this.scrollToTop}>
            <i className="iconfont">&#xe601;</i>
          </BackTop>
        )}
      </HomeWrapper>
    )
  }
  componentDidMount() {
    this.props.initHomeData()
    this.bindEvents()
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this), false)
  }
  bindEvents() {
    window.addEventListener('scroll', this.handleScroll.bind(this), false)
  }
  handleScroll() {
    let scrollTop = document.documentElement.scrollTop
    let isShow = scrollTop > 100
    this.props.showBackTop ^ isShow && this.props.toggleShow(isShow)
  }
}

const mapState = state => ({
  showBackTop: state.getIn(['home', 'showBackTop'])
})

const mapDispatch = dispatch => ({
  initHomeData() {
    dispatch(actionCreators.initHomeData())
  },
  toggleShow(show) {
    dispatch(actionCreators.toggleShow(show))
  }
})

export default connect(mapState, mapDispatch)(Home)

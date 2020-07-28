import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { Link } from 'react-router-dom'
import { searchActions } from './store'
import { actionCreators as LoginActionCreators } from '../../pages/login/store'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearchWrapper,
  NavSearch,
  SearchInfoWrapper,
  SearchTitle,
  SearchChange,
  SearchInfoList,
  SearchInfoItem,
  Addition,
  Btn
} from './style'

class MyHeader extends Component {
  constructor(props) {
    super(props)
  }
  getSearchInfo() {
    let {
      focused,
      list,
      mouseIn,
      page,
      totalPage,
      searchInfoMouseEnter,
      searchInfoMouseLeave,
      changePage
    } = this.props

    if (focused || mouseIn) {
      let newList = list.toJS()
      let pageList = []
      if (newList.length) {
        for (let i = (page - 1) * 10; i < page * 10; i++) {
          pageList.push(
            <SearchInfoItem key={newList[i] + i}>{newList[i]}</SearchInfoItem>
          )
        }
      }

      return (
        <SearchInfoWrapper
          onMouseEnter={searchInfoMouseEnter}
          onMouseLeave={searchInfoMouseLeave}
        >
          <SearchTitle>
            搜索历史
            <SearchChange
              onClick={() => {
                changePage(page, totalPage, this.spinIcon)
              }}
            >
              <i
                ref={icon => (this.spinIcon = icon)}
                className="iconfont refresh"
              >
                &#xe655;
              </i>
              换一批
            </SearchChange>
          </SearchTitle>
          <SearchInfoList>{pageList}</SearchInfoList>
        </SearchInfoWrapper>
      )
    }
    return null
  }
  render() {
    let { focused, list, isLogin, inputBlur, inputFocus, logout } = this.props
    return (
      <HeaderWrapper>
        <div className="header-inner">
          <Link to="/">
            <Logo />
          </Link>
          <Nav>
            <NavItem className="left active">首页</NavItem>
            <NavItem className="left">下载APP</NavItem>
            <NavSearchWrapper>
              <CSSTransition in={focused} timeout={200} classNames="slide">
                <NavSearch
                  onFocus={() => {
                    inputFocus(list)
                  }}
                  onBlur={inputBlur}
                ></NavSearch>
              </CSSTransition>
              <i className={focused ? 'iconfont focus zoom' : 'iconfont zoom'}>
                &#xe600;
              </i>
              {this.getSearchInfo()}
            </NavSearchWrapper>
            {isLogin ? (
              <NavItem className="right" onClick={logout}>
                注销
              </NavItem>
            ) : (
              <Link to="/login">
                <NavItem className="right">登录</NavItem>
              </Link>
            )}

            <NavItem className="right">
              <i className="iconfont">&#xe611;</i>
            </NavItem>
          </Nav>
          <Addition>
            <Link to="/write">
              <Btn className="writing">
                <i className="iconfont">&#xe616;</i>
                写文章
              </Btn>
            </Link>
            <Btn className="reg">注册</Btn>
          </Addition>
        </div>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = state => ({
  focused: state.getIn(['header', 'focused']),
  list: state.getIn(['header', 'list']),
  mouseIn: state.getIn(['header', 'mouseIn']),
  page: state.getIn(['header', 'page']),
  totalPage: state.getIn(['header', 'totalPage']),
  isLogin: state.getIn(['login', 'isLogin'])
})

const mapDispatchToProps = dispatch => {
  return {
    inputFocus(list) {
      list.size === 0 && dispatch(searchActions.getSearchList())
      dispatch(searchActions.inputFocus())
    },
    inputBlur() {
      dispatch(searchActions.inputBlur())
    },
    searchInfoMouseEnter() {
      dispatch(searchActions.mouseEnter())
    },
    searchInfoMouseLeave() {
      dispatch(searchActions.mouseLeave())
    },
    changePage(page, totalPage, spinIcon) {
      let rotateAgent = spinIcon.style.transform.replace(/[^0-9]/g, '')
      rotateAgent = rotateAgent ? parseInt(rotateAgent, 10) : 0
      spinIcon.style.transform = `rotate(${rotateAgent + 360}deg)`
      let newPage = page < totalPage ? page + 1 : 1
      dispatch(searchActions.changePage(newPage))
    },
    logout() {
      dispatch(LoginActionCreators.logout())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyHeader)

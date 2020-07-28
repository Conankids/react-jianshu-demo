import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from '../../store'
import {
  AuthorListWrapper,
  AuthorChange,
  AuthorItem,
  AuthorMore
} from '../../style'

class AuthorList extends PureComponent {
  constructor(props) {
    super(props)
  }
  render() {
    let { list, handleAuthorChange } = this.props
    return (
      <AuthorListWrapper>
        <div className="title">
          推荐作者
          <AuthorChange onClick={() => handleAuthorChange(this.spinIcon, list)}>
            <i
              ref={icon => (this.spinIcon = icon)}
              className="iconfont refresh"
            >
              &#xe655;
            </i>
            换一批
          </AuthorChange>
        </div>
        <ul>
          {list.map(item => (
            <AuthorItem key={item.get('id')}>
              <a href="/">
                <img className="avatar" src={item.get('imgUrl')} alt="" />
                <span className="follow">+关注</span>
                <p className="nickname">{item.get('nickname')}</p>
                <p className="intro">
                  写了{item.get('word')}K字 · {item.get('star')}K喜欢
                </p>
              </a>
            </AuthorItem>
          ))}
        </ul>
        <AuthorMore>查看更多 ></AuthorMore>
      </AuthorListWrapper>
    )
  }
}

const mapState = state => ({
  list: state.getIn(['home', 'authorList'])
})

const mapDispatch = dispatch => ({
  handleAuthorChange(spinIcon, list) {
    let rotateAgent = spinIcon.style.transform.replace(/[^0-9]/g, '')
    rotateAgent = rotateAgent ? parseInt(rotateAgent) : 0
    spinIcon.style.transform = `rotate(${rotateAgent + 360}deg)`
    dispatch(actionCreators.changeAuthorList(list))
  }
})

export default connect(mapState, mapDispatch)(AuthorList)

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { RecommendList, RecommendItem, RecommendMore } from '../../style'

class Recommend extends PureComponent {
  constructor(props) {
    super(props)
  }
  render() {
    let { list } = this.props
    return (
      <RecommendList>
        {list.map(item => (
          <RecommendItem key={item.get('id')}>
            <img className="pic" src={item.get('imgUrl')} alt="" />
            {item.get('title')}
          </RecommendItem>
        ))}

        <RecommendMore>更多热门专题 ></RecommendMore>
      </RecommendList>
    )
  }
}

const mapState = state => ({
  list: state.getIn(['home', 'recommendList'])
})

export default connect(mapState, null)(Recommend)

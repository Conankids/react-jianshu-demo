import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { DetailWrapper, DetailTitle, DetailContent } from './style'

export class Detail extends PureComponent {
  render() {
    return (
      <DetailWrapper>
        <DetailTitle>{this.props.title}</DetailTitle>
        <DetailContent
          dangerouslySetInnerHTML={{ __html: this.props.content }}
        ></DetailContent>
      </DetailWrapper>
    )
  }
  componentDidMount() {
    this.props.getDetailData(this.props.match.params.id)
  }
}

const mapStateToProps = state => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content'])
})

const mapDispatchToProps = dispatch => ({
  getDetailData(id) {
    dispatch(actionCreators.getDetailData(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Detail)

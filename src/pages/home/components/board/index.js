import React from 'react'
import { connect } from 'react-redux'
import { BoardList } from '../../style'

const Board = props => {
  let { list } = props
  return (
    <BoardList>
      {list.map(item => (
        <a key={item.get('id')} href="/">
          <img
            className="board-item"
            src={require(`../../../../assets/imgs/${item.get('imgUrl')}`)}
            alt=""
          />
        </a>
      ))}
    </BoardList>
  )
}

const mapState = state => ({
  list: state.getIn(['home', 'boardList'])
})

export default connect(mapState, null)(Board)

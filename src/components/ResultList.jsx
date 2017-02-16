import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { selectRepo } from '../actions/repo'

class ResultList extends Component {

  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
  }

  static defaultProps = {
    items: [],
  }

  render () {
    const { items, isFetching, hasSearched, selectedId } = this.props

    if (isFetching) {
      return (<div className="column">
        <h4 className="ui block header">Searching...</h4>
      </div>)
    }

    if (items.length === 0) {
      if (!hasSearched) {
        return (
          <div className="column">
            <h4 className="ui block header">Start searching for something!</h4>
          </div>
        )
      }

      return (
        <div className="column">
          <h4 className="ui block header">No results</h4>
        </div>
      )
    }

    return (
      <div className="column">
        <h4 className="ui block header">
          Results
        </h4>
        <div>
          { items.map((item) => (
            <ResultCard
              key={`res-${item.id}`}
              {...item}
              isActive={item.id === selectedId}
              onClick={this.props.actions.selectRepo.bind(this, item.id)}/>
          ))}
        </div>
      </div>
    )
  }

}

export const ResultCard = ({
  title,
  description,
  isActive = false,
  onClick = f => f,
}) => (
  <a className={`ui fluid card ${isActive && 'green'}`} onClick={onClick}>
    <div className="content">
      <div className="header"><i className="github alternate icon" /> {title}</div>
      <div className="meta">{description}</div>
    </div>
  </a>
)

const mapStateToProps = ({repos}) => {
  const { selectedId, results, isFetching, hasSearched } = repos
  return {
    isFetching,
    selectedId,
    hasSearched,
    items: results,
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: {
    selectRepo: (id) => { dispatch(selectRepo(id)) },
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(ResultList)

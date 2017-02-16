import React, { Component, PropTypes } from 'react'

export default class ResultList extends Component {

  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
  }

  static defaultProps = {
    items: [],
  }

  render () {
    const { items } = this.props
    return (
      <div className="column">
        <h4 className="ui block header">
          Results
        </h4>
        <div>
          { items.map((item, i) => (<ResultCard key={`res-${i}`} {...item}/>)) }
        </div>
      </div>
    )
  }

}

export const ResultCard = ({
  title,
  body,
  isActive = false,
}) => (
  <a className={`ui fluid card ${isActive && 'green'}`}>
    <div className="content">
      <div className="header">{title}</div>
      <div className="meta">{body}</div>
    </div>
  </a>
)

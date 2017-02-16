import React, { Component, PropTypes } from 'react'

export default class Details extends Component {

  static propTypes = {
    selectedId: PropTypes.string,
    language: PropTypes.string,
    url: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    watchersCount: PropTypes.number,
    stargazersCount: PropTypes.number,
  }

  static defaultProps = {
    selectedId: undefined,
    language: 'Unknown',
    url: 'Unknown',
    title: 'Untitled',
    description: 'No description',
    watchersCount: 0,
    stargazersCount: 0,
  }

  render () {
    const { language, url, title, description, watchersCount, stargazersCount } = this.props

    return (
      <div className="column">
        <div className="ui segments raised">
          <div className="ui secondary segment">
            <h4>Details</h4>
          </div>
          <div className="ui segment">
            <h3><a href={url} target="_blank">{title}</a></h3>

            <h4>Description</h4>
            <p>{description}</p>

            <h4>Language</h4>
            <p>{language}</p>

            <h4>Total Watchers</h4>
            <p>{watchersCount}</p>

            <h4>Total Stars</h4>
            <p>{stargazersCount}</p>
          </div>
        </div>
      </div>
    )
  }

}

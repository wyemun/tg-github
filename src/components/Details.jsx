import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

export class Details extends Component {

  static propTypes = {
    selectedId: PropTypes.string,
    language: PropTypes.string,
    url: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    watcherCount: PropTypes.number,
    stargazerCount: PropTypes.number,
    opened: PropTypes.bool,
  }

  static defaultProps = {
    selectedId: undefined,
    language: 'Unknown',
    url: 'Unknown',
    title: 'Untitled',
    description: 'No description',
    watcherCount: 0,
    stargazerCount: 0,
    opened: false,
  }

  render () {
    const { opened, language, url, title, description, watcherCount, stargazerCount } = this.props

    if (!opened) {
      return (<div></div>)
    }

    return (
      <div className="column">
        <div className="ui segments raised">
          <div className="ui secondary segment">
            <h4><i className="browser icon"/> Details</h4>
          </div>
          <div className="ui segment">
            <h3><a href={url} target="_blank">{title}</a></h3>

            <h4>Description</h4>
            <p>{description}</p>

            <h4>Language</h4>
            <p>{language}</p>

            <h4>Total Watchers</h4>
            <p>{watcherCount}</p>

            <h4>Total Stars</h4>
            <p>{stargazerCount}</p>
          </div>
          <div className="ui segment">
            <a href={url} target="_blank" className="ui green fluid button">
              <i className="external icon"/> View on Github
            </a>
          </div>
        </div>
      </div>
    )
  }

}

const mapStateToProps = ({repos}) => {
  const { selectedId, results } = repos

  let cState = {
    opened: !!selectedId,
  }

  const view = results.find(item => item.id === selectedId) || {}

  if (selectedId) {
    cState = {
      ...cState,
      ...view,
    }
  }

  return cState
}

export default connect(mapStateToProps)(Details)

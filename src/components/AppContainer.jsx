import React, { Component } from 'react'
import { connect } from 'react-redux'

import Details from './Details'
import ResultList from './ResultList'
import { searchGithub, changeQuery } from '../actions/repo'

class AppContainer extends Component {
  render () {
    const { searchQuery } = this.props

    return (
      <div className="ui container" style={{marginTop: '4em'}}>
        <h1 className="ui blue header">Awesome Github Repository Searcher</h1>

        <div style={{paddingBottom: '2em'}}>
          <div className="ui fluid icon input">
            <input
              type="text"
              placeholder="Type the keywords here, press `Enter` search"
              autocomplete="off"
              value={searchQuery}
              onChange={this.onTextChange.bind(this)}
              onKeyDown={this.onKeyDown.bind(this)}
            />
            <i className="search icon"></i>
          </div>
        </div>
        <div className="ui two column grid">
          <ResultList />
          <Details />
        </div>
      </div>)
  }

  onTextChange (evt) {
    this.props.actions.changeQuery(evt.target.value)
  }

  onKeyDown (evt) {
    if (evt.keyCode === 13) {
      this.props.actions.searchGithub()
    }
  }
}

const mapStateToProps = ({repos}) => {
  const { searchQuery } = repos
  return {
    searchQuery,
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: {
    searchGithub: () => { dispatch(searchGithub()) },
    changeQuery: (t) => { dispatch(changeQuery(t)) },
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)

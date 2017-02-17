import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import Details from './Details'
import ResultList from './ResultList'
import { searchGithub, changeQuery } from '../actions/repo'

export class AppContainer extends Component {

  static propTypes = {
    searchQuery: PropTypes.string,
  }

  static defaultProps = {
    searchQuery: undefined,
  }

  render () {
    const { searchQuery } = this.props

    return (
      <div className="ui container" style={{marginTop: '4em'}}>
        <h1 className="ui blue header"><i className="github icon" /> Awesome Github Repository Searcher</h1>
        <h3 className="ui grey header" style={{marginTop: '-1em'}}>by <a href="https://twitter.com/wyemun">wyemun</a></h3>

        <div className="ui hidden divider"></div>

        <div style={{paddingBottom: '2em'}}>
          <div className="ui fluid icon input">
            <input
              type="text"
              placeholder="Type the keywords here, press `Enter` search"
              autoComplete={false}
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
    this.props.changeQuery(evt.target.value)
  }

  onKeyDown (evt) {
    if (evt.keyCode === 13) {
      this.props.searchGithub()
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
  searchGithub: () => { dispatch(searchGithub()) },
  changeQuery: (t) => { dispatch(changeQuery(t)) },
})

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)

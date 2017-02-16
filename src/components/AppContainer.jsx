import React, { Component } from 'react'
import Details from './Details'
import ResultList from './ResultList'

export default class AppContainer extends Component {
  render () {
    return (
      <div className="ui container" style={{marginTop: '4em'}}>
        <h1 className="ui blue header">Awesome Github Repository Searcher</h1>

        <div style={{paddingBottom: '2em'}}>
          <div className="ui fluid icon input">
            <input type="text" placeholder="Type the keywords here, press `Enter` search" autocomplete="off" />
            <i className="search icon"></i>
          </div>
        </div>
        <div className="ui two column grid">
          <ResultList />
          <Details />
        </div>
      </div>)
  }
}

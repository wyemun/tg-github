import { expect } from 'chai'
import reducer from '../../src/reducers/repos'
import c from '../../src/constants'

/* global describe */
/* global it */

const initialState = {
  selectedId: null,
  searchQuery: undefined,
  results: [],
  hasSearched: false,
  isFetching: false,
  hasFetched: false,
}

describe('[Reducer] Repos', () => {
  it('should return initial states', () => {
    const expected = {...initialState}
    expect(reducer(undefined, {})).to.deep.equal(expected)
  })

  it('should handle CHANGE_QUERY', () => {
    const searchQuery = 'newsearchquery'
    const mockAction = {
      type: c.CHANGE_QUERY,
      payload: {searchQuery},
    }

    const expected = {
      ...initialState,
      searchQuery,
    }

    expect(reducer({...initialState}, mockAction)).to.deep.equal(expected)
  })

  it('should handle SELECT_REPO', () => {
    const id = 'somenewid'
    const mockAction = {
      type: c.SELECT_REPO,
      payload: {id},
    }

    const expected = {
      ...initialState,
      selectedId: id,
    }

    expect(reducer({...initialState}, mockAction)).to.deep.equal(expected)
  })
})

import { expect } from 'chai'
import * as RepoActions from '../../src/actions/repo'
import c from '../../src/constants'

/* global describe */
/* global it */

describe('[Action] Repo', () => {
  it('should create a select repo action', () => {
    const id = 'tsdgdgt23'
    const expected = {
      type: c.SELECT_REPO,
      payload: {id},
    }

    expect(RepoActions.selectRepo(id)).to.deep.equal(expected)
  })

  it('should create a change search query action', () => {
    const searchQuery = 'newsearchquery'
    const expected = {
      type: c.CHANGE_QUERY,
      payload: {searchQuery},
    }

    expect(RepoActions.changeQuery(searchQuery)).to.deep.equal(expected)
  })
})

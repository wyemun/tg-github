import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import { AppContainer } from '../../src/components/AppContainer'
import ConnectedDetails from '../../src/components/Details'
import ConnectedResultList from '../../src/components/ResultList'

/* global describe */
/* global it */

const setupWrapper = () => {
  const props = {
    searchQuery: undefined,
  }

  return {
    wrapper: shallow(<AppContainer {...props} />),
    props,
  }
}

describe('[Component] AppContainer', () => {
  it('should contain a <Details/>', () => {
    const { wrapper } = setupWrapper()
    expect(wrapper.find(ConnectedDetails)).to.have.length(1)
  })

  it('should contain a <ResultList/>', () => {
    const { wrapper } = setupWrapper()
    expect(wrapper.find(ConnectedResultList)).to.have.length(1)
  })
})

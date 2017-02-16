import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import AppContainer from '../../src/components/AppContainer'

/* global describe */
/* global it */

describe('[Component] AppContainer', () => {
  it('should contain a h1 header', () => {
    const wrapper = shallow(<AppContainer />)
    expect(wrapper.find('h1')).to.have.length(1)
  })
})

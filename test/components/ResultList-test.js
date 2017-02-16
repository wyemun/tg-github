import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'
import ResultList, { ResultCard } from '../../src/components/ResultList'

/* global describe */
/* global it */

describe('[Component] ResultList', () => {
  it('should render correct items count', () => {
    const items = [
      {title: 'title1', body: 'body1', isActive: false},
      {title: 'title1', body: 'body1', isActive: false},
      {title: 'title1', body: 'body1', isActive: false},
    ]

    const wrapper = mount(<ResultList items={items} />)
    expect(wrapper.find(ResultCard)).to.have.length(items.length)
  })
})

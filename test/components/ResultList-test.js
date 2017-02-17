import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'
import sinon from 'sinon'
import { ResultList, ResultCard } from '../../src/components/ResultList'

/* global describe */
/* global it */

describe('[Component] ResultList', () => {
  it('should render and bind with onClickHandler correctly', () => {
    const items = [
      {title: 'title1', body: 'body1', isActive: false, id: 'row1'},
      {title: 'title1', body: 'body1', isActive: false, id: 'row2'},
      {title: 'title1', body: 'body1', isActive: false, id: 'row3'},
    ]

    const props = {
      items,
      selectRepo: sinon.spy(),
    }

    const wrapper = mount(<ResultList {...props} />)

    expect(wrapper.find(ResultCard)).to.have.length(items.length)

    wrapper.find(ResultCard).first().simulate('click')
    expect(props.selectRepo.calledOnce).to.equal(true)
  })
})

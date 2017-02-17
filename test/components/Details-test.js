import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import { Details } from '../../src/components/Details'

/* global describe */
/* global it */

const setupWrapper = () => {
  const props = {
    selectedId: 'a1',
    language: 'javascript',
    url: 'http://somegithub.com',
    title: 'wyemun/some-library',
    description: 'Some library description',
    watcherCount: 2500,
    stargazerCount: 3500,
    opened: true,
  }

  return {
    props,
    wrapper: shallow(<Details {...props}/>),
  }
}

describe('[Component] Details', () => {
  it('should render correctly', () => {
    const { wrapper, props } = setupWrapper()

    expect(wrapper.find('h3')).to.exist
    expect(wrapper.find('h3').first().text()).to.equal(props.title)
    expect(wrapper.find('h3 > a').prop('href')).to.equal(props.url)
  })
})

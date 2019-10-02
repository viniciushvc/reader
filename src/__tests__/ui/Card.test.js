import React from 'react'
import { shallow } from 'enzyme'
import Card from '../../components/Card'

describe('<Card />', () => {
  it('render <Card /> with propTypes', () => {
    const wrapper = shallow(<Card />)

    expect(wrapper.exists()).toBe(true)
  })
})

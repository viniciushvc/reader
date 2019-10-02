import React from 'react'
import { shallow } from 'enzyme'
import Button from '../../components/Button'

describe('<Button />', () => {
  it('render <Button /> with propTypes', () => {
    const wrapper = shallow(<Button type="submit" text="Test" />)

    expect(wrapper.exists()).toBe(true)
  })
})

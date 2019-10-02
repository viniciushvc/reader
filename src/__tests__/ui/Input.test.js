import React from 'react'
import { shallow } from 'enzyme'
import Input from '../../components/Input'

describe('<Input />', () => {
  it('render <Input /> with propTypes', () => {
    const wrapper = shallow(<Input type="text" name="test" />)

    expect(wrapper.exists()).toBe(true)
  })
})

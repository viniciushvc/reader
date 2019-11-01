import React from 'react'
import { shallow } from 'enzyme'
import BookmarkList from '../../components/BookmarkList'

describe('<BookmarkList />', () => {
  it('render <BookmarkList /> with propTypes', () => {
    const wrapper = shallow(<BookmarkList />)

    expect(wrapper.exists()).toBe(true)
  })
})

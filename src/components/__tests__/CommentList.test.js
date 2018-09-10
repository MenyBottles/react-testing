import React from 'react';
import CommmentList from 'components/CommentList';
import Root from 'Root';
import { mount } from 'enzyme';

let wrapped;

beforeEach(() => {
    const initialState = {
        comments: ['New Comment 1', 'New Comment 2']
    }
    wrapped = mount(
        <Root initialState={initialState}>
            <CommmentList/>
        </Root>
    )
})

it('creates one LI per comment', () => {
    expect(wrapped.find('li').length).toEqual(2);
})

it('shows the text for each comment', () => {
    expect(wrapped.render().text()).toContain('New Comment 1');
    expect(wrapped.render().text()).toContain('New Comment 2')
})
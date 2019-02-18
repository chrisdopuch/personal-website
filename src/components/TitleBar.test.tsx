import { IconButton, Theme } from '@material-ui/core';
import { shallow } from 'enzyme';
import React from 'react';
import { TitleBar } from './TitleBar';

const mockDispatch = jest.fn();
jest.mock('../hooks/useDispatch', () => {
  return jest.fn(() => mockDispatch);
});

function getDefaultProps() {
  return {
    classes: {
      appBar: 'appBar',
      menuButton: 'menuButton',
    },
    theme: {} as Theme,
    title: 'default title',
  };
}

describe('TitleBar', () => {
  it('renders default props', () => {
    const wrapper = shallow(<TitleBar {...getDefaultProps()} />);

    expect(wrapper).toMatchSnapshot();
  });

  it("dispatches `toggleNavDrawerOpen` action on IconButton's `onClick`", () => {
    const wrapper = shallow(<TitleBar {...getDefaultProps()} />);

    wrapper
      .find(IconButton)
      .props()
      .onClick();

    expect(mockDispatch).toBeCalledWith({ type: 'toggleNavDrawerOpen' });
  });
});

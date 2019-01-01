import { Theme } from '@material-ui/core';
import { shallow } from 'enzyme';
import React from 'react';
import { App, Projects } from './App';

const appTheme = ({
  breakpoints: {
    up: jest.fn(),
  },
  spacing: {
    unit: 1,
  },
  typography: {
    useNextVariants: true,
  },
  zIndex: {
    drawer: 1,
  },
} as unknown) as Theme;

function getDefaultProps() {
  return {
    classes: {
      content: 'content',
      root: 'root',
      toolbar: 'toolbar',
    },
    theme: appTheme,
    title: 'test',
  };
}

describe('App', () => {
  it('renders default props', () => {
    const wrapper = shallow(<App {...getDefaultProps()} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders Projects', () => {
    const wrapper = shallow(<Projects />);

    expect(wrapper).toMatchSnapshot();
  });
});

import { createMuiTheme } from '@material-ui/core';
import { shallow } from 'enzyme';
import React from 'react';
import { ResponsiveDrawer } from './ResponsiveDrawer';

const appTheme = createMuiTheme({
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
});

function getDefaultProps() {
  return {
    classes: {
      appBar: 'appBar',
      content: 'content',
      drawer: 'drawer',
      drawerPaper: 'drawerPaper',
      menuButton: 'menuButton',
      root: 'root',
      social: 'social',
      toolbar: 'toolbar',
      twitter: 'twitter',
    },
    theme: appTheme,
    title: 'test',
  };
}

describe('ResponsiveDrawer', () => {
  it('renders default props', () => {
    const wrapper = shallow(<ResponsiveDrawer {...getDefaultProps()} />);

    expect(wrapper).toMatchSnapshot();
  });
});
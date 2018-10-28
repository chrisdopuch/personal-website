import { createMuiTheme } from '@material-ui/core';
import { shallow } from 'enzyme';
import React from 'react';
import { App } from './App';

const appTheme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});

function getDefaultProps() {
  return {
    classes: {
      root: 'root',
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
});

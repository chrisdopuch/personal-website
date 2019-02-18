import { Theme } from '@material-ui/core';
import { shallow } from 'enzyme';
import React from 'react';
import useGlobalState from '../hooks/useGlobalState';
import { App } from './App';

jest.mock('../hooks/useGlobalState', () => {
  return jest.fn(() => false);
});

jest.mock('../themes', () => ({ darkTheme: {}, appTheme: {} }));

function getDefaultProps() {
  return {
    classes: {
      content: 'content',
      root: 'root',
      toolbar: 'toolbar',
    },
    theme: {} as Theme,
    title: 'test',
  };
}

describe('App', () => {
  it('renders with default props', () => {
    const wrapper = shallow(<App {...getDefaultProps()} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders when `isDarkMode` is true', () => {
    (useGlobalState as jest.Mock).mockImplementationOnce(() => true);
    const wrapper = shallow(<App {...getDefaultProps()} />);

    expect(wrapper).toMatchSnapshot();
  });
});

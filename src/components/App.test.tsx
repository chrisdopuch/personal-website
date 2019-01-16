import { shallow } from 'enzyme';
import React from 'react';
import { App } from './App';

jest.mock('react-hookstore', () => ({ useStore: jest.fn(() => [{ isDarkMode: false }]) }));
jest.mock('../themes', () => ({ darkTheme: {}, appTheme: {} }));

function getDefaultProps() {
  return {
    classes: {
      content: 'content',
      root: 'root',
      toolbar: 'toolbar',
    },
    title: 'test',
  };
}

describe('App', () => {
  it('renders default props', () => {
    const wrapper = shallow(<App {...getDefaultProps()} />);

    expect(wrapper).toMatchSnapshot();
  });
});

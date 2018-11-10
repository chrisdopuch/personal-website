import { Theme } from '@material-ui/core';
import { shallow } from 'enzyme';
import React from 'react';
import { TitleBar } from './TitleBar';

jest.mock('react-hookstore', () => {
  return { useStore: jest.fn(() => [true, jest.fn()]) };
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
  describe('snapshots', () => {
    it('renders default props', () => {
      const wrapper = shallow(<TitleBar {...getDefaultProps()} />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});

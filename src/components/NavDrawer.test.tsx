import { Theme } from '@material-ui/core';
import { shallow } from 'enzyme';
import React from 'react';
import { NavDrawer } from './NavDrawer';

function getDefaultProps() {
  return {
    classes: {
      drawer: 'drawer',
      drawerPaper: 'drawerPaper',
      social: 'social',
      toolbar: 'toolbar',
      twitter: 'twitter',
    },
    items: [],
    theme: {} as Theme,
    title: 'test',
  };
}

describe('NavDrawer', () => {
  describe('snapshots', () => {
    it('renders default props', () => {
      const wrapper = shallow(<NavDrawer {...getDefaultProps()} />);

      expect(wrapper).toMatchSnapshot();
    });

    it('renders with items', () => {
      const MockHomeIcon = jest.fn();
      const MockHelpIcon = jest.fn();
      const MockHomePage = jest.fn();
      const MockAboutPage = jest.fn();
      const props = {
        ...getDefaultProps(),
        items: [
          { to: '/', label: 'Home', Icon: MockHomeIcon, isRouteExact: true, page: MockHomePage },
          { to: '/about', label: 'About me', Icon: MockHelpIcon, isRouteExact: false, page: MockAboutPage },
        ],
      };
      const wrapper = shallow(<NavDrawer {...props} />);

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('handlers', () => {
    // it('renders default props', () => {
    //   const wrapper = shallow(<NavDrawer {...getDefaultProps()} />);
    //   wrapper.find()
    //   expect(wrapper).toMatchSnapshot();
    // });
  });
});

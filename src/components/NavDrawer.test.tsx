import { Drawer, Theme } from '@material-ui/core';
import { shallow } from 'enzyme';
import React from 'react';
import useGlobalState from '../hooks/useGlobalState';
import { NavDrawer } from './NavDrawer';

const mockDispatch = jest.fn();
jest.mock('../hooks/useDispatch', () => {
  return jest.fn(() => mockDispatch);
});

jest.mock('../hooks/useGlobalState', () => {
  return jest.fn(() => false);
});

function getDefaultProps() {
  return {
    classes: {
      drawer: 'drawer',
      drawerPaper: 'drawerPaper',
    },
    items: [],
    theme: {} as Theme,
  };
}

describe('NavDrawer', () => {
  it('renders with default props', () => {
    const wrapper = shallow(<NavDrawer {...getDefaultProps()} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders with `isNavDrawerOpen` true', () => {
    (useGlobalState as jest.Mock).mockImplementationOnce(() => true);
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

  it("dispatches `setNavDrawerOpen` action on Drawer's `onClose`", () => {
    const wrapper = shallow(<NavDrawer {...getDefaultProps()} />);

    wrapper
      .find(Drawer)
      .first()
      .props()
      .onClose();

    expect(mockDispatch).toBeCalledWith({ type: 'setNavDrawerOpen', payload: false });
  });
});

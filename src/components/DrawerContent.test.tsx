import { Switch, Theme } from '@material-ui/core';
import { shallow } from 'enzyme';
import React from 'react';
import useGlobalState from '../hooks/useGlobalState';
import { DrawerContent } from './DrawerContent';

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
      darkMode: 'darkMode',
      listItemIcon: 'listItemIcon',
      social: 'social',
      toolbar: 'toolbar',
      twitter: 'twitter',
    },
    items: [],
    theme: {} as Theme,
  };
}

describe('DrawerContent', () => {
  it('renders default props', () => {
    const wrapper = shallow(<DrawerContent {...getDefaultProps()} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders with `isDarkMode` true', () => {
    (useGlobalState as jest.Mock).mockImplementationOnce(() => true);
    const wrapper = shallow(<DrawerContent {...getDefaultProps()} />);

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
    const wrapper = shallow(<DrawerContent {...props} />);

    expect(wrapper).toMatchSnapshot();
  });

  it("dispatches `setDarkMode` action on Switch's `onChange`", () => {
    const checked = false;
    const wrapper = shallow(<DrawerContent {...getDefaultProps()} />);

    wrapper
      .find(Switch)
      .props()
      .onChange({ target: { checked } });

    expect(mockDispatch).toBeCalledWith({ type: 'setDarkMode', payload: checked });
  });
});

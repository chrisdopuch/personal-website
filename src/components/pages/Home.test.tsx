import { shallow } from 'enzyme';
import { History, Location } from 'history';
import React from 'react';
import { match } from 'react-router';
import usePageView from '../hooks/usePageView';
import { Home } from './Home';

jest.mock('../hooks/usePageView', () => {
  return jest.fn();
});

const getDefaultProps = () => {
  return {
    classes: {
      '@keyframes face-spin': 'face-spin',
      divider: 'divider',
      face: 'face',
      root: 'root',
    },
    history: {} as History,
    location: {} as Location,
    match: {} as match,
  };
};

describe('Home', () => {
  it('should render with default props', () => {
    const wrapper = shallow(<Home {...getDefaultProps()} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should call the usePageView hook', () => {
    const props = {
      ...getDefaultProps(),
      location: {
        pathname: '/foo',
        search: '?bar=baz',
      } as Location,
    };
    shallow(<Home {...props} />);

    expect(usePageView).toBeCalledWith(props.location);
  });
});

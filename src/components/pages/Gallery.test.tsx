import { shallow } from 'enzyme';
import { History, Location } from 'history';
import React from 'react';
import { match } from 'react-router';
import usePageView from '../../hooks/usePageView';
import { shuffleArray } from '../../utilities';
import { Gallery } from './Gallery';

jest.mock('../../hooks/usePageView', () => {
  return jest.fn();
});

jest.mock('../../utilities', () => {
  return {
    shuffleArray: jest.fn((a) => a),
  };
});

const getDefaultProps = () => {
  return {
    classes: {
      divider: 'divider',
      header: 'header',
      root: 'root',
    },
    history: {} as History,
    location: {} as Location,
    match: {} as match,
  };
};

describe('Gallery', () => {
  it('should render with default props', () => {
    const wrapper = shallow(<Gallery {...getDefaultProps()} />);

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
    shallow(<Gallery {...props} />);

    expect(usePageView).toBeCalledWith(props.location);
  });

  it('should randomize the images array', () => {
    expect(shuffleArray).toBeCalled();
  });
});

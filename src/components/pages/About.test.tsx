import { shallow } from 'enzyme';
import { History, Location } from 'history';
import React from 'react';
import { match } from 'react-router';
import withPageView from '../../hooks/usePageView';
import { About, Header, ProfilePicture, QuickFacts } from './About';

jest.mock('../../hooks/usePageView', () => {
  return jest.fn();
});

const classes = {
  avatar: 'avatar',
  centered: 'centered',
  divider: 'divider',
  gridContainer: 'gridContainer',
  list: 'list',
  root: 'root',
};

const getDefaultProps = () => {
  return {
    classes,
    history: {} as History,
    location: {} as Location,
    match: {} as match,
  };
};

describe('About', () => {
  describe('Main Component', () => {
    it('should render with default props', () => {
      const props = getDefaultProps();
      const wrapper = shallow(<About {...props} />);

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
      shallow(<About {...props} />);

      expect(withPageView).toBeCalledWith(props.location);
    });
  });

  describe('ProfilePicture', () => {
    it('should render with default props', () => {
      const props = getDefaultProps();
      const wrapper = shallow(<ProfilePicture {...props} />);

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Header', () => {
    it('should render with default props', () => {
      const props = getDefaultProps();
      const wrapper = shallow(<Header {...props} />);

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('QuickFacts', () => {
    it('should render with default props', () => {
      const props = getDefaultProps();
      const wrapper = shallow(<QuickFacts {...props} />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});

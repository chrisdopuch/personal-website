import { shallow } from 'enzyme';
import React from 'react';
import { About } from './About';

const classes = {
  avatar: 'avatar',
  centered: 'centered',
  divider: 'divider',
  gridContainer: 'gridContainer',
  list: 'list',
  root: 'root',
};

describe('About', () => {
  describe('Component', () => {
    it('should render with default props', () => {
      const wrapper = shallow(<About classes={classes} />);

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('#renderAvatar', () => {
    it('should render the avatar', () => {
      const wrapper = shallow<About>(<About classes={classes} />);
      const rendered = wrapper.instance().renderAvatar();

      expect(rendered).toMatchSnapshot();
    });
  });

  describe('#renderHeader', () => {
    it('should render the header', () => {
      const wrapper = shallow<About>(<About classes={classes} />);
      const rendered = wrapper.instance().renderHeader();

      expect(rendered).toMatchSnapshot();
    });
  });

  describe('#renderQuickFacts', () => {
    it('should render the quick facts list', () => {
      const wrapper = shallow<About>(<About classes={classes} />);
      const rendered = wrapper.instance().renderQuickFacts();

      expect(rendered).toMatchSnapshot();
    });
  });
});

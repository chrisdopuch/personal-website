import { shallow } from 'enzyme';
import React from 'react';
import { About, getQuickFactsItems, quickFacts } from './About';

const classes = {
  avatar: 'avatar',
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
  describe('#getQuickFactsItems', () => {
    const items = getQuickFactsItems(quickFacts);

    expect(items).toMatchSnapshot();
  });
});

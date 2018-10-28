import { shallow } from 'enzyme';
import React from 'react';
import Home from './Home';

describe('Home', () => {
  it('should render with default props', () => {
    const wrapper = shallow(<Home />);

    expect(wrapper).toMatchSnapshot();
  });
});

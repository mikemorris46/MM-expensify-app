import React from 'react';
import { shallow } from 'enzyme';

import Header from '../../components/Header';

describe('Header component test suite', () => {
  test('should render Header correctly', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper).toMatchSnapshot();
  });
});
import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

it('should match the snapshot', () => {
  const renderedApp = shallow(<Header />);
  expect(renderedApp).toMatchSnapshot();
});
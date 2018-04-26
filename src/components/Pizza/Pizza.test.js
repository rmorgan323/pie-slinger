import React from 'react';
import { shallow } from 'enzyme';
import Pizza from './Pizza';

describe('Pizza tests', () => {

  it('should match the snapshot', () => {
    const renderedApp = shallow(<Pizza />);
    expect(renderedApp).toMatchSnapshot();
  });
  
});
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App tests', () => {

  it('should match the snapshot', () => {
    const renderedApp = shallow(<App />);
    expect(renderedApp).toMatchSnapshot();
  });
  
});

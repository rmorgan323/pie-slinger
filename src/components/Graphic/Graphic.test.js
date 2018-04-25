import React from 'react';
import { shallow } from 'enzyme';
import Graphic from './Graphic';

const mockPizza = {
  crust: "thin",
  size: "medium", 
  toppings: [
    { name: "cheese", amount: "normal" },
    { name: "pepperoni", amount: "extra" },
    { name: "sausage", amount: "extra" }
  ]
};

describe('Graphic tests', () => {
  let renderedApp;

  beforeEach(() => {
    renderedApp = shallow(
      <Graphic 
        crust={mockPizza.crust}
        size={mockPizza.size}  
        toppings={mockPizza.toppings}
      />
    );
  });

  it('should match the snapshot', () => {
    expect(renderedApp).toMatchSnapshot();
  });
});
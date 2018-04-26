import React from 'react';
import { shallow } from 'enzyme';
import OrderDetailsRight from './OrderDetailsRight';

const mockPizza = {
  toppings: [
    { name: "cheese", amount: "normal" },
    { name: "pepperoni", amount: "extra" },
    { name: "sausage", amount: "extra" }
  ]
};

describe('OrderDetailsRight tests', () => {

  it('should match the snapshot', () => {
    const renderedApp = shallow(
      <OrderDetailsRight 
        toppings={mockPizza.toppings}  
      />
    );
    expect(renderedApp).toMatchSnapshot();
  });
  
});
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

const mockPizzaWithNewTopping = {
  crust: "normal",
  size: "large", 
  toppings: [
    { name: "cheese", amount: "extra" },
    { name: "anchovies", amount: "extra" }
  ]
};

describe('Graphic tests', () => {

  it('should match the snapshot', () => {
    const renderedApp = shallow(
      <Graphic 
        crust={mockPizza.crust}
        size={mockPizza.size}  
        toppings={mockPizza.toppings}
      />
    );
    expect(renderedApp).toMatchSnapshot();
  });

  it('should not attempt to display a graphic for a topping if there is no image for it', () => {
    const renderedApp = shallow(
      <Graphic 
        crust={mockPizzaWithNewTopping.crust}
        size={mockPizzaWithNewTopping.large}
        toppings={mockPizzaWithNewTopping.toppings}
      />
    );

    expect(renderedApp.find('img[src="cheese-extra.svg"]').length).toEqual(1);
    expect(renderedApp.find('img[src="anchovies-extra.svg"]').length).toEqual(0);
  });

});












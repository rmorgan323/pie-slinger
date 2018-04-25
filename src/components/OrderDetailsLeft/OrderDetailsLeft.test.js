import React from 'react';
import { shallow } from 'enzyme';
import OrderDetailsLeft from './OrderDetailsLeft';

const mockPizza = {
  date: "2018-04-25T06:32:31.259Z",
  orderId: 9273479,
  crust: "thin",
  size: "medium"
};

describe('OrderDetailsLeft tests', () => {
  it('should match the snapshot', () => {
    const renderedApp = shallow(
      <OrderDetailsLeft 
        date={mockPizza.date} 
        orderId={mockPizza.orderId} 
        crust={mockPizza.crust}
        size={mockPizza.size}  
      />
    );
    expect(renderedApp).toMatchSnapshot();
  });
});
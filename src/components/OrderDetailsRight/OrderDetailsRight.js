import React from 'react';
import './OrderDetailsRight.css';
import moment from 'moment';
import cap from '../../helper/cap/cap';

const OrderDetailsRight = ({ toppings }) => {

  const displayToppings = (toppingsArray) => {
    return toppingsArray.map((topping, index) => {
      return <p key={index}>{cap(topping.name)}: {cap(topping.amount)}</p>
    });
  };

  return (
    <div className="OrderDetailsRight">
      <h3>TOPPINGS</h3>
      <div className="toppings-container">
        {displayToppings(toppings)}
      </div>
    </div>
  );
};

export default OrderDetailsRight;
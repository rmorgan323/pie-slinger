import React from 'react';
import { PropTypes } from 'prop-types';
import './OrderDetailsRight.css';
import cap from '../../helper/cap/cap';
import checkNormal from '../../helper/checkNormal/checkNormal';

const OrderDetailsRight = ({ toppings }) => {

  const displayToppings = (toppingsArray) => {
    return toppingsArray.map((topping, index) => {
      return (
        <p key={index}>{cap(topping.name)}: <span className={checkNormal(topping.amount)}
        >{cap(topping.amount)}</span>
        </p>
      );
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

OrderDetailsRight.propTypes = {
  toppings: PropTypes.array
};
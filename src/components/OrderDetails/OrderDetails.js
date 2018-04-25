import React from 'react';
import './OrderDetails.css';
import moment from 'moment';
import cap from '../../helper/cap/cap';

const OrderDetails = ({ date, orderId, crust, size, toppings }) => {

  const displayToppings = (toppingsArray) => {
    return toppingsArray.map((topping, index) => {
      return <p key={index}>{cap(topping.name)}: {cap(topping.amount)}</p>
    });
  };

  let display;

  if (orderId) {
    display = (
      <div>
        <h3>ORDER</h3>
        <p>{moment(date).calendar()}</p>
        <p>Order ID: {orderId}</p>
        <h3>PIZZA</h3>
        <p>Crust: {cap(crust)}</p>
        <p>Size: {cap(size)}</p>
        <h3>TOPPINGS</h3>
        {displayToppings(toppings)}
      </div>
    )
  }

  return (
    <div className="OrderDetails">
      {display}
    </div>
  )
}

export default OrderDetails;